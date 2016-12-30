module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav/Nav.jsx',
      Weather: 'app/components/Weather/Weather.jsx',
      WeatherForm: 'app/components/Weather/WeatherForm.jsx',
      WeatherInfo: 'app/components/Weather/WeatherInfo.jsx',
      Examples: 'app/components/Examples/Examples.jsx',
      About: 'app/components/About/About.jsx',
      OpenWeatherMap: 'app/API/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
