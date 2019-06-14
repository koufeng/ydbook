"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _co = _interopRequireDefault(require("co"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _log4js = _interopRequireDefault(require("log4js"));

var _errorHandler = _interopRequireDefault(require("./middleware/errorHandler"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();

_log4js.default.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: 'logs/yd.log'
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error'
    }
  }
});

const logger = _log4js.default.getLogger('cheese');

_errorHandler.default.error(app, logger);

logger.error('Cheese is too ripe!');
app.use((0, _koaStatic.default)(_config.default.staticDir));
from('./controllers')(app);
app.context.render = _co.default.wrap((0, _koaSwig.default)({
  // ...your setting
  root: _config.default.viewDir,
  autoescape: true,
  // cache: 'memory', // disable, set to false
  cache: false,
  ext: 'html',
  varControls: ['[[', ']]'],
  writeBody: false
}));
app.listen(_config.default.port, () => {
  console.log('服务启动成功🍺');
});