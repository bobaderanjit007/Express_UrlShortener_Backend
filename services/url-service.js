const Url = require("../model/Url")
const shortid = require("shortid")
const { validateUrl } = require("../validators/url-validator")

const createShortUrl = async (shortUrl, longUrl) => {
    if(!validateUrl(shortUrl, longUrl)){
        throw new Error("Invalid Url Format!");
    }

    let customeShortUrl = shortUrl || shortid.generate();
    const urlExist = await Url.findOne({shortUrl: customeShortUrl});
    if(urlExist){
        throw new Error("Short url alrady exists, choose another one.");
    }

    const newUrl = await Url.create({shortUrl, longUrl: customeShortUrl});
    return newUrl;
}

module.exports = {
    createShortUrl
}