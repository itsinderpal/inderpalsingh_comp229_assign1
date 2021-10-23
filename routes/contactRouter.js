// Name -Inderpal Singh
// Student No. - 301166561
// Subject - COMP229 Sec007

const express = require('express');

const router = express.Router();

router.get('/contact', (req, res) => {
  res.render('contact', {title: "Contact Me"});
})

module.exports = router;
