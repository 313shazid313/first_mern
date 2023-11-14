const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const dotenv = require('dotenv'); //for hiding url
const bodyParser = require('body-parser');
dotenv.config();
const userRoute = require('./routes/userRoute');
app.use(bodyParser.json())
app.use(cors())  //for connecting (Cross origin policy)
// app.use(express.json())
// body parser er bodole kora jai

mongoose
  .connect(process.env.URI)
  .then(() => {  //".then returns a promise"
    console.log('connected')
    app.listen(process.env.PORT, (err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log('failed', error)
  })




app.use(userRoute)