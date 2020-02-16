# Setup ReactNative Native Modules

```bash
npx create-react-native-module native-package
# npx: installed 128 in 16.78s
# While `{DEFAULT_PACKAGE_IDENTIFIER}` is the default package
#       identifier, it is recommended to customize the package identifier.
# CREATE new React Native module with the following options:
#
#   root moduleName: react-native-hellornnativemodule
#   name: hellornnativemodule
#   prefix:
#   modulePrefix: react-native
#   packageIdentifier: com.reactlibrary
#   platforms: ios,android
#   tvosEnabled: false
#   githubAccount: github_account
#   authorName: Your Name
#   authorEmail: yourname@email.com
#   license: MIT
#   view: false
#   useAppleNetworking: false
#   generateExample: false
#   exampleName: example
#   writeExamplePodfile: false
#
# CREATE: Generating the React Native library module
#
# 📚  Created library module react-native-hellornnativemodule in `./react-native-hellornnativemodule`.
# karthikc@MacBook-Pro REACT_NATIVE (hello-rn-native) $ ls
# HelloProject                            README.md                               react-native-hellornnativemodule
# HelloRN                                 RNTSTemplate
# HelloRNNative                           UDEMY
# karthikc@MacBook-Pro REACT_NATIVE (hello-rn-native) $ rm -rf react-native-hellornnativemodule/
# karthikc@MacBook-Pro REACT_NATIVE (hello-rn-native) $ npx create-react-native-module native-package
# npx: installed 128 in 10.753s
# While `{DEFAULT_PACKAGE_IDENTIFIER}` is the default package
#       identifier, it is recommended to customize the package identifier.
# CREATE new React Native module with the following options:
#
#   root moduleName: react-native-native-package
#   name: native-package
#   prefix:
#   modulePrefix: react-native
#   packageIdentifier: com.reactlibrary
#   platforms: ios,android
#   tvosEnabled: false
#   githubAccount: github_account
#   authorName: Your Name
#   authorEmail: yourname@email.com
#   license: MIT
#   view: false
#   useAppleNetworking: false
#   generateExample: false
#   exampleName: example
#   writeExamplePodfile: false
#
# CREATE: Generating the React Native library module
#
# 📚  Created library module react-native-native-package in `./react-native-native-package`.
# 🕘  It took 10ms.
#
# ====================================================
# YOU'RE ALL SET!
#
# To build and run iOS example project, do:
# ----
# cd react-native-native-package/example
# yarn
# cd ios
# pod install # required starting with React Native 0.60
# cd ..
# react-native run-ios
# ----
```

## Setup Native Modules + Example App

> We usually want a __Test-Bed App__ to test our Native Modules.
> Here we aim to create a basic react-native app and then create the react-native package/module

```bash
npm i -g react-native-cli yarn

# /usr/local/bin/react-native -> /usr/local/lib/node_modules/react-native-cli/index.js
# /usr/local/bin/yarn -> /usr/local/lib/node_modules/yarn/bin/yarn.js
# /usr/local/bin/yarnpkg -> /usr/local/lib/node_modules/yarn/bin/yarn.js
# + yarn@1.21.1
# + react-native-cli@2.0.1
# added 73 packages from 25 contributors in 14.713s

npx create-react-native-module --generate-example --tvos-enabled calculator

# npx: installed 128 in 8.613s
# While `{DEFAULT_PACKAGE_IDENTIFIER}` is the default package
#       identifier, it is recommended to customize the package identifier.
# CREATE new React Native module with the following options:
#
#   root moduleName: react-native-calculator
#   name: calculator
#   prefix:
#   modulePrefix: react-native
#   packageIdentifier: com.reactlibrary
#   platforms: ios,android
#   tvosEnabled: true
#   githubAccount: github_account
#   authorName: Your Name
#   authorEmail: yourname@email.com
#   license: MIT
#   view: false
#   useAppleNetworking: false
#   generateExample: true
#   exampleName: example
#   writeExamplePodfile: false
#
# CREATE: Check for valid react-native-cli tool version, as needed to generate the example project
# react-native-cli: 2.0.1
# react-native: n/a - not inside a React Native project directory
# react-native --version ok
# CREATE: Check for valid Yarn CLI tool version, as needed to generate the example project
# 1.21.1
# yarn --version ok

# CREATE: Generating the React Native library module

# CREATE example app with the following command: react-native init example --version react-native@0.59
# This will walk you through creating a new React Native project in /Users/karthikc/Studies/WORKSPACE/REACT_NATIVE/NativeModules/react-native-calculator/example
# Using yarn v1.21.1
# Installing react-native@0.59...
# yarn add v1.21.1
# info No lockfile found.
# [1/4] 🔍  Resolving packages...
# warning react-native > fbjs > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
# warning react-native > create-react-class > fbjs > core-js@1.2.7: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
# warning react-native > fbjs-scripts > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
# warning react-native > metro-babel-register > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
# [2/4] 🚚  Fetching packages...
# [3/4] 🔗  Linking dependencies...
# warning " > react-native@0.59.10" has unmet peer dependency "react@16.8.3".
# warning "react-native > metro-react-native-babel-transformer@0.51.0" has unmet peer dependency "@babel/core@*".
# warning "react-native > @react-native-community/cli > metro-react-native-babel-transformer@0.51.1" has unmet peer dependency "@babel/core@*".
# [4/4] 🔨  Building fresh packages...
# success Saved lockfile.
# success Saved 386 new dependencies.
# info Direct dependencies
# └─ react-native@0.59.10
# info All dependencies
# ├─ @babel/helper-builder-binary-assignment-operator-visitor@7.8.3
# ├─ @babel/helper-builder-react-jsx@7.8.3
# ├─ @babel/helper-call-delegate@7.8.3
# ├─ @babel/helper-create-regexp-features-plugin@7.8.3
# ├─ ...
# ✨  Done in 144.66s.

# info Setting up new React Native app in /Users/karthikc/Studies/WORKSPACE/REACT_NATIVE/NativeModules/react-native-calculator/example
# info Adding required dependencies
# yarn add v1.21.1
# [1/4] 🔍  Resolving packages...
# [2/4] 🚚  Fetching packages...
# [3/4] 🔗  Linking dependencies...
# warning "react-native > metro-react-native-babel-transformer@0.51.0" has unmet peer dependency "@babel/core@*".
# warning "react-native > @react-native-community/cli > metro-react-native-babel-transformer@0.51.1" has unmet peer dependency "@babel/core@*".
# [4/4] 🔨  Building fresh packages...
# success Saved lockfile.
# success Saved 2 new dependencies.
# info Direct dependencies
# └─ react@16.8.3
# info All dependencies
# ├─ react@16.8.3
# └─ scheduler@0.13.6
# ✨  Done in 4.12s.
# info Adding required dev dependencies
# yarn add v1.21.1
# [1/4] 🔍  Resolving packages...
# [2/4] 🚚  Fetching packages...
# warning Pattern ["@babel/core@^7.8.3"] is trying to unpack in the same destination "/Users/karthikc/Library/Caches/Yarn/v6/npm-@babel-core-7.8.3-30b0ebb4dd1585de6923a0b4d179e0b9f5d82941-integrity/node_modules/@babel/core" as pattern ["@babel/core@^7.0.0","@babel/core@^7.0.0","@babel/core@^7.0.0","@babel/core@^7.0.0","@babel/core@^7.0.0","@babel/core@^7.0.0","@babel/core@^7.0.0","@babel/core@^7.1.0","@babel/core@^7.1.0","@babel/core@^7.7.5"]. This could result in non-deterministic behavior, skipping.
# warning Pattern ["@babel/runtime@^7.8.3"] is trying to unpack in the same destination "/Users/karthikc/Library/Caches/Yarn/v6/npm-@babel-runtime-7.8.3-0811944f73a6c926bb2ad35e918dcc1bfab279f1-integrity/node_modules/@babel/runtime" as pattern ["@babel/runtime@^7.0.0"]. This could result in non-deterministic behavior, skipping.
# [3/4] 🔗  Linking dependencies...
# [4/4] 🔨  Building fresh packages...
# success Saved lockfile.
# success Saved 167 new dependencies.
# info Direct dependencies
# ├─ @babel/core@7.8.3
# ├─ @babel/runtime@7.8.3
# ├─ babel-jest@25.1.0
# ├─ jest@25.1.0
# ├─ metro-react-native-babel-preset@0.58.0
# └─ react-test-renderer@16.8.3
# info All dependencies
# ├─ @babel/core@7.8.3
# ├─ @babel/plugin-syntax-bigint@7.8.3
# ├─ @babel/runtime@7.8.3
# ├─ @bcoe/v8-coverage@0.2.3
# ├─ ...
# ✨  Done in 70.23s.
  
#  Run instructions for iOS:
#    • cd /Users/karthikc/Studies/WORKSPACE/REACT_NATIVE/NativeModules/react-native-calculator/example && react-native run-ios
#    - or -
#    • Open ios/example.xcodeproj in Xcode
#    • Hit the Run button
#
#  Run instructions for Android:
#    • Have an Android emulator running (quickest way to get started), or a device connected.
#    • cd /Users/karthikc/Studies/WORKSPACE/REACT_NATIVE/NativeModules/react-native-calculator/example && react-native run-android

# Adding cleanup postinstall task to the example app
# Linking the new module library to the example app
# yarn add v1.21.1
# [1/4] 🔍  Resolving packages...
# [2/4] 🚚  Fetching packages...
# [3/4] 🔗  Linking dependencies...
# [4/4] 🔨  Building fresh packages...
# success Saved lockfile.
# success Saved 1 new dependency.
# info Direct dependencies
# └─ react-native-calculator@1.0.0
# info All dependencies
# └─ react-native-calculator@1.0.0
# $ node ../scripts/examples_postinstall.js
# Starting postinstall cleanup for /Users/karthikc/Studies/WORKSPACE/REACT_NATIVE/NativeModules/react-native-calculator/example
# Removing unwanted artifacts for /Users/karthikc/Studies/WORKSPACE/REACT_NATIVE/NativeModules/react-native-calculator/example/node_modules/# react-native-calculator
# No node_modules path found at /Users/karthikc/Studies/WORKSPACE/REACT_NATIVE/NativeModules/react-native-calculator/example/node_modules/# react-native-calculator/node_modules. Skipping delete.
# Deleting: /Users/karthikc/Studies/WORKSPACE/REACT_NATIVE/NativeModules/react-native-calculator/example/node_modules/react-native-calculator/example
# Successfully deleted: /Users/karthikc/Studies/WORKSPACE/REACT_NATIVE/NativeModules/react-native-calculator/example/node_modules/react-native-calculator/# example
# ✨  Done in 358.50s.
# info Linking "react-native-calculator" iOS dependency
# info iOS module "react-native-calculator" has been successfully linked
# info Linking "react-native-calculator" Android dependency
# info Android module "react-native-calculator" has been successfully linked
#
# 📚  Created library module react-native-calculator in `./react-native-calculator`.
# 🕘  It took 584524ms.
#
# ====================================================
# YOU'RE ALL SET!
#
# To build and run iOS example project, do:
# ----
# cd react-native-calculator/example
# yarn
# cd ios
# pod install # required starting with React Native 0.60
# cd ..
# react-native run-ios
# ----
```

> Alternate Approach

  1. `npx create-react-native-module <module_name>` - create a react-native module
  2. cd `react-native-<module_name>/`
  3. `npx react-native init example --version react-native@0.61` - Create an Example App inside react native module.
  4. `cd example` and `npm i ../` - Add `react-native-<module_name>` __package__ which is __@ `../` folder__ as dependency to `example` app.
  5. Run `npm i react-native@0.61.5` and `npm i react@16.9.0 --save` to updgrade `react` and `react-native` packages
  in both native-module and example packages. (Needed only if we don't have latest react and react-native packages).

## Consolidated Steps for `Calculator` example

1. `npx create-react-native-module calculator`
2. `cd react-native-calculator/`
    >Open AndroidStudio / XCode and make necessary changes in the __NativeModule__ of __ReactPackage__.
3. `npm i react@16.9.0 --save`
4. `npm i react-native@0.61.5 --save`
5. `cd ..`
6. `npx react-native init CalculatorDemo`
7. `cd CalculatorDemo`
8. Add `"react-native-calculator": "file:../react-native-calculator"` to __CalculatorDemo__ `package.json` .
9. Add `wml` as devDependency and create a link between the local package `react-native-calculator` and the
Application package `CalculatorDemo`.

    ```bash
      cd CalculatorDemo
      npm install --save-dev wml
      npx wml add ../react-native-calculator/ node_modules/react-native-calculator
      npx wml start
    ```

10. Now, Any change made to `react-native-calculator` will be reflected inside `node_modules` of `CalculatorDemo`.
11. We can import `react-native-calculator/android` to Android Studio and it will have all necessary third-party dependencies already wired.
12. When we open `react-native-calculator/ios/Calculator.xcworkspace` in XCode, we will encounter Import Errors.
    >#import <React/RCTBridgeModule.h> file not found.  

    We should execute the following in `react-native-calculator/ios/` folder to make it compilable and add desired changes.

    ```bash
    pod init #Will create a new Podfile in the current folder.
    cd ..
    npm install # This will download React / React-Native packages in node_modules of "react-native-calculator" .
    # Now we should copy the dependent Pod's from "CalculatorDemo/ios/Podfile" into "react-native-calculator/ios/Podfile"
    cd ios && pod install && cd .. # This will install the necessary pods locally and the Import Errors will be resolved !
    npm run ios #Now ios app with link to a local native package will launch without any error.
    ```

    >   __The dependent Pods will look like below:__

```ruby
    pod 'FBLazyVector', :path => "../node_modules/react-native/Libraries/FBLazyVector"
    pod 'FBReactNativeSpec', :path => "../node_modules/react-native/Libraries/FBReactNativeSpec"
    pod 'RCTRequired', :path => "../node_modules/react-native/Libraries/RCTRequired"
    pod 'RCTTypeSafety', :path => "../node_modules/react-native/Libraries/TypeSafety"
    pod 'React', :path => '../node_modules/react-native/'
    pod 'React-Core', :path => '../node_modules/react-native/'
    pod 'React-CoreModules', :path => '../node_modules/react-native/React/CoreModules'
    pod 'React-Core/DevSupport', :path => '../node_modules/react-native/'
    pod 'React-RCTActionSheet', :path => '../node_modules/react-native/Libraries/ActionSheetIOS'
    pod 'React-RCTAnimation', :path => '../node_modules/react-native/Libraries/NativeAnimation'
    pod 'React-RCTBlob', :path => '../node_modules/react-native/Libraries/Blob'
    pod 'React-RCTImage', :path => '../node_modules/react-native/Libraries/Image'
    pod 'React-RCTLinking', :path => '../node_modules/react-native/Libraries/LinkingIOS'
    pod 'React-RCTNetwork', :path => '../node_modules/react-native/Libraries/Network'
    pod 'React-RCTSettings', :path => '../node_modules/react-native/Libraries/Settings'
    pod 'React-RCTText', :path => '../node_modules/react-native/Libraries/Text'
    pod 'React-RCTVibration', :path => '../node_modules/react-native/Libraries/Vibration'
    pod 'React-Core/RCTWebSocket', :path => '../node_modules/react-native/'
    pod 'React-cxxreact', :path => '../node_modules/react-native/ReactCommon/cxxreact'
    pod 'React-jsi', :path => '../node_modules/react-native/ReactCommon/jsi'
    pod 'React-jsiexecutor', :path => '../node_modules/react-native/ReactCommon/jsiexecutor'
    pod 'React-jsinspector', :path => '../node_modules/react-native/ReactCommon/jsinspector'
    pod 'ReactCommon/jscallinvoker', :path => "../node_modules/react-native/ReactCommon"
    pod 'ReactCommon/turbomodule/core', :path => "../node_modules/react-native/ReactCommon"
    pod 'Yoga', :path => '../node_modules/react-native/ReactCommon/yoga'
    pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
    pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
    pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'
```

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

