import Koa  from 'koa'
const app = new Koa()
import co from 'co'
import render from 'koa-swig'
import serve from 'koa-static'
import log4js from 'log4js'
import errorHandler from './middleware/errorHandler';
import config from './config';
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs/yd.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
})
const logger = log4js.getLogger('cheese');
errorHandler.error(app, logger);
logger.error('Cheese is too ripe!');
app.use(serve(config.staticDir));
from ('./controllers')(app);
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
