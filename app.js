let express = require("express");
let app = express();
const path = require("path");


app.set("view engine", "ejs");
app.set('views', path.join(__dirname,"views"));


const messages = [
    {
        message: "Hi there!",
        user: "AShutosh",
        added: new Date().toJSON().slice(0,10),
    },
      {
        message: "Hello world",
        user: "Navneet",
        added: new Date().toJSON().slice(0,10),
    }
];

const messageRoute = require("./routes/index")(messages);

/*
// Pass messages array into routes
app.use((req, res, next) => {
  res.locals.messages = messages; // optional: to access in views
  req.messages = messages; // to access in 
  
  console.log(res.locals.messages);
  console.log(req.messages)
  next();
}); 
*/

app.use(express.urlencoded({ extended: true}));

app.use("/",messageRoute);

app.use(express.static(__dirname + '/public'));



app.get("/",(req,res)=>{
    res.render("index",{messages});
})






// app.get("/new","new message");


app.listen(3000);




