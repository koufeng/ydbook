const fetch = require('node-fetch');
const config = require('../config');
class SafeRequest {
  constructor(url) {
    this.url = url;
    this.baseUrl = config.baseUrl;
  }
  fetch(options) {
    // 产生完整链接
    console.log(this.baseUrl)
    let ydfetch = fetch(this.baseUrl + this.url);
    return new Promise((resolve, reject) => {
      let result = {
        code: 0,
        message: '',
        data: []
      };
      ydfetch.then((res) => {
        let _json = {};
        try {
          _json = res.json();
        } catch (error) {
          console.log(error)
        }
        return _json;
      })
      .then((json) => {
        result.data = json;
        resolve(result);
      }).catch((error) => {
        result.code = 1;
        result.message = 'node-fetch 异常😢'
        reject(result);
      })
    })
  }
}
module.exports = SafeRequest;