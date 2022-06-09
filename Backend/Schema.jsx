const mongoose = require("mongoose");

const AdsSchema = new mongoose.Schema({
    title: String,
    description: String,
    transmission: String,
    fuelType: String,
    buildYear: String,
    color: String,
    milage: String,
    askPrice: String,
    pricePKR: Number,
    location: String,
    area: String,
})
mongoose.model("Ads", AdsSchema);




