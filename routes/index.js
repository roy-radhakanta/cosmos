const exp = require("express");
const route = exp.Router();

route.use("/user", require("./mongodb/user"));

route.get("/", async (req, res) => {
  return res.status(200).json({ msg: "Hello World!" });
});

module.exports = route;
