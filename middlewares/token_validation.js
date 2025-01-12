const {
  REFRESH_TOKEN_REQUIRED,
  SESSION_EXPIRED,
} = require("../config/res_messages");
const { SECRET } = require("../config/settings");
const { INVALID_REQUEST, FORBIDDEN } = require("../config/status_code");
const jwt = require("jsonwebtoken");

module.exports.refresh_token_validation = function (req, res, next) {
  const { token } = req.body;
  if (!token) {
    return res.status(INVALID_REQUEST).json({ msg: REFRESH_TOKEN_REQUIRED });
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(FORBIDDEN).json({ message: SESSION_EXPIRED });
    }
    req.user_id = decoded.id;
    next();
  });

};
