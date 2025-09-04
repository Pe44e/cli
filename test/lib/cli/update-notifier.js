const t = require('tap')
const { basename } = require('node:path')
const tmock = require('../../fixtures/tmock')
const mockNpm = require('../../fixtures/mock-npm')
const fs = require('node:fs/promises')
const npa = require('npm-package-arg')
const { manifest } = require('pacote')

const CURRENT_VERSION = '123.420.69'
const CURRENT_MAJOR = '122.420.69'
const CURRENT_MINOR = '123.419.69'
const CURRENT_PATCH = '123.420.68'
const NEXT_VERSION = '123.421.70'
const NEXT_MINOR = '123.420.70'
const NEXT_PATCH = '123.421.69'
const CURRENT_BETA = '124.0.0-beta.99999'
const HAVE_BETA = '124.0.0-beta.0'

const runUpdateNotifier = async (t, {
  STAT_ERROR,
  WRITE_ERROR,
  PACOTE_ERROR,
  STAT_MTIME = 0,
  mocks: _mocks = {},
  command = 'help',
  prefixDir,
  version = CURRENT_VERSION,
  argv = [],
  ...config
} = {}) => {
  const fsUses = {
    stat: [],
    writeFile: [],
  }

  const mockFs = {
    ...fs,
    stat: async (path) => {
      const base = basename(path)
      const exclude = ['node', 'package.json', 'node_modules', 'package.json']
      if (!exclude.includes(base)) {
        fsUses.stat.push(base)
      }

      if (STAT_ERROR) {
        throw STAT_ERROR
      }
      return { mtime: new Date(STAT_MTIME) }
    },
    writeFile: async (path) => {
      const base = basename(path)
      fsUses.writeFile.push(base)
      if (WRITE_ERROR) {
        throw WRITE_ERROR
      }
    },
  }

  const MANIFEST_REQUEST = []
  const mockPacote = {
    manifest: async (_spec) => {
      const spec = npa(_spec)
      MANIFEST_REQUEST.push(spec.raw)

      if (spec.raw === '.') {
        return manifest(spec)
      }

      if (PACOTE_ERROR) {
        throw PACOTE_ERROR
      }
      const manifestV = spec.raw === 'npm@latest' ? CURRENT_VERSION
        : /-/.test(spec.raw) ? CURRENT_BETA : NEXT_VERSION
      return { version: manifestV }
    },
  }

  const mocks = {
    pacote: mockPacote,
    'node:fs/promises': mockFs,
    '{ROOT}/package.json': { version },
    'ci-info': { isCI: false, name: null },
    ..._mocks,
  }

  const mock = await mockNpm(t, {
    command,
    mocks,
    config,
    exec: true,
    prefixDir,
    argv,
  })
  const updateNotifier = tmock(t, '{LIB}/cli/update-notifier.js', mocks)

  const result = await updateNotifier(mock.npm)

  return {
    result,
    fsUses,
    MANIFEST_REQUEST,
  }
}

t.test('duration has elapsed, no updates', async t => {
  const { fsUses, result, MANIFEST_REQUEST } = await runUpdateNotifier(t)
  t.same(fsUses, {
    stat: ['_update-notifier-last-checked'],
    writeFile: ['_update-notifier-last-checked'],
  })
  t.not(result)
  t.same(MANIFEST_REQUEST, [
    'npm@latest',
  ])
})

t.test('situations in which we do not notify', t => {
  t.test('nothing to do if notifier disabled', async t => {
    const { fsUses, result, MANIFEST_REQUEST } = await runUpdateNotifier(t, {
      'update-notifier': false,
    })
    t.same(fsUses, {
      stat: [],
      writeFile: [],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, [])
  })

  t.test('do not suggest update if already updating', async t => {
    const { fsUses, result, MANIFEST_REQUEST } = await runUpdateNotifier(t, {
      command: 'install',
      prefixDir: { 'package.json': `{"name":"${t.testName}"}` },
      argv: ['npm'],
      global: true,
    })
    t.same(fsUses, {
      stat: [],
      writeFile: [],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, ['.'])
  })

  t.test('do not suggest update if already updating with spec', async t => {
    const { fsUses, result, MANIFEST_REQUEST } = await runUpdateNotifier(t, {
      command: 'install',
      prefixDir: { 'package.json': `{"name":"${t.testName}"}` },
      argv: ['npm@latest'],
      global: true,
    })
    t.same(fsUses, {
      stat: [],
      writeFile: [],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, ['.'])
  })

  t.test('do not update if same as latest', async t => {
    const { fsUses, result, MANIFEST_REQUEST } = await runUpdateNotifier(t)
    t.same(fsUses, {
      stat: ['_update-notifier-last-checked'],
      writeFile: ['_update-notifier-last-checked'],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, [
      'npm@latest',
    ])
  })

  t.test('check if stat errors (here for coverage)', async t => {
    const STAT_ERROR = new Error('blorg')
    const { fsUses, result, MANIFEST_REQUEST } = await runUpdateNotifier(t, { STAT_ERROR })
    t.same(fsUses, {
      stat: ['_update-notifier-last-checked'],
      writeFile: ['_update-notifier-last-checked'],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, [
      'npm@latest',
    ])
  })

  t.test('ok if write errors (here for coverage)', async t => {
    const WRITE_ERROR = new Error('grolb')
    const { fsUses, result, MANIFEST_REQUEST } = await runUpdateNotifier(t, { WRITE_ERROR })
    t.same(fsUses, {
      stat: ['_update-notifier-last-checked'],
      writeFile: ['_update-notifier-last-checked'],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, [
      'npm@latest',
    ])
  })

  t.test('ignore pacote failures (here for coverage)', async t => {
    const PACOTE_ERROR = new Error('pah-KO-tchay')
    const { fsUses, result, MANIFEST_REQUEST } = await runUpdateNotifier(t, { PACOTE_ERROR })
    t.same(fsUses, {
      stat: ['_update-notifier-last-checked'],
      writeFile: ['_update-notifier-last-checked'],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, [
      'npm@latest',
    ])
  })

  t.test('do not update if newer than latest, but same as next', async t => {
    const {
      fsUses,
      result,
      MANIFEST_REQUEST,
    } = await runUpdateNotifier(t, { version: NEXT_VERSION })
    t.same(fsUses, {
      stat: ['_update-notifier-last-checked', '_update-notifier-last-checked'],
      writeFile: ['_update-notifier-last-checked', '_update-notifier-last-checked'],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, [
      'npm@latest',
      `npm@^${NEXT_VERSION}`,
    ])
  })

  t.test('do not update if on the latest beta', async t => {
    const {
      fsUses,
      result,
      MANIFEST_REQUEST,
    } = await runUpdateNotifier(t, { version: CURRENT_BETA })
    t.same(fsUses, {
      stat: ['_update-notifier-last-checked'],
      writeFile: ['_update-notifier-last-checked'],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, [
      `npm@^${CURRENT_BETA}`,
    ])
  })

  t.test('do not update in CI', async t => {
    const { fsUses, result, MANIFEST_REQUEST } = await runUpdateNotifier(t, { mocks: {
      'ci-info': { isCI: true, name: 'something' },
    } })
    t.same(fsUses, {
      stat: [],
      writeFile: [],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, [])
  })

  t.test('only check weekly for GA releases', async t => {
    // One week (plus five minutes to account for test environment fuzziness)
    const STAT_MTIME = Date.now() - 1000 * 60 * 60 * 24 * 7 + 1000 * 60 * 5
    const { fsUses, result, MANIFEST_REQUEST } = await runUpdateNotifier(t, { STAT_MTIME })
    t.same(fsUses, {
      stat: ['_update-notifier-last-checked'],
      writeFile: [],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, [])
  })

  t.test('only check daily for betas', async t => {
    // One day (plus five minutes to account for test environment fuzziness)
    const STAT_MTIME = Date.now() - 1000 * 60 * 60 * 24 + 1000 * 60 * 5
    const {
      fsUses,
      result,
      MANIFEST_REQUEST,
    } = await runUpdateNotifier(t, { STAT_MTIME, version: HAVE_BETA })
    t.same(fsUses, {
      stat: ['_update-notifier-last-checked'],
      writeFile: [],
    })
    t.not(result)
    t.same(MANIFEST_REQUEST, [])
  })

  t.end()
})

t.test('notification situations', async t => {
  const cases = {
    [HAVE_BETA]: [`npm@^${HAVE_BETA}`],
    [NEXT_PATCH]: [`npm@latest`, `npm@^${NEXT_PATCH}`],
    [NEXT_MINOR]: [`npm@latest`, `npm@^${NEXT_MINOR}`],
    [CURRENT_PATCH]: ['npm@latest'],
    [CURRENT_MINOR]: ['npm@latest'],
    [CURRENT_MAJOR]: ['npm@latest'],
  }
  for (const [version, reqs] of Object.entries(cases)) {
    for (const color of [false, 'always']) {
      await t.test(`${version} - color=${color}`, async t => {
        const {
          fsUses,
          result,
          MANIFEST_REQUEST,
        } = await runUpdateNotifier(t, { version, color })
        t.ok(result)
        t.matchSnapshot(result)
        t.same(fsUses, {
          stat: reqs.map(() => '_update-notifier-last-checked'),
          writeFile: reqs.map(() => '_update-notifier-last-checked'),
        })
        t.strictSame(MANIFEST_REQUEST, reqs)
      })
    }
  }
})
