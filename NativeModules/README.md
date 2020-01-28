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

## References

- [create-react-native-module][create-react-native-module] - Tool to create a `React Native library module` or `native view component`, with a single command.
- [react-native-create-library] - Tool to create a `React Native library` with a single command.
    > Caution: This only creates native modules without a view component.
- [react-native-create-bridge] - Delivers bridge module in `Obj-C`, `Swift`, `Kotlin`, & `Java`.
- [create-react-native-app] - (CRNA) - Tool for easy creation of React Native App Template.

---
[create-react-native-module]: https://www.npmjs.com/package/create-react-native-module
[react-native-create-library]: https://www.npmjs.com/package/react-native-create-library
[react-native-create-bridge]: https://www.npmjs.com/package/react-native-create-bridge
[create-react-native-app]: https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app
