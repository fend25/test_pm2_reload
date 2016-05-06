'use strict';

const koa = require('koa');
const app = new koa();

const logger = require('koa-logger');
app.use(logger());

app.use(function (ctx, next){
  ctx.body = `Hello user, the server time is ${new Date()}\n`;
});

const serverConfig = {port: 3601};
app.listen(serverConfig.port);
console.log(`main server started at port ${serverConfig.port}`);