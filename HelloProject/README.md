Steps to Install React-Native and build a Hello World App on MAC :

* brew install node
* brew install watchman
* npm install -g react-native-cli

* Set Environmental variables needed by react-native 
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
* react-native init HelloWorld
* Add `"android-bundle": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res"` to scripts part of package.json
* npm run android-bundle
* react-native run android (or) Compile and Launch using android studio

We  need to run `npm run android-bundle` before trying to compile this in android studio
