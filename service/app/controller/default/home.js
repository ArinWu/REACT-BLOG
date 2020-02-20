/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.app.mysql.get('blog_content', {});
    const { ctx } = this;
    ctx.body = result;
    ctx.body = '123';
  }

  async getArticleList() {
    let sql = 'SELECT article.id as id,' +
    'article.title as title,' +
    'article.introduce as introduce,' +
    "FROM_UNIXTIME(article.addTime, '%Y-%m-%d %H:%i:%s') AS addTime ," +
    'article.view_count as view_count ,' +
    'type.typeName as typeName ' +
    'FROM article LEFT JOIN type ON article.type_id = type.id';

    const results = await this.app.mysql.query(sql);
    // console.log(results);
    this.ctx.body = {
      data: results,
    };
  }

  async getArticleListById() {
    const id = this.ctx.params.id;
    const sql = 
    'SELECT article.id as id, ' +
    'article.title as title, ' +
    'article.introduce as introduce, ' +
    'article.article_content as article_content, ' +
    "FROM_UNIXTIME(article.addTime, '%Y-%m-%d %H:%i:%s') AS addTime, " +
    'article.view_count as view_count, ' +
    'type.id as TypeId, ' +
    'type.typeName as typeName ' +
    'FROM article LEFT JOIN type ON article.type_id = type.id ' + 
    'WHERE article.id=' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
    console.log(result);
  }

}

module.exports = HomeController;
