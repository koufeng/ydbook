const Index = require('../models/Index')
class IndexController{
  constructor() {}
  actionIndex() {
    return async(ctx, next) => {
      const index = new Index();
      const result = await index.getData()
      // ctx.body = result.data.data
      const data = result.data.data
      ctx.body = await ctx.render('index', {
        data: data
      });
    }
  }
  actionAdd() {
    return async(ctx, next) => {
      ctx.body = await ctx.render('add');
    }
  }
}
module.exports = IndexController