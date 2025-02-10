const Url = require("../model/Url")
const shortid = require("shortid")
const { validateUrl } = require("../validators/url-validator")

const createShortUrl = async (longUrl, shortUrl) => {
    if(!validateUrl(shortUrl, longUrl)){
        throw new Error("Invalid Url Format!");
    }

    let customeShortUrl = shortUrl || shortid.generate();
    const urlExist = await Url.findOne({shortUrl: customeShortUrl});
    if(urlExist){
        throw new Error("Short url alrady exists, choose another one.");
    }

    const newUrl = await Url.create({longUrl, shortUrl: customeShortUrl});
    return newUrl;
}

const getLongUrl = async (shortUrl) => {
    const urlData = await Url.findOneAndUpdate(
        {shortUrl},
        { $inc : {click : 1}}
    )

    if(!urlData){
        throw new Error("Short Url not found!");
    }

    return urlData;
}   

module.exports = {
    createShortUrl,
    getLongUrl
}