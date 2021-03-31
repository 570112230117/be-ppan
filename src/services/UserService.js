const userRepository = require("../repository/UserRepository");
exports.doService = async (body) => {
  try {
    const result = await userRepository.findAll();
    return result;
  } catch (error) {
    console.log(">>> error", error);
    return null;
  }
};
exports.findByEmail = async (email) => {

  try {
    const result = await userRepository.findByEmail(email);
    return result;
  } catch (error) {
    console.log(">>> error", error);
    return null;
  }
};
