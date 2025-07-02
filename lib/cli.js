try {
  const { enableCompileCache } = require('node:module')
  /* c8 ignore next */
  if (enableCompileCache) {
    enableCompileCache()
  }
} catch (e) { /* c8 ignore next */ }

const validateEngines = require('./cli/validate-engines.js')
const cliEntry = require('node:path').resolve(__dirname, 'cli/entry.js')

module.exports = (process) => validateEngines(process, () => require(cliEntry))
