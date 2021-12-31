const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    email: { type: String, unique: true, required: true }, 
    name: { type: String, required: true},
    phone: { type: Number, required: true },
});

module.exports = mongoose.model('Contact', contactSchema)
