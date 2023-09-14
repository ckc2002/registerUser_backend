const User = require('../models/userModal')
const asyncHandler = require('express-async-handler')
const { calculateAge } = require('../utils/helper')

const registerUser = asyncHandler(async (req, res) => {
    const email = req.body.email
    const findUser = await User.findOne({ email })
    console.log(findUser)
    if (!findUser) {
        const newUser = await User.create({
            ...req.body,
            age: calculateAge(req.body.dateBirth)
        })
        res.json(newUser)
    } else {
        throw new Error('User Already Exist')
    }
})

const allUser = asyncHandler(async (req, res) => {
    try {
        const allUsers = await User.find({})
        res.status(200).json({
            message: "Fetched Successully", data: allUsers
        })
    } catch (err) {
        throw new Error('Error')
    }
})

const UserById = asyncHandler(async (req, res) => {
    const id = req.params.id
    try {
        const getUser = await User.findById(id)
        res.status(200).json({
            message: "Fetched Successully", data: getUser
        })
    } catch (err) {
        throw new Error(err)
    }
})

const deleteUser = asyncHandler(async (req, res) => {
    const id = req.params.id
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(200).json({ message: "Deleted Successfully", data: deleteUser })
    } catch (err) {
        throw new Error(err)
    }
})

const updateUser = asyncHandler(async (req, res) => {
    try {
        const { firstName, lastName, email, gender, country, state, city, dateBirth } = req.body
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            country: country,
            state: state,
            city: city,
            dateBirth: dateBirth,
            age: calculateAge(dateBirth)
        }, { new: true })
        res.status(200).json({ message: "Update Successfully", data: updateUser })
    } catch (err) {
        throw new Error(err)
    }
})

module.exports = { registerUser, allUser, UserById, deleteUser, updateUser }