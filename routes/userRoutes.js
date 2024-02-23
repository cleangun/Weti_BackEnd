const express = require("express");
const router = express.Router();

// Service
const userService = require("../service/userService");


// route
router.post("/",(req,res) => {
    console.log("request body : "+req.body.email);
    res.send("artiTear nodejs Response1");
})

router.post("/register", (req,res) => {
    userService.insert(req,res);
})


module.exports = router;