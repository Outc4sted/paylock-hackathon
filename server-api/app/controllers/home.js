const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  db.Article.findAll().then((articles) => {
    res.marko(require('../views/index'), {
      $global: {locals: req.app.locals},
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});
