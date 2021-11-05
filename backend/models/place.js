const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    coordidate: {
        latitude: String,
        longitrude: String
    },
    user: { type: mongoose.Types.ObjectId, required: true, ref: 'Users' }

    // ref: is used to connect between Schema
    // 'Users' is a Schema in Database
})

module.exports = mongoose.model('Places', placeSchema)