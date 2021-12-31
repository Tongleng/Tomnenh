const HttpError = require('../models/http-error');
const Service = require('../models/service');


// =====>Get Service funcion<======
const getService = async(req, res, next) => {
    let services;
    try {
        services = await Service.find();
    }
    catch(err) {
        const error = new HttpError('Could not find the service', 404);s
        return next(error)
    }
    res.status(200)
    res.json({ services: services.map((service) => service.toObject({ getters: true }))})
}

// =====>Delete Sevice funcion<======
const deleteService = async(req, res, next) => {
    const serviceId = req.params.sid
    let service;
    try {
        service = await Service.findById(serviceId);
    }
    catch(err) {
        const error = new HttpError('Something went wrong could not delete the service, please try again', 500);
        return next(error);
    }

    if(!service) {
        const error = new HttpError('Could not find sevice by this ID, please try again', 404)
        return next(error);
    }

    try {
        service.remove();
    }
    catch(err){
        const error = new HttpError("Somethiing went wrong could not delete service", 500);
        return next(error);
    }
    res.status(200).json({message: 'Delete service'});
}

exports.getService = getService;
exports.deleteService = deleteService;

