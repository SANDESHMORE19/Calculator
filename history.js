const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    history : "string"
});
module.exports = mongoose.model("user", userSchema);