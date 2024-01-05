const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const User = require("./history");
const string = require("./public/script"); 
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1/history")
run()
async function run (){
    const user = User({history :string});
    await user.save();
    console.log(user);
}
app.get("/", (req,res)=>{
    res.render("index");
});
app.listen(3000, ()=>{
    console.log("server started on port 3000!!")
})
