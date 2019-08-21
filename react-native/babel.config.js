module.exports = {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            node: 'current',
          }
        }
      ], 
      "module:metro-react-native-babel-preset"
    ]
};
