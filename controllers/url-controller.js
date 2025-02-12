const urlService = require('../services/url-service');

const createShortUrl = async (req, res) =>{
    try {
        const {longUrl, shortUrl } = req.body;
        console.log("req.body : ", req.body)
        const newUrl = await urlService.createShortUrl(longUrl, shortUrl);
        res.status(201).json({data: newUrl})

    } catch (error) {
        console.log(error);
        res.status(500).json({data : error})
    }
}

const redirectToLongUrl = async (req, res) => {
    try {
        const {shortUrl} = req.params;
        const longUrl = await urlService.getLongUrl(shortUrl);
        res.status(200).json({data: longUrl});
    } catch (error) {
        console.log(error);
        res.status(500).json({data : error})
    }
}

module.exports = {
    createShortUrl, 
    redirectToLongUrl
}