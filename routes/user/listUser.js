var router = require("express").Router();
var {ServerConfig,ServerFeatures} = require("../../utils/config");
var {UserRepository} = require("../../repository/userRepository");

router.get("/api/listUser",async (req,res)=>{

    let Status = {
        responseInfo: {
            status: ServerConfig.MSG_STATUS_ERROR,
            message: ServerConfig.MSG_STATUS_ERROR,
            module: ServerFeatures.USER_MODULE,
            function: ServerFeatures.CREATE_USER_FUNCTION
        },
        users: null 
    }

    UserRepository.listUser((response) =>{
        if(response){
            Status.responseInfo.status = ServerConfig.MSG_STATUS_SUCCESS;
            Status.responseInfo.message = ServerConfig.MSG_STATUS_SUCCESS;
            Status.users = response;
        }

        res.send(Status);
    });


});




module.exports = router;