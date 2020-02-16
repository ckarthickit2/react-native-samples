# React Native Samples

## `npx`

By default, npx will check whether `<command>` exists in $PATH, or in the local project binaries `(node_modules/.bin)`, and execute that.  
If `<command>` is not found, it will be __installed prior to execution__.

## Setting up a New REACT-NATIVE Template Project

>If you previously installed a global react-native-cli package, please remove it as it may cause unexpected issues.
>React Native has a built-in command line interface, which you can use to generate a new project.

- Use `npx` to install `react-native` and perform `react-native init` in one-shot.

```bash
npx react-native init RNStarter
#⠦ Downloading template
#✔ Copying template
#✔ Processing template
#⠴ Installing CocoaPods dependencies (this may take a few minutes)
✔ Installing CocoaPods dependencies (this may take a few minutes)
```

- To install specific `react-native` __version__.

```bash
npx react-native init AwesomeProject --version X.XX.X
```

- Install Custom ReactNative Template (Typescript etc.,)

```bash
npx react-native init AwesomeTSProject --template react-native-template-typescript
```

- View __current__ `react-native config`

```bash
npx --quiet --no-install react-native config
#used in build.gradle for auto-linking.
```

## Adding `react-navigation` and it's Peer Dependencies

```bash
npm install --save react-navigation
npm install --save react-native-gesture-handler
npm install --save react-navigation-stack
npm install --save react-native-safe-area-context
npm install --save @react-native-community/masked-view
```

## React Native Support for JSX

By deafult , `metro-react-native-babel-preset` doesn't pick `JSX` files.
We have to explicitly add `resolver.sourceExts` to `metro.config.js` (__RN >0.59__) like below:

> E.g., HomeScreen.jsx failed to be picked by default

```js
module.exports = {
  resolver: {
    /* resolver options */
   sourceExts: ['jsx','js', 'json', 'ts', 'tsx'] //add here
  }
}
```

## Suppport for `async` and `await` in eslint

```js
  {
    ecmaVersion: 2017,
  }
```

## Configuring Metro Bundler using `metro-config`

- Install necessary packages

  ```bash
    npm i --save-dev metro-config
  ```

- configure `metro.config.js`

  ```js
  const {getDefaultConfig} = require('metro-config');
  //Configure using an async IIFE
  module.exports = (async () => {
    //get default sourceExts, assetExts from metro-config
    const {
      resolver: {sourceExts, assetExts},
    } = await getDefaultConfig();

    //return a new metro-config object adding on top of default metro-config.
    // It has a "transformer" object and "resolver" object.
    return {
      transformer: {
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: false,
          },
        }),
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
      },
      resolver: {
        //add jsx addittionaly as it is not added by default.
        sourceExts: [...sourceExts, 'jsx'],
      },
    };
  })();
  ```

## Configuring ESLint for JSX

```js
parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  }
```

## Configuring Script to run ES-Lint

- Install `@react-native-community/eslint-config`

```bash
npm i @react-native-community/eslint-config --save-dev
```

- Configure script in `packages.json`

```json
"scripts": {
  "pretty": "npx eslint --fix \"src/**/*.js*\""
}
```

## Configuring Script to run `Prettier`

``` json
"scripts": {
  "pretty": "npx prettier \"src/**/*.js*\" --write"
}
```

> Now execute `npm run pretty` to apply __prettier__ to all `.js`,`.jsx` files.

### Configuring `react-native-svg`

- Install the necessary packages

  ```bash
    #save react-native-svg in dependencies
    npm i --save react-native-svg
    #save react-native-svg-transfomer in devDependencies
    npm i --save-dev react-native-svg-transformer
    #install necessary ios PODs
    cd ios && pod install
  ```

  - Configure `metro.config.js` to remove svg from assetExt and add to sourceExt

  ```js
  //Initial metro.config.js is shown above
  resolver: {
        //remove svg from assetExt as it will get transformed into component by react-native-svg-transformer
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        //append svg to sourceExts as they are treated as source from here-on
        sourceExts: [...sourceExts, 'svg'],
      },
  ```

### Configuring `react-native-elements` and `react-native-vector-icons`

- Install & Link necessary pacakges

```bash
 npm i --save react-native-elements

 # https://react-native-elements.github.io/react-native-elements/
 npm i --save react-native-vector-icons
 # link
 npx react-native link react-native-vector-icons
 # or Just try pod install
 cd ios && pod install
```

## Configure Prettier to ignore files

- Use `.prettierignore`

```txt
 *.json
```

## VSCode Extensions

- [React Native Tools][react_native_tools]

## Common Errors and Solutions

- `Text stings must be rendered withing a &lt;Text&gt; component.` in JSX
    > Happens If we __terminate a JSX Tag__ with semi-colon (;) as shown below
    > Remove the semi-colon and the rendering will be proper.

   ```jsx
    <View style={styles.containerStyle}>
    <Image source={pic} style={styles.imageStyle} />;
    </View>
   ```

- Installing Local Package as Dependency with `react-native`

  >`npm install` with a __local path__ installs libraries in `node_modules` with a __symlink__ pointing to the local path of the package. Unfortunately this causes an issue with the `react native metro bundler` (" does not exist in the Haste module map"). See [here][install_local_dependency_rn] for more information.

  __Solutions:__
  1. Use `react-native install` instead of `npm install` as it doesn't create symbolic links.
  2. Use [wml][npm_package_wml] which listens to changes in some folder (using Watchman) and copies changed files into another folder.
  
  > Please Note that there should not be any `node_modules` folder inside the locally linked package. This will cause unknown react-native module errors.
  >> Eg., `Module RCTLog is not a registered callable module.`

## References

- [create-react-native-module][create-react-native-module] - Tool to create a `React Native library module` or `native view component`, with a single command.
- [react-native-create-library] - Tool to create a `React Native library` with a single command.
    > Caution: This only creates native modules without a view component.
- [react-native-create-bridge] - Delivers bridge module in `Obj-C`, `Swift`, `Kotlin`, & `Java`.
- [create-react-native-app] - (CRNA) - Tool for easy creation of React Native App Template.
- [Using typescript with existing RN Project][typescript_with_rn]
- [Configuring TypeScript with ESLint][eslint_typescript_config]
- [React Native GeoLocation][react_native_geolocation]
- [React Native GeoLocation - Agontuk][agontuk_react_native_geolocation]
- `npm i eslint-plugin-react --save-dev`.
- Add `"lint:fix": "npx eslint './src/**/*.{ts,tsx}'"` in __scripts__ - package.json.
- `"pretty:fix": "npx prettier \"src/**/*.ts*\" --write"` in __scripts__ - package.json.
- [Publishing NPM Packages for RN][publish_npm_packages_rn]
- [Using Reducer Hook + Context for State Management][reducer_and_context_state_mgmnt_rn]

---
[react_natvie_enable_jsx]: https://stackoverflow.com/questions/50311473/how-to-allow-react-native-to-enable-support-for-jsx-extension-files/55134051
[react_native_tools]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native
[install_local_dependency_rn]: https://stackoverflow.com/questions/49730789/install-local-package-as-dependency-with-react-native
[npm_package_wml]: https://www.npmjs.com/package/wml
[create-react-native-module]: https://www.npmjs.com/package/create-react-native-module
[react-native-create-library]: https://www.npmjs.com/package/react-native-create-library
[react-native-create-bridge]: https://www.npmjs.com/package/react-native-create-bridge
[create-react-native-app]: https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app
[typescript_with_rn]: https://facebook.github.io/react-native/docs/typescript
[eslint_typescript_config]: https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675
[react_native_geolocation]: https://github.com/react-native-community/react-native-geolocation
[agontuk_react_native_geolocation]: https://github.com/Agontuk/react-native-geolocation-service
[publish_npm_packages_rn]: https://www.freecodecamp.org/news/how-to-publish-a-react-native-component-to-npm-its-easier-than-you-think-51f6ae1ef850/
[reducer_and_context_state_mgmnt_rn]: https://www.freecodecamp.org/news/state-management-with-react-hooks/
