const serverless = require('serverless-http');
const app = require('../../index');   // the Express code you pasted
module.exports.handler = serverless(app);
