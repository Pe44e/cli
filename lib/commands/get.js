const Npm = require('../npm.js')
const BaseCommand = require('../base-cmd.js')

class Get extends BaseCommand {
  static description = 'Get a value from the npm configuration'
  static name = 'get'
  static usage = ['[<key> ...] (See `npm config`)']
  static params = ['long']
  static ignoreImplicitWorkspace = false

  // TODO
  /* c8 ignore start */
  static async completion (opts) {
    const Config = Npm.cmd('config')
    return Config.completion(opts)
  }
  /* c8 ignore stop */

  async exec (args) {
    return this.npm.exec('config', ['get'].concat(args))
  }
}

module.exports = Get
