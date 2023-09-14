const Country = require('../models/countryModal')
const asyncHandler = require('express-async-handler')

const allCountry = asyncHandler(async (req, res) => {
    try {
        const allCountry = await Country.find({})
        res.status(200).json({
            message: "Fetched Successully", data: allCountry
        })
    } catch (err) {
        throw new Error('Error')
    }
})

const createCountry = asyncHandler(async (req, res) => {
    try {
        const createCountry = await Country.create(req.body)
        res.status(200).json({ message: "Added Successfully", data: createCountry })
    } catch (error) {
        throw new Error(error)
    }
})

const singleCountry = asyncHandler(async (req, res) => {
    try {
        const findCountry = await Country.findById(req.params.id)
        res.status(200).json({ message: "Fetched Successfully", data: findCountry })
    } catch (error) {
        throw new Error(error)
    }
})

const updateCountry = asyncHandler(async (req, res) => {
    try {
        const updateData = await Country.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ message: "Updated Successfully", data: updateData })
    } catch (error) {
        throw new Error(error)
    }
})

const deleteCountry = asyncHandler(async (req, res) => {
    try {
        const deleteData = await Country.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted Successfully", data: deleteData })
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { allCountry, createCountry, singleCountry, updateCountry, deleteCountry }
