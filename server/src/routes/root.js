const express = require("express");

const router = express.Router();

const message = {
    routesAvailable: ["/catalog", "/product", "/search","/checkout"],
};

router.get("/", (req, res) => {
    res.send(message);
    // console.log("I reached destination lollll");
});

router.post("/", (req, res) => {
    res.send(message);
});

module.exports = router;

// app.get("/",(req,res)=>{
//    
// })