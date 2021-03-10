const express = require('express');
const dataRepository = require('./repository/files');
const routerService = require('./service/router');

const NAME = 'Mock-Server';
const PORT = process.env.SERVER_PORT || '8080';

const app = express();
app.set('name', NAME);
app.disable('etag');
app.disable('x-powered-by');
app.use((req, res, next) => {
  res.header('X-powered-by', NAME);
  next();
});

const data = dataRepository.getData('./data');
if (data.length > 0) {
  const router = routerService.makeRoute(data);
  app.use(router);
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
}
