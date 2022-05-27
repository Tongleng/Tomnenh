
const HttpError = require('../models/http-error')
const GoogleMap = require('../models/google-map')


const getGoogleMap = async(req, res, next) =>{
    let googleMap;
    try {
        googleMap = await GoogleMap.find();
    }
    catch(err) {
        const error = new HttpError('Could not find the google map url', 404)
        return next(error)
    }
    res.status(200)
    res.json({ googleMap: googleMap.map((gm) => gm.toObject({ getters: true })) })
}

exports.getGoogleMap = getGoogleMap;
