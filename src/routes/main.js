// const express = require('express');
const express = require("express");
const { route } = require('express/lib/application');

const routes = express.Router();
const mongoose = require("mongoose");
const app = express();
const hbs = require("hbs");

app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")
app.use('/static', express.static("public"))








const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});
app.get("/dev", (req, res) => {
  res.render("devops");
});
app.get("/sign", (req, res) => {
  res.render("signup");
});
app.get("/price", (req, res) => {
  res.render("price");
});
app.get("/blockchain", (req,res)=>{
  res.render("blockchain")
})
app.get("/ff", function (req, res) {
  res.sendFile(__dirname + "index");

})

let URI = "mongodb+srv://abc:abcd@cluster0.yrkrxrl.mongodb.net/?retryWrites=true&w=majority"

let connectdb = async () => {

  try {

    let con = await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log("database is connected with the given URI ")
  }

  catch (err) {

    console.log(err)
  }

}

connectdb()

let schema = new mongoose.Schema({
  id:
  {
    type: String,
    required: true,
    unique: false
  }, pass:
  {
    type: String,
    required: true,
    unique: false
  }
})

let Note = new mongoose.model("Student", schema)

saveDoc = () => {
 

  app.get("/ff", function (req, res) {
    res.sendfile(__dirname + "index")
  })


  app.post("/ff", function (req, res) {
    let newNote = new Note({
      id: req.body.id,
      pass: req.body.pass

    });

    newNote.save();
    res.redirect('/');
  })

}


saveDoc()





app.listen(8080, function () {
  console.log("chal");
})































// //jshint version:6

// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.set("view engine", "ejs");


// app.connect("mongodb+srv://ridit:Anjuli2012@cluster0.jp5qoo3.mongodb.net/Feedback", { useNewUrlParser: true }, { useUnifiedTopology: true })
// const notesSchema = {
//   id: String,
//   pass, String

// }
// const Note = mongoose.model("Note", notesSchema);

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index2");

// })

// app.post("/", function (req, res) {
//   let newNote = new Note({
//     name: req.body.name,
//     pass: req.body.pass

//   });
//   newNote.save();
// })

// app.listen(4000, function () {
//   console.log("chal");
// })
// // const app = express();
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.static("public"));

// // app.set("view engine", "ejs");

// // app.get("/", (req, res) => {
// //   res.render("index");
// // });

// // app.listen(process.env.PORT || 5000, (req, res) => {
// //   console.log("server started!");
// // });