
const response = require('./responseCodeUtill');

exports.success = (res, data) => {
    return sendResponse(res, 200, {
        respCode: response.ConstantRespCodeUtil.SUCCESS_RESP_CODE[0],
        respDesc: response.ConstantRespCodeUtil.SUCCESS_RESP_CODE[1],
        namespace: 'FAAA',
        data: mapData(data)
    });
}

exports.Unauthorized = (res, err) => {
    return sendResponse(res, 401, {
        respCode: '401',
        respDesc: response.ConstantRespCodeUtil.INVALID_AUTHEN_USER_RESP_CODE[1],
        namespace: 'FAAA',
        error: err
    });
}
exports.badRequest = (res,err)=>{
    return sendResponse(res, 400, {
        respCode: response.ConstantRespCodeUtil.EXCEPTION_RESP_CODE[0],
        respDesc: response.ConstantRespCodeUtil.EXCEPTION_RESP_CODE[1],
        namespace: 'FAAA',
        error: err
    });

}


const sendResponse = (res, status, data) => {
    console.log(status,data);
    return !res.headersSent ? res.status(status).send(data) : null
}

const mapData = (elementData) => {
    return elementData ? elementData : []
}
