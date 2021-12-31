const HttpError = require('../models/http-error')
const About = require('../models/about')


const getAbout = async(req, res, next) =>{
    let abouts;
    try {
        abouts = await About.find();
    }
    catch(err) {
        const error = new HttpError('Could not find the about', 404)
        return next(error)
    }
    res.status(200)
    res.json({ abouts: abouts.map((about) => about.toObject({ getters: true })) })
}

exports.getAbout = getAbout;
