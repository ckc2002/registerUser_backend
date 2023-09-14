const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

})

const stateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: [citySchema]
})

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    state: [stateSchema]
})

const Country = mongoose.model('Country', countrySchema)

module.exports = Country    