var router = require("express").Router();
var {ServerConfig,ServerFeatures} = require("../../utils/config");
var {UserRepository} = require("../../repository/userRepository");

router.post("/api/createUser",async (req,res)=>{

    let Status = {
        responseInfo: {
            status: ServerConfig.MSG_STATUS_ERROR,
            message: ServerConfig.MSG_STATUS_ERROR,
            module: ServerFeatures.USER_MODULE,
            function: ServerFeatures.CREATE_USER_FUNCTION
        }
    }
    var data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age:req.body.age
    };
    UserRepository.createUser(data,(response) =>{
        if(response){
            Status.responseInfo.status = response;
            Status.responseInfo.message = response;
        }

        res.send(Status);
    });


});




module.exports = router;