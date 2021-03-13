const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()

const PORT = 5000 || process.env

const homeRoute = require("./routes/homeRoute")
const resultsRoute = require("./routes/resultRoute")
const connectDB = require("./mongoConnection")

connectDB()

app.use(cors({
    exposedHeaders: 'access',
  }))
app.use(express.json())


// app.use("/", homeRoute)
app.use('/results', resultsRoute)

app.use(express.static(path.resolve(__dirname, "static")))
app.listen(5000, () => {
    console.log(`app is running on port ${PORT}`)
})