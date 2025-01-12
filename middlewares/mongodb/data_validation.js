const {
  is_required,
  SERVER_INTERNAL_ERROR,
  DUPLICATE_USER,
  USER_NOT_FOUND,
  INVALID_UPDATE_PASSWORD_LINK,
  CONFIRM_PASSWORD_REQUIRED,
  NEW_PASSWORD_REQUIRED,
  NEW_CONFIRM_PASSWORD_MISMATCH,
} = require("../../config/res_messages");
const {
  INVALID_REQUEST,
  SERVER_ERROR,
  CONFLICT_OR_DUPLICATE,
  NOT_FOUND,
} = require("../../config/status_code");
const User = require("../../models/mongodb/User");

module.exports.validate_signup_req = async function (req, res, next) {
  const { user_name, email, password, userrole } = req.body;

  if (!user_name)
    return res.status(INVALID_REQUEST).json({ msg: is_required("User name") });
  if (!email)
    return res.status(INVALID_REQUEST).json({ msg: is_required("Email") });
  if (!password)
    return res.status(INVALID_REQUEST).json({ msg: is_required("Password") });
  if (!userrole)
    return res.status(INVALID_REQUEST).json({ msg: is_required("User role") });

  next();
};

module.exports.check_duplicate_user = async function (req, res, next) {
  const { email } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(CONFLICT_OR_DUPLICATE).json({ msg: DUPLICATE_USER });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(SERVER_ERROR).json({ msg: SERVER_INTERNAL_ERROR });
  }
};

module.exports.validate_login_req = async function (req, res, next) {
  const { email, password } = req.body;

  if (!email)
    return res.status(INVALID_REQUEST).json({ msg: is_required("Email") });
  if (!password)
    return res.status(INVALID_REQUEST).json({ msg: is_required("Password") });

  next();
};

module.exports.check_user_exists = async function (req, res, next) {
  const { email } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(NOT_FOUND).json({ msg: USER_NOT_FOUND });
    }
    req.userObj = userExists;
    next();
  } catch (error) {
    console.log(error);
    return res.status(SERVER_ERROR).json({ msg: SERVER_INTERNAL_ERROR });
  }
};

module.exports.is_user_exists_by_id = async function (req, res, next) {
  try {
    const user_id = req.user_id;
    if (!user_id)
      return res.status(INVALID_REQUEST).json({ msg: USER_NOT_FOUND });
    const userExists = await User.findById(user_id);
    if (!userExists) {
      return res.status(NOT_FOUND).json({ msg: USER_NOT_FOUND });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(SERVER_ERROR).json({ msg: SERVER_INTERNAL_ERROR });
  }
};

module.exports.validate_update_password_req = async function (req, res, next) {
  try {
    const { token, new_password, confirm_password } = req.body;

    if(!token) return res.status(INVALID_REQUEST).json({"msg": INVALID_UPDATE_PASSWORD_LINK });
    if(!new_password) return res.status(INVALID_REQUEST).json({"msg": NEW_PASSWORD_REQUIRED });
    if(!confirm_password) return res.status(INVALID_REQUEST).json({"msg": CONFIRM_PASSWORD_REQUIRED });
    if(new_password !== confirm_password) return res.status(INVALID_REQUEST).json({"msg": NEW_CONFIRM_PASSWORD_MISMATCH });

    next();

  } catch (error) {
    console.log(error);
    return res.status(SERVER_ERROR).json({ msg: SERVER_INTERNAL_ERROR });
  }
};
