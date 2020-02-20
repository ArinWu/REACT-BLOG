'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async list() {
    const { ctx } = this;
    ctx.body = '<h1>hello world</h1>';
  }
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
