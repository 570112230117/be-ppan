const { v4: uuidv4 } = require("uuid");

exports.getUUID = () => {
  return uuidv4();
};
