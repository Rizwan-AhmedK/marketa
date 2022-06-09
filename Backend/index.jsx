const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');


require('./Users')
const Users = mongoose.model("Users")

app.use(bodyParser.json())

const mongoUri = "mongodb+srv://aasanservice:hello123@cluster0.9ds66.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(mongoUri, {
    useNewUrlParser:true
})

mongoose.connection.on("connected", () => {
    console.log("connected")
})

mongoose.connection.on("error", (err) => {
    console.log("error while connecting", err)
})


app.post('/insert-data', async(req,res) => {
    const advertizement = new Ads({
          title: req.body.title,
          description: req.body.description,
          transmission: req.body.transmission,
          fuelType: req.body.fuelType,
          buildYear: req.body.buildYear,
          color: req.body.color,
          milage: req.body.milage,
          askPrice: req.body.askPrice,
          pricePKR: req.body.pricePKR,
          location: req.body.location,
          area: req.body.area,
    }).then(data => {
        console.log(data)
        res.send("Data inserted successfully")
    })

    .catch(err => {
        console.log(err)
    })
})


app.listen(3000, () => {
    console.log('server running')
})
