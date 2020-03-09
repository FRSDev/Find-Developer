const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const cors = require("cors")

const http = require('http')

const { setupWebSocket } = require('./websocket')

const app = express()

const server = http.Server(app)

setupWebSocket(server)

app.use(cors())
app.use(express.json())
app.use(routes)

mongoose.connect("mongodb+srv://adminrodrigues:123456*@devradar-tpt3c.mongodb.net/devradar?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
)

const port = 3333
server.listen(port, () => {
    console.log(`Server running in PORT ${port}`)
})


