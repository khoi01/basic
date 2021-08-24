var router = require("express").Router();


router.post("/api/login",(req,res)=>{
    res.send("testing route");
});

module.exports = router;



