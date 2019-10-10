const path = require("path");

module.exports = {
  entry: { // Entry point of the application.
    // This can also be an array to load in multiple entry points.
    // they will be loaded in the index order in which they are
    // placed.
    // main: ["./src/main.js", "./src/other.js"],
    main: "./src/main.js",
  },
  mode: "development", // mode of this configuration
  output: { // the bundled output information
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devServer: { // the directory of which to serve
    contentBase: "dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // when .css files are encountered, use loaders
        // use array is run in reverse index order css-loader -> style-loader
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
};
