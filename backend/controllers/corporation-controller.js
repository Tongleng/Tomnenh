const HttpError = require('../models/http-error');

const Corporatorion = require('../models/corporation');

const getCorporation = async (req, res, next) => {
    let corporations;

    try {
        corporations = await Corporatorion.find();
    }
    catch(err) {
        const error = new HttpError('Could not find the Corporation', 404);
        return next(error);
    }
    res.status(200);
    res.json({ corporations: corporations.map((corporation) => corporation.toObject({ getters: true })) })
}

exports.getCorporation = getCorporation;