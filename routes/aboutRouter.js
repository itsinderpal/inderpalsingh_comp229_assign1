// Name -Inderpal Singh
// Student No. - 301166561
// Subject - COMP229 Sec007

const express = require('express');

const router = express.Router();

router.get('/about', (req, res) => {
  res.render('about', {title: "About Me"});
})

module.exports = router;