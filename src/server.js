const express = require('express');
const hbs = require("hbs");
const app = express();
const routes = require('./routes/main')
// const mongoose = require("mongoose")

let URI="mongodb+srv://bhavya:1234@cluster0.pkzjqvu.mongodb.net/?retryWrites=true&w=majority"
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

let Student = new mongoose.model("Student", schema)

saveDoc = () => {
  // let s1 = new Student({

  //     id: "abcddde",
  //     pass: "ddddde"

  // })
  // s1.save()




  app.post("/ff", function (req, res) {
    let newNote = new Note({
      id: req.body.id,
      pass: req.body.pass

    });
    newNote.save();
    res.redirect('/ff');
  })

}

// module.exports = saveDoc
// module.exports = connectdb
// const saveDoc = require("./app3.js")
saveDoc()


app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")
app.use('/static', express.static("public"))
app.use('', routes)

// mongoose.connect("mongodb://localhost:27017/Hireus", () => {
//     console.log("database connected")
// })
app.listen(process.env.PORT | 8080, () => {
    console.log("server started")
})