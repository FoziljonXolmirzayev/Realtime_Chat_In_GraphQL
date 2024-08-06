const jwt = require("jsonwebtoken");

module.exports.generateToken = (data) => {
  return jwt.sign(data, process.env.SALT);
};
module.exports.decodeToken = (data) => {
  return jwt.decode(data);
};
