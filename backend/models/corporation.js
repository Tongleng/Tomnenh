const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const corporationSchema = new Schema({
    companyname: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Object, required: true },
    image: { type: String, required: true },
})
module.exports = mongoose.model('Corporation', corporationSchema);