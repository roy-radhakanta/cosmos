const exp = require("express");
const route = exp.Router();

route.get("/", function(req, res){
    return res.status(200).json({msg: "Hi!"})
});

route.use("/auth", require("./auth"));

module.exports = route;