const express = require('express')
const morgan = require('morgan')

const PORT = 5000;
const server = express();

server.use(morgan('dev'))

server.get("/user/loggedIn", (req, res) => {

    const userInfo = {
        name: "chetan",
        country: "India"
    }
    res.json({
        status: "success",
        data:[userInfo]
    })
})


server.listen(PORT, () => {
    console.log("server is started at port " + PORT);
})