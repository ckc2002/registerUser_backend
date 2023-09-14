const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser')
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

const userRoute = require('./routes/userRoute');
const countryRoute = require('./routes/countryRoute');
const cors = require('./config/CorsConfig');

const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

dbConnect()

app.use(express.json())
app.use('/api/user', userRoute)
app.use('/api/country', countryRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`)
})