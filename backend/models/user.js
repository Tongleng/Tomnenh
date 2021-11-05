const mongoose = require('mongoose')

const uniqueValidtor = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, unique: true, required: true }, 
    password: { type: String, required: true, minlength: 8},
    username: { type: String, required: true },
    place: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Places'}]

    // mongoose.Types.ObjectId is allowed to get the real Id of Place, 
    // ref: is allowed to build the connection between schema ( User schema and Place schema)
});

userSchema.plugin(uniqueValidtor);
module.exports = mongoose.model('Users', userSchema)
