const express = require("express"),
      app = express(),
      morgan = require("morgan"),
      path = require("path");

//SETTINGS
app.set("port", process.env.port || 3000);
app.use(express.static(path.join(__dirname, "public")));

//MIDDLEWARES
app.use(morgan('dev'));

//ROUTES
app.get("/", require("./routes/routes.js"));

//LISTEN
app.listen(app.get("port"), function(req, res){
    console.log("Connected on port: ",app.get("port"));
});