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


---
[react_natvie_enable_jsx]: https://stackoverflow.com/questions/50311473/how-to-allow-react-native-to-enable-support-for-jsx-extension-files/55134051
