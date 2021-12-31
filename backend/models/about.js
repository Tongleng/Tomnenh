const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    title: { type: String, required: true }, 
    description: { type: String, required: true},
    image: { type: String, required: true },
});

module.exports = mongoose.model('About', aboutSchema)
