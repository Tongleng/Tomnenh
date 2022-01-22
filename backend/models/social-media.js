const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sodcialMediaSchema = new Schema ({
    title: { type: String, required: true },
    description: {type: String, required: true},
    faecbookUrl: { type: String, required: true },
    telegramUrl: { type: String, required: true },
    instagramUrl: { type: String, required: true },
})

module.exports = mongoose.model('Social', sodcialMediaSchema)