module.exports = {
  env: {
    test: {
      presets: [
        [
          'env',
          {
            targets: {
              node: 'current',
            }
          }
        ]
      ]
    }
  }
};