const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    longUrl : { type: String, required : true},
    shortUrl: {type: String, required : true},
    click: { type : Number, Default: 0}
})

module.exports = mongoose.model("Url", UrlSchema)