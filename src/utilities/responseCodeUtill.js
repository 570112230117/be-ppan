

exports.ConstantRespCodeUtil = {
    SUCCESS_RESP_CODE: ["1", "SUCCESS"],
    SUCCESS_WARNING_RESP_CODE: ["2", "Success with warning"],
    CANCEL_RESP_CODE: ["3", "CANCEL"],
    INVALID_CONFIG_STATE_RESP_CODE: ["111", "Invalid config state flow"],
    INVALID_SYS_ERROR_RESP_CODE: ["222", "Invalid system error"],
    SYS_ERROR_RESP_CODE: ["000", "system error"],
    INVALID_AUTHEN_USER_RESP_CODE: ["333", "Invalid authenticate user or password"],
    INVALID_AUTHEN_USER_FUNCTION_RESP_CODE: ["334", "Invalid authenticate user function"],
    INVALID_NULL_DATA_RESP_CODE: ["444", "Invalid data is null value"],
    INVALID_DUPLICATE_REQ_TRX_RESP_CODE: ["555", "Invalid duplicate request transaction id"],
    INVALID_DATA_IS_ON_PROCESS_RESP_CODE: ["666", "Invalid data is on process"],
    INVALID_DATA_IS_ON_WAITING_DEPENDENCY_RESP_CODE: ["667", "Invalid data is on waiting dependency"],
    INVALID_VALIDATE_INPUT_RESP_CODE: ["777", "Invalid validate input"],
    EXCEPTION_RESP_CODE: ["888", "Exception"],
    CONCURRENT_REQ_TRX_EXCEPTION_RESP_CODE: ["887", "Concurrent unique constraint exception, please query transaction status"],
    NULL_MASTER_MAPPING_RESP_CODE: ["999", "Null master response code config mapping in DB"],
    INTERNAL_SYSTEM_EXCEPTION_ENGINE_RESP_CODE: ["8888", "Internal System Exception"],	//For check alive in system
    FAIL_ACTIVE_STATIC_ENGINE_RESP_CODE: ["8887", "Fail active static"],					//For active static
    NOT_FOUND_LIST_STATIC_ENGINE_RESP_CODE: ["8886", "Not found list static"],			//For list static
    NOT_FOUND_APP_USER_ENGINE_RESP_CODE: ["8885", "Not found app user"],
    INVALID_USER_PASSWORD_ENGINE_RESP_CODE: ["8884", "Invalid app user or password"],
    CAN_NOT_DECYPT_PASSWORD_ENGINE_RESP_CODE: ["8883", "Can not decrypt password"],
    CAN_NOT_GET_KEY_ENGINE_RESP_CODE: ["8882", "Can not get pri key"],
    INVAILD_MERGE_PARALLEL_LOGIC_RESP_CODE: ["88897", "Invalid merge child parallel not complated"],
    INVALID_AUTHEN_CHANNEL_RESP_CODE: ["336", "Invalid authenticate channel"],
    INVALID_CREDIT_LIMIT_RESP_CODE: ["337", "Invalid credit limit"]
};

