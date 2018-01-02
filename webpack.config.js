module.exports = {
  entry: './src',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    react: {
      root: 'React',
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react'
    },
    'prop-types': {
      root: 'prop-types',
      amd: 'prop-types',
      commonjs: 'prop-types',
      commonjs2: 'prop-types'
    },
  },
  output: {
    path: './build',
    filename: 'react-typewriter.js',
    library: 'TypeWriter',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel?presets[]=react,presets[]=es2015,plugins[]=transform-object-rest-spread,plugins[]=add-module-exports'
    }]
  }
};
