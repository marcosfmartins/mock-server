const express = require('express')

function handler(obj) {
  return (req, res) => {
    res.status = obj.status;
    res.set(obj.headers)
    res.send(obj.body)
  }
}

function makeRoute(objs) {
  const router = express.Router();

  objs.forEach((obj) => {

    switch (obj.method.toUpperCase()) {
      case 'GET':
        router.get(obj.url,handler(obj.response));
        break;
      case 'POST':
        router.post(obj.url, handler(obj.response));
        break;
      case 'PUT':
        router.put(obj.url, handler(obj.response));
        break;
      case 'PATCH':
        router.patch(obj.url, handler(obj.response));
        break;
      case 'OPTIONS':
        router.options(obj.url, handler(obj.response));
        break;
      case 'DELETE':
        router.delete(obj.url, handler(obj.response));
        break;
      case 'HEAD':
        router.head(obj.url, handler(obj.response));
        break;
      default:
        router.all(obj.url, handler(obj.response));
        break
    }

  })

  return router
}

module.exports = {
  makeRoute
}
