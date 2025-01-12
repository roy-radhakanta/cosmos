module.exports.is_required = function(fieldName) {
    return `${fieldName} is required!`
}

module.exports.SERVER_INTERNAL_ERROR = "Please try again! Try again now";
module.exports.DUPLICATE_USER = "User already exists! Try again now";
module.exports.CLIENT_INVALID_REQUEST = "Invalid request! Try again now"
module.exports.USER_ADDED = "User inserted";
module.exports.USER_NOT_FOUND = "User not found!";
module.exports.PASSWORD_INVALID = "Incorrect password! Try again with correct password";
module.exports.AUTHENTICATION_SUCCESS = "Authentication successful!";
module.exports.REFRESH_TOKEN_REQUIRED = "Refresh token is required!";
module.exports.INVALID_UPDATE_PASSWORD_LINK = "Invalid link! Please try again with valid link";
module.exports.SESSION_EXPIRED = "Session expired! Login to continue";
module.exports.FORGOT_PASSWORD_EMAIL_SENT = "Email sent! Please check your email inbox/spam folder";
module.exports.NEW_PASSWORD_REQUIRED = "New password is required!";
module.exports.CONFIRM_PASSWORD_REQUIRED = "Confirm password is required!";
module.exports.NEW_CONFIRM_PASSWORD_MISMATCH = "New password and Confirm password not matched! Try again";
module.exports.PASSWORD_UPDATED = "Successful! Password updated";