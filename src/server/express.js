import express from 'express';
import path from 'path';

const server = express();
const PORT = 8080;

const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

const staticMiddleware = express.static('dist');

server.use(staticMiddleware);

server.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
