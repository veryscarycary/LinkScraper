const router = require('express').Router();
const api = require('./controller.js');

router.route('/api/scrape')
  .post(api.scrapeWebPage);

module.exports = router;
