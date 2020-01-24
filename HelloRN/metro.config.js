/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {getDefaultConfig} = require('metro-config');
module.exports = (async () => {
  //get default sourceExts, assetExts from metro-config
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();

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
      //append to existing sourceExts and assetExts fetched from metro-config
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'jsx', 'svg'],
    },
  };
})();
