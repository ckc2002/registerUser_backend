const mongoose = require('mongoose');

const nameValidator = /^[A-Za-z]+$/;

const useSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[A-Za-z]+$/.test(value); // Custom validator for alphabets only
            },
            message: 'First Name must contain alphabets only',
        },
    },
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[A-Za-z]+$/.test(value);
            },
            message: 'Last Name must contain alphabets only',
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            },
            message: 'Invalid email format',
        },

    },
    country: {
        type: String,
        required: true,
        message: 'Country is required'
    },
    state: {
        type: String,
        required: true,
        message: 'State is required',
    },
    city: {
        type: String,
        required: true,
        message: 'Citry is required',
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
        message: 'Gender is required',
    },
    dateBirth: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                const today = new Date();
                const age = today.getFullYear() - value.getFullYear();
                return age >= 14; // Must be older than 14 years
            },
            message: 'Age must be at least 14 years old.',
        },
    },
    age: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const User = mongoose.model('User', useSchema);

module.exports = User;