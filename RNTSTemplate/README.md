# ReactNative Typescript Template App

- Run the following command

  ```bash
    npx react-native init RNTSTemplate --template react-native-template-typescript
    #✔ Downloading template
    #✔ Copying template
    #✔ Processing template
    #⠹ Installing CocoaPods dependencies (this may take a few minutes)
    #✔ Installing CocoaPods dependencies (this may take a few minutes)
  ```

## NPX and NPM

- NPM - `N`ode `P`ackage `M`anager.
- NPX - `N`PM `P`ackage e`X`ecuter. - Executes NPM Binary Packages / `<command>` (from `$PATH` (or) `node_module/.bin` (or) from a central cache) installing any packages needed in order for `<command>` to run.

## NPM CLI Essentials

### `npm init`

- Initializes a `packages.json` with Essential attributes for NPM

### `npm install`

- Installs a package.

    ```bash
      npm install (with no args, in package dir)
      npm install <git repo url>
      npm install <git-host>:<git-user>/<repo-name>
      npm install <folder>
      # aliases:  npm i, npm add
    ```

#### Saving to `package.json`

  1. `-P`, `--save-prod`: Package will appear in your `dependencies`. This is the __default__ unless -D or -O are present.
  2. `-D`, `--save-dev`: Package will appear in your `devDependencies`.
  3. `-O`, `--save-optional`: Package will appear in your `optionalDependencies`.
  4. `--no-save`: Prevents saving to dependencies.
  5. `-E`, `--save-exact`: Saved dependencies will be configured with an exact version rather than using npm’s default semver range operator
  6. `-B`, `--save-bundle`: Saved dependencies will also be added to your `bundleDependencies` list.
  7. `-f` or `--force` argument will __force__ npm to fetch remote resources __even if a local copy exists on disk__.

### `npm ls`

- Used to show everything that has been installed so far.

    ```bash
    karthikc@MacBook-Pro RNTSTemplate (master) $ npm ls react-native
    rn_ts_template@0.0.1 /Users/karthikc/Studies/WORKSPACE/REACT_NATIVE/RNTSTemplate
    └── react-native@0.61.5
    ```

### `npm search`

- Used to show everything that is available in NPM registry.

### NPM Folders (Folder Structure used by NPM)

- Prefix Configuration (_{prefix}_)
  - defaults to location where node is installed.
  - `/usr/local` on most systems.
  - `%AppData%\npm` on Windows.
- Local install (default): puts stuff in ./node_modules of the current package root.
- Global install (with -g): puts stuff in /usr/local or wherever node is installed.

#### NPM Packages

1. Normal Packages - `somepackagename`

    - Installed under `node_modules/packagename`.
    - Are always __public__.

2. Scoped Packages - `@somescope/somepackagename`

    - (Installed under `node_modules/@myorg/packagename`, where __myorg__ is the scope.)
    - Are __private__ by default.

#### NPM Executables

1. If global are linked into `{prefix}/bin`.
2. If local are linked into `./node_modules/.bin`.
so that __they are available to scripts run through npm__.

#### NPM Config Files (npmrc)

- `npm config` can be used to update and edit the contents of the __user__ and __global__ `npmrc` files

>__Four Relevant Files:__
>
>1. per-project config file (/path/to/my/project/.npmrc)
>2. per-user config file (~/.npmrc)
>3. global config file ($PREFIX/etc/npmrc)
>4. npm builtin config file (/path/to/npm/npmrc)

## References

- [React Native][react_native_start] Getting Started.
- [React Native + Typescript][react_native_typescript]
- [NPM Cli][npm_cli].
- NPM [Semantics Version Parser][npm_semver].
- [React Native CLI][react_native_cli].
- [React Native Blog][react_native_blog].
- [TypeScript Handbook][type_script_handbook].
- [Static Type Checkers][static_type_checkers].

  ---

  [react_native_start]: https://facebook.github.io/react-native/docs/getting-started
  [react_native_cli]: https://www.npmjs.com/package/react-native-cli
  [react_native_blog]: https://facebook.github.io/react-native/blog/
  [react_native_typescript]: https://facebook.github.io/react-native/docs/typescript
  [type_script_handbook]: http://www.typescriptlang.org/docs/handbook/basic-types.html
  [static_type_checkers]: https://reactjs.org/docs/static-type-checking.html
  [npm_semver]: https://github.com/npm/node-semver
  [npm_cli]: https://docs.npmjs.com/cli/npm
