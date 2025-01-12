const jwt = require("jsonwebtoken");
const { SECRET } = require("./settings");

module.exports.generate_auth_token = function (userId, only = "both", expiresIn="1h", rexpiresIn="7d") {
  let accessToken = undefined;
  let refreshToken = undefined;

  if (only && only == "access") {
    accessToken = jwt.sign({ id: userId }, SECRET, { expiresIn: expiresIn });
  }

  if (only && only == "refresh") {
    refreshToken = jwt.sign({ id: userId }, SECRET, { expiresIn: rexpiresIn });
  }

  if (only && only == "both") {
    accessToken = jwt.sign({ id: userId }, SECRET, { expiresIn: expiresIn });
    refreshToken = jwt.sign({ id: userId }, SECRET, { expiresIn: rexpiresIn });
  }

  return { accessToken, refreshToken };
};
