const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express',
    nodestuff: process.version
  });
});

module.exports = router;
console.log(process.version);
