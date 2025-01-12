const exp = require("express");
const route = exp.Router();
const { signup, login, refreshToken, initForgotPassword, updatePassword } = require("../../controllers/mongodb/auth_controller");
const { validate_signup_req, check_duplicate_user, validate_login_req, check_user_exists, is_user_exists_by_id, validate_update_password_req } = require("../../middlewares/mongodb/data_validation");
const { refresh_token_validation } = require("../../middlewares/token_validation");

route.post("/signup", validate_signup_req, check_duplicate_user, signup);
route.post("/login", validate_login_req, check_user_exists, login);
route.post("/refresh-token", refresh_token_validation, is_user_exists_by_id, refreshToken);
route.post("/init-forgot-password", check_user_exists, initForgotPassword);
route.put("/update-password", validate_update_password_req, refresh_token_validation, is_user_exists_by_id, updatePassword);

module.exports = route;