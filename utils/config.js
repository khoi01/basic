class ServerConfig{
    static MSG_STATUS_SUCCESS = "Success";
    static MSG_STATUS_ERROR = "Error";
    static MSG_STATUS_FAIL = "Fail";
    static HTTPS_PORT = (process.env.PORT || 4040);
    static HTTP_PORT = (process.env.PORT || 4040);
}

class ServerFeatures{
    static USER_MODULE = "user_modue";
    static CREATE_USER_FUNCTION = "create_user_funciton";
}



module.exports = {ServerConfig,ServerFeatures};
