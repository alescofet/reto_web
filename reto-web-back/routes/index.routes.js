const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
res.status(200).send();
});

module.exports = router;
