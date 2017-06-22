module.exports = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
               presets: ['es2015', 'react']
            }
         },
		 {
			test: /\.css$/,
			loaders: [
			  'style-loader',
			  'css-loader?importLoaders=1',
			  'postcss-loader'
			 ]
		 }
      ]
   },
	postcss: function () {
    return [
      require('postcss-cssnext')({ /* ...options */ }),
      require('precss')({ /* ...options */ })
    ];
  }
}
