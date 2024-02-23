const express = require('express');
const router = express.Router();

// Service
const projectService = require('../service/projectService');

router.post("/",(req,res) => {
    projectService.initProject(req,res);
})



module.exports = router;