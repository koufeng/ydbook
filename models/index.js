const SafeRequest = require('../utils/SafeRequest');
/**
 * Index 类 获取数据
 */
class Index {
  constructor(app) {
  }
  getData(options) {
    const safeRequest = new SafeRequest('/list');
    return safeRequest.fetch({});
  }
}
module.exports = Index;