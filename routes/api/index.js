const router = require('express').Router();
const directionRoutes = require('./directionRoutes');

router.use('/direction', directionRoutes);

module.exports = router;