const { default: mongoose } = require('mongoose');

const dbConnect = () => {
    try {
        const connect = mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB Connected')
    } catch (err) {
        console.log("Database Error")
    }
}

module.exports = dbConnect