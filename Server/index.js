const express = require("express")
const app = express()
const router = require("./routes/routes.js")
const dotenv = require('dotenv').config()
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.listen(5000, () => {
    console.log("Server is started on port 5000")
}) 

