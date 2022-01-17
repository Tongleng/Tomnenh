const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sliderSchema = new Schema ({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true },
    stores: { type: String, required: true },
    buttonText: { type: String, requied: true }
})

module.exports = mongoose.model('Slider', sliderSchema)