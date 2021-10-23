// Name -Inderpal Singh
// Student No. - 301166561
// Subject - COMP229 Sec007

const express = require('express');

const router = express.Router();

router.get('/services', (req, res) => {
  res.render('services', {title: "Services"});
})

module.exports = router;

