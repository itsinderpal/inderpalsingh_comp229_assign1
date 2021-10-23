// Name -Inderpal Singh
// Student No. - 301166561
// Subject - COMP229 Sec007

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: "Inderpal Singh Portfolio"});
})

module.exports = router;