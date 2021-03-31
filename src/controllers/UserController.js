const userService = require("../services/UserService");
const sendResponse = require("../utilities/responseTemplace");

exports.findAll = async (request, response) => {
  try {
    const findAlluser = await userService.doService();
    response.send(findAlluser);
  } catch (err) {
    console.log(err);
  }
};
