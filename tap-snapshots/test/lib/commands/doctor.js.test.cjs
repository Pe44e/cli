/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/lib/commands/doctor.js > TAP > bad proxy > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > bad proxy > output 1`] = `
Connecting to the registry
Not ok
Invalid protocol \`ssh:\` connecting to proxy \`npmjs.org\`
Checking npm version
Not ok
Error: Invalid protocol \`ssh:\` connecting to proxy \`npmjs.org\`
Checking node version
Not ok
Error: Invalid protocol \`ssh:\` connecting to proxy \`npmjs.org\`
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-bad-proxy/global/bin
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Ok
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Ok
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > cache > logs 1`] = `
Object {
  "error": Array [],
  "info": Array [
    "doctor Running checkup",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > cache > output 1`] = `
Checking permissions on cached files (this may take awhile)
Ok
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > git > logs 1`] = `
Object {
  "error": Array [],
  "info": Array [
    "doctor Running checkup",
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > git > output 1`] = `

`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > invalid environment > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > invalid environment > output 1`] = `
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Not ok
Error: Add {CWD}/.tap/fixtures/test-lib-commands-doctor.js-discrete-checks-invalid-environment/global/bin to your $PATH
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > permissions - not windows > logs 1`] = `
Object {
  "error": Array [],
  "info": Array [
    "doctor Running checkup",
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > permissions - not windows > output 1`] = `
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Ok
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Ok
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > permissions - windows > logs 1`] = `
Object {
  "error": Array [],
  "info": Array [
    "doctor Running checkup",
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > permissions - windows > output 1`] = `

`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > ping > logs 1`] = `
Object {
  "error": Array [],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > ping > output 1`] = `
Connecting to the registry
Ok
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > registry > logs 1`] = `
Object {
  "error": Array [],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > discrete checks > registry > output 1`] = `
Connecting to the registry
Ok
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
`

exports[`test/lib/commands/doctor.js > TAP > error reading directory > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [
    "doctor checkFilesPermission error reading directory {CWD}/.tap/fixtures/test-lib-commands-doctor.js-error-reading-directory/cache",
    "doctor checkFilesPermission error reading directory {CWD}/.tap/fixtures/test-lib-commands-doctor.js-error-reading-directory/prefix/node_modules",
    "doctor checkFilesPermission error reading directory {CWD}/.tap/fixtures/test-lib-commands-doctor.js-error-reading-directory/global/node_modules",
    "doctor checkFilesPermission error reading directory {CWD}/.tap/fixtures/test-lib-commands-doctor.js-error-reading-directory/prefix/node_modules/.bin",
    "doctor checkFilesPermission error reading directory {CWD}/.tap/fixtures/test-lib-commands-doctor.js-error-reading-directory/global/bin",
  ],
}
`

exports[`test/lib/commands/doctor.js > TAP > error reading directory > readdir error 1`] = `
Connecting to the registry
Ok
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Ok
current: v1.0.0, recommended: v1.0.0
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-error-reading-directory/global/bin
Checking permissions on cached files (this may take awhile)
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-error-reading-directory/cache (should be owned by current user)
Checking permissions on local node_modules (this may take awhile)
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-error-reading-directory/prefix/node_modules (should be owned by current user)
Checking permissions on global node_modules (this may take awhile)
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-error-reading-directory/global/node_modules
Checking permissions on local bin folder
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-error-reading-directory/prefix/node_modules/.bin
Checking permissions on global bin folder
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-error-reading-directory/global/bin
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > incorrect owner > incorrect owner 1`] = `
Connecting to the registry
Ok
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Ok
current: v1.0.0, recommended: v1.0.0
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-owner/global/bin
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Ok
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Ok
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > incorrect owner > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > incorrect permissions > incorrect owner 1`] = `
Connecting to the registry
Ok
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Ok
current: v1.0.0, recommended: v1.0.0
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-permissions/global/bin
Checking permissions on cached files (this may take awhile)
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-permissions/cache (should be owned by current user)
Checking permissions on local node_modules (this may take awhile)
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-permissions/prefix/node_modules (should be owned by current user)
Checking permissions on global node_modules (this may take awhile)
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-permissions/global/node_modules
Checking permissions on local bin folder
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-permissions/prefix/node_modules/.bin
Checking permissions on global bin folder
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-permissions/global/bin
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > incorrect permissions > logs 1`] = `
Object {
  "error": Array [
    "doctor checkFilesPermission Missing permissions on {CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-permissions/cache (expect: readable)",
    "doctor checkFilesPermission Missing permissions on {CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-permissions/prefix/node_modules (expect: readable, writable)",
    "doctor checkFilesPermission Missing permissions on {CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-permissions/global/node_modules (expect: readable)",
    "doctor checkFilesPermission Missing permissions on {CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-permissions/prefix/node_modules/.bin (expect: readable, writable, executable)",
    "doctor checkFilesPermission Missing permissions on {CWD}/.tap/fixtures/test-lib-commands-doctor.js-incorrect-permissions/global/bin (expect: executable)",
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > missing git > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [
    String(
      doctor getGitPath Error: test error
    ),
  ],
}
`

exports[`test/lib/commands/doctor.js > TAP > missing git > missing git 1`] = `
Connecting to the registry
Ok
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Ok
current: v1.0.0, recommended: v1.0.0
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Not ok
Error: Install git and ensure it's in your PATH.
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-missing-git/global/bin
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Ok
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Ok
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > missing global directories > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [
    "doctor checkFilesPermission error getting info for {CWD}/.tap/fixtures/test-lib-commands-doctor.js-missing-global-directories/global/node_modules",
    "doctor checkFilesPermission error getting info for {CWD}/.tap/fixtures/test-lib-commands-doctor.js-missing-global-directories/global/bin",
  ],
}
`

exports[`test/lib/commands/doctor.js > TAP > missing global directories > missing global directories 1`] = `
Connecting to the registry
Ok
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Ok
current: v1.0.0, recommended: v1.0.0
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-missing-global-directories/global/bin
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-missing-global-directories/global/node_modules
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Not ok
Check the permissions of files in {CWD}/.tap/fixtures/test-lib-commands-doctor.js-missing-global-directories/global/bin
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > node out of date - current > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > node out of date - current > node is out of date 1`] = `
Connecting to the registry
Ok
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Not ok
Use node v2.0.1 (current: v2.0.0)
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-node-out-of-date---current/global/bin
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Ok
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Ok
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > node out of date - lts > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > node out of date - lts > node is out of date 1`] = `
Connecting to the registry
Ok
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Not ok
Use node v1.0.0 (current: v0.0.1)
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-node-out-of-date---lts/global/bin
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Ok
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Ok
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > non-default registry > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > non-default registry > non default registry 1`] = `
Connecting to the registry
Ok
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch http://some-other-url.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Ok
current: v1.0.0, recommended: v1.0.0
Checking configured npm registry
Not ok
Try \`npm config set registry=https://registry.npmjs.org/\`
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-non-default-registry/global/bin
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Ok
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Ok
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > npm out of date > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > npm out of date > npm is out of date 1`] = `
Connecting to the registry
Ok
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Ok
current: v1.0.0, recommended: v1.0.0
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-npm-out-of-date/global/bin
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Ok
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Ok
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > ping 404 > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > ping 404 > ping 404 1`] = `
Connecting to the registry
Not ok
404 404 Not Found - GET https://registry.npmjs.org/-/ping
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Ok
current: v1.0.0, recommended: v1.0.0
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-ping-404/global/bin
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Ok
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Ok
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > ping 404 in color > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "/u001b[94mdoctor/u001b[39m Running checkup",
    "/u001b[94mdoctor/u001b[39m Pinging registry",
    "/u001b[94mdoctor/u001b[39m Getting npm package information",
    "/u001b[94mdoctor/u001b[39m Getting Node.js release information",
    "/u001b[94mdoctor/u001b[39m Finding git in your PATH",
    "/u001b[94mdoctor/u001b[39m getBinPath Finding npm global bin in your PATH",
    "/u001b[94mdoctor/u001b[39m verifyCachedFiles Verifying the npm cache",
    String(
      /u001b[94mdoctor/u001b[39m verifyCachedFiles Verification complete. Stats: {
      /u001b[94mdoctor/u001b[39m   "badContentCount": 0,
      /u001b[94mdoctor/u001b[39m   "reclaimedCount": 0,
      /u001b[94mdoctor/u001b[39m   "missingContent": 0,
      /u001b[94mdoctor/u001b[39m   "verifiedContent": 0
      /u001b[94mdoctor/u001b[39m }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > ping 404 in color > ping 404 in color 1`] = `
Connecting to the registry
[31mNot ok[39m
[36m404 404 Not Found - GET https://registry.npmjs.org/-/ping[39m
Checking npm version
[31mNot ok[39m
[36mFetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')[39m
Checking node version
[32mOk[39m
current: v1.0.0, recommended: v1.0.0
Checking configured npm registry
[32mOk[39m
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
[32mOk[39m
/path/to/git
Checking for global bin folder in PATH
[32mOk[39m
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-ping-404-in-color/global/bin
Checking permissions on cached files (this may take awhile)
[32mOk[39m
Checking permissions on local node_modules (this may take awhile)
[32mOk[39m
Checking permissions on global node_modules (this may take awhile)
[32mOk[39m
Checking permissions on local bin folder
[32mOk[39m
Checking permissions on global bin folder
[32mOk[39m
Verifying cache contents (this may take awhile)
[32mOk[39m
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > ping exception with code > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > ping exception with code > ping failure 1`] = `
Connecting to the registry
Not ok
request to https://registry.npmjs.org/-/ping failed, reason: Test Error
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Ok
current: v1.0.0, recommended: v1.0.0
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-ping-exception-with-code/global/bin
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Ok
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Ok
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > ping exception without code > logs 1`] = `
Object {
  "error": Array [
    "Some problems found. See above for recommendations.",
  ],
  "info": Array [
    "doctor Running checkup",
    "doctor Pinging registry",
    "doctor Getting npm package information",
    "doctor Getting Node.js release information",
    "doctor Finding git in your PATH",
    "doctor getBinPath Finding npm global bin in your PATH",
    "doctor verifyCachedFiles Verifying the npm cache",
    String(
      doctor verifyCachedFiles Verification complete. Stats: {
      doctor   "badContentCount": 0,
      doctor   "reclaimedCount": 0,
      doctor   "missingContent": 0,
      doctor   "verifiedContent": 0
      doctor }
    ),
  ],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > ping exception without code > ping failure 1`] = `
Connecting to the registry
Not ok
request to https://registry.npmjs.org/-/ping failed, reason: Test Error
Checking npm version
Not ok
FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/npm: Cannot read properties of undefined (reading 'stream')
Checking node version
Ok
current: v1.0.0, recommended: v1.0.0
Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)
Checking for git executable in PATH
Ok
/path/to/git
Checking for global bin folder in PATH
Ok
{CWD}/.tap/fixtures/test-lib-commands-doctor.js-ping-exception-without-code/global/bin
Checking permissions on cached files (this may take awhile)
Ok
Checking permissions on local node_modules (this may take awhile)
Ok
Checking permissions on global node_modules (this may take awhile)
Ok
Checking permissions on local bin folder
Ok
Checking permissions on global bin folder
Ok
Verifying cache contents (this may take awhile)
Ok
verified 0 tarballs
`

exports[`test/lib/commands/doctor.js > TAP > silent errors > logs 1`] = `
Object {
  "error": Array [],
  "info": Array [],
  "warn": Array [],
}
`

exports[`test/lib/commands/doctor.js > TAP > silent errors > output 1`] = `

`
