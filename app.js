const express = require("express");
const mysql = require("mysql");
const doenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");

const app = express();

doenv.config({
    path: "./.env",
  });



// db.connect((err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('MySQL Connection Success');
//     }
// });


app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

const location = path.join(__dirname, "./public");
app.use(express.static(location));
app.set("view engine", "hbs");


const partialsPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialsPath);


app.use("/",require("./routes/pages"));
app.use("/auth",require("./routes/auth"));

app.listen(5000, ()=>{
    console.log("Server Started @ Port 5000");
});