const { hashSync, compareSync } = require("bcryptjs");
const User = require("../../models/mongodb/User");
const {
  SERVER_ERROR,
  INVALID_REQUEST,
  OK,
  UNAUTHORIZED,
} = require("../../config/status_code");
const {
  SERVER_INTERNAL_ERROR,
  CLIENT_INVALID_REQUEST,
  USER_ADDED,
  PASSWORD_INVALID,
  AUTHENTICATION_SUCCESS,
  FORGOT_PASSWORD_EMAIL_SENT,
  PASSWORD_UPDATED,
} = require("../../config/res_messages");
const { generate_auth_token } = require("../../config/key_gen");
const mailer = require("../../config/mail_sender");
const { EMAIL_CONFIG, APP_WEBSITE } = require("../../config/settings");
const { welcome_email } = require("../../email_template/signup_email_template");
const { generateOTP } = require("../../src/utils");
const {
  forgotpasswordtemplate,
} = require("../../email_template/forgotpassword_template");

module.exports.signup = async function (req, res) {
  try {
    const { user_name, email, password, userrole } = req.body;
    const userObject = new User({
      user_name,
      email,
      password: hashSync(password, 10),
      userrole,
    });
    const inserted = await userObject.save();

    if (!inserted) {
      return res.status(INVALID_REQUEST).json({ msg: CLIENT_INVALID_REQUEST });
    }

    const { accessToken, refreshToken } = generate_auth_token(
      inserted._id.toString()
    );
    const mailSend = await mailer.sendMail({
      from: `Roy Foo Koch 👻 <${EMAIL_CONFIG.SMTP_USER}>`,
      to: email,
      subject: "Welcome to Nodejs!",
      html: welcome_email(user_name),
    });
    console.log(`Email send: ${mailSend}`);
    return res
      .status(OK)
      .json({ msg: USER_ADDED, at: accessToken, rt: refreshToken });
  } catch (error) {
    console.log("SIGNUP: Error: ", error);
    return res.status(SERVER_ERROR).json({ msg: SERVER_INTERNAL_ERROR });
  }
};

module.exports.login = async function (req, res) {
  try {
    const { password } = req.body;
    const userObj = req.userObj;

    const isPasswordValid = compareSync(password, userObj.password);
    if (!isPasswordValid) {
      return res.status(UNAUTHORIZED).json({ msg: PASSWORD_INVALID });
    }

    const { accessToken, refreshToken } = generate_auth_token(
      userObj._id.toString()
    );

    delete req.userObj;

    return res
      .status(OK)
      .json({ msg: AUTHENTICATION_SUCCESS, at: accessToken, rt: refreshToken });
  } catch (error) {
    console.log("LOGIN: Error: ", error);
    return res.status(SERVER_ERROR).json({ msg: SERVER_INTERNAL_ERROR });
  }
};

module.exports.refreshToken = async function (req, res) {
  const user_id = req.user_id;
  try {
    const { accessToken } = generate_auth_token(user_id, "access");
    delete req.user_id;
    return res.status(OK).json({ token: accessToken });
  } catch (error) {
    console.log("REFRESH TOKEN: Error: ", error);
    return res.status(SERVER_ERROR).json({ msg: SERVER_INTERNAL_ERROR });
  }
};

module.exports.initForgotPassword = async function (req, res) {
  try {
    const userObj = req.userObj;
    const { accessToken } = generate_auth_token(
      userObj._id.toString(),
      "access"
    );

    const mailSend = await mailer.sendMail({
      from: `Roy Foo Koch 👻 <${EMAIL_CONFIG.SMTP_USER}>`,
      to: userObj.email,
      subject: "Forgot password",
      html: forgotpasswordtemplate(
        `${APP_WEBSITE}/validate-otp/${accessToken}`
      ),
    });

    if (!mailSend?.messageId) {
      return res.status(INVALID_REQUEST).json({ msg: CLIENT_INVALID_REQUEST });
    }

    return res.status(OK).json({ msg: FORGOT_PASSWORD_EMAIL_SENT });
  } catch (error) {
    console.log("INIT FORGOTPASSWORD: Error: ", error);
    return res.status(SERVER_ERROR).json({ msg: SERVER_INTERNAL_ERROR });
  }
};


module.exports.updatePassword = async function (req, res) {
  try {
    const { new_password } = req.body;
    const user_id = req.user_id;
    const result = await User.updateOne(
      { _id: user_id },
      { $set: { password: hashSync(new_password) } }
    );
    
    if(!result) return res.status(INVALID_REQUEST).json({ msg: CLIENT_INVALID_REQUEST });
    if(!result.acknowledged || !result.modifiedCount) return res.status(INVALID_REQUEST).json({ msg: CLIENT_INVALID_REQUEST });
    return res.status(OK).json({ msg: PASSWORD_UPDATED });

  } catch (error) {
    console.log("UPDATE PASSWORD: Error: ", error);
    return res.status(SERVER_ERROR).json({ msg: SERVER_INTERNAL_ERROR });
  }
};
