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
