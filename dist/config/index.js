'use strict';

var lodash = require('lodash');
var path = require('path');

let config = {
  "viewDir": path.join(__dirname, '..', '/views'),
  "staticDir": path.join(__dirname, '..', '/assets')
};
{
  const prodConfig = {
    port: 80
  };
  config = lodash.extend(config, prodConfig);
}
module.exports = config;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnL2luZGV4LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OyJ9
