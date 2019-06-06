const Koa  = require('koa');
const app  = new Koa();
const co = require('co');
const render = require('koa-swig');
const serve = require('koa-static')
const log4js = require('log4js')
const errorHandler = require('./middleware/errorHandler')
const config = require('./config')
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs/yd.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
})
const logger = log4js.getLogger('cheese');
errorHandler.error(app, logger);
logger.error('Cheese is too ripe!');
app.use(serve(config.staticDir));
require('./controllers')(app);
app.context.render = co.wrap(render({
  // ...your setting
  root: config.viewDir,
  autoescape: true,
  // cache: 'memory', // disable, set to false
  cache: false,
  ext: 'html',
  varControls: ['[[', ']]'],
  writeBody: false
}));
app.listen(config.port, ()=> {
  console.log('服务启动成功🍺')
})
