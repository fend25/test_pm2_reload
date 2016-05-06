'use strict';

console.log('started');

const koa = require('koa');
const app = new koa();
const child_process = require('child_process');
const logger = require('koa-logger');
app.use(logger());

app.use((ctx, next) => {
  child_process.exec(`pm2 reload test_pm2_main`, function(err, stderr, stdout) {
    console.log(err, stderr, stdout);
  });
  ctx.body = `successfully deployed at ${new Date()}\n`;
});

const serverConfig = {port: 3602};
app.listen(serverConfig.port);
console.log(`dep server started at port ${serverConfig.port}`);