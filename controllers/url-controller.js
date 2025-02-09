const urlService = require('../services/url-service');

const createShortUrl = async (req, res) =>{
    try {
        const {longUrl, shortUrl } = req.body;
        const newUrl = await urlService.createShortUrl(longUrl, shortUrl);
        res.status(201).json({data: newUrl})
    } catch (error) {
        res.status(500).json({data : "Interal Server error"})
    }
}

module.exports = {
    createShortUrl
}