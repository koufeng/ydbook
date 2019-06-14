"use strict";

const Index = require('../models/Index');

const {
  URLSearchParams
} = require('url');

class IndexController {
  constructor() {}

  actionIndex() {
    return async (ctx, next) => {
      const index = new Index();
      const result = await index.getData(); // ctx.body = result.data.data

      const data = result.data.data;
      ctx.body = await ctx.render('index', {
        data: data
      });
    };
  }

  actionAdd() {
    return async (ctx, next) => {
      const parmas = new URLSearchParams();
      parmas.append('Books[name]', '测试');
      parmas.append('Books[author]', '数据');
      const index = new Index();
      const result = await index.saveData({
        parmas
      });
      ctx.body = result;
    };
  }

}

module.exports = IndexController;