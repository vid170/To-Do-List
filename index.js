
const express  = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const http = require("http");


const port =3000;


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const itemslist = []



app.get("/", function(req, res){
   res.render("index",{itemslist: itemslist});
});



app.post("/dashboard", function(req, res){
    var work = req.body.work;
    var newitem = {work: work};
    itemslist.push(newitem);
    res.redirect("/");
 });

 
 app.post("/delete",function(req,res){
    itemslist.splice(itemslist.indexOf(req.body.deleteitem),1)
    console.log(req.body.deleteitem)
     res.redirect("/")
 })
 app.listen(port,(req,res)=>{
    console.log(`The application is running on port  http://localhost:${port}`)

});
