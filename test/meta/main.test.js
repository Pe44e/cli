const t = require('tap')

t.test('example 1', async t => {
  t.testdir({
    meow: 'hi',
  })
  t.ok(true)
})

t.test('example 2', (t) => {
  t.test('example 3', async (t) => {
    t.testdir({
      meow: 'hi',
    })
    t.ok(true)
  })
  t.end()
})