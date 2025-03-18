const express = require('express');
const router = express.Router();

const User = require('../models/user');

//routes
router.get('/', (req,res) => {
    res.send("hello applications page")
})

module.exports = router;