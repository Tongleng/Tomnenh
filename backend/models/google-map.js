const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const gooogleMapSchema = new Schema({
    googleMapUrl: { type: String, required: true }, 
});

module.exports = mongoose.model('GoogleMap', gooogleMapSchema)
