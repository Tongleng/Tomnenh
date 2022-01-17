const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    agencyName: { type: String, required: true }, 
    description: { type: String, required: true},
    image: { type: String, required: true },
    messenger: {type: String, required: true},
    telegram: {type: String ,required: true},
    phone: {type: Number, requried: true}
});

module.exports = mongoose.model('About', aboutSchema)
