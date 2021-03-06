import {extend} from 'lodash';
import {join} from 'path';
let config = {
  "viewDir": join(__dirname, '..', '/views'),
  "staticDir": join(__dirname, '..', '/assets')
}
if (false) {
  console.log('🚘啦啦啦啦')
}
if (process.env.NODE_ENV == 'development') {
  const localConfig = {
    port: 3000,
    baseUrl: 'https://www.easy-mock.com/mock/5cf7ae13e75a56674d1c7848/ydbook'
  }
  config = extend(config, localConfig);
}

if (process.env.NODE_ENV == 'production') {
  const prodConfig = {
    port: 80
  }
  config = extend(config, prodConfig);
}
module.exports = config;