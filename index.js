require("dotenv").config();
const express  = require("express");
const connectDB = require("./utils/db");
const urlRouter = require('./router/url-router')
const cors = require("cors");

const url = express();

url.use(cors({ origin: "http://localhost:3000" }));
url.use(cors());

url.use(express.json());

url.use('/api', urlRouter)

connectDB().then(() => {
    const PORT = 5000;
    url.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})

