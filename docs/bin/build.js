const run = require('../lib/build.js')
const { paths } = require('../lib/index')

run(paths)
  .then((res) => console.error(`Wrote ${res.length} files`))
  /* c8 ignore start - covered in istanbul not not in the c8 swap */
  .catch((err) => {
    process.exitCode = 1
    console.error(err)
  })
  /* c8 ignore stop */
