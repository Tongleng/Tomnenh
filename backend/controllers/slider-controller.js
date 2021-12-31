const mongooseUniqueValidator = require('mongoose-unique-validator');
const HttpError = require('../models/http-error');

const mongoose = require('mongoose');

const Slider = require('../models/slider')

// =====>Get Slider funcion<======
const getSlider = async(req, res, next) => {
    let sliders;
    try{
        sliders = await Slider.find();
    }
    catch(err) {
        const error = new HttpError('Could not find the sldier', 404)
        return next(error)
    }
    res.status(200)
    res.json({ sliders: sliders.map((slider) => slider.toObject({ getters: true }))})
}

// =====>Create Slider funcion<======
const createSlider = async (req, res, next) => {
    const {title, description, url, image} = req.body;

    const createdSlider = new Slider({
        title,
        description,
        url,
        image
    })

    // let slider 
    try{
        await createdSlider.save();
    }
    catch(err){
        const error = new HttpError('Creating Slider error, please try again', 500);
        return next(error);
    }
    res.status(200)
    res.json({slider: createdSlider})
}
 
// =====>Update Slider funcion<======
const updateSlider = async (req, res, next)=> {
    
    const {title, description, image} = req.body;
    const sliderId = req.params.sid;

    let slider
    try {
        slider = await Slider.findById(sliderId);
    }
    catch(err) {
        const error = new HttpError('Something went wrong could not update sldier', 500);
        return next(error);
    }

    slider.title = title;
    slider.description = description;
    slider.image = image;

    try{
        await slider.save()
    }
    catch(err){
        const error = new HttpError('Something went wrong, could not update slider', 500);
        return next(error); 
    }

    res.status(200); 
    res.json({ slider: slider.toObject({ getters: true }) });

}

// =====>Delete Slider funcion<======
const deleteSlider = async(req, res, next) => {
    const sliderId = req.params.sid
    let slider;
    try {
        slider = await Slider.findById(sliderId);
    }
    catch(err) {
        const error = new HttpError('Something went wrong could not delete the sldier, please try again', 500);
        return next(error);
    }

    if(!slider) {
        const error = new HttpError('Could not find sldier by this ID, please try again', 404)
        return next(error);
    }

    try {
        slider.remove();
    }
    catch(err){
        const error = new HttpError("Somethiing went wrong could not delete slider", 500);
        return next(error);
    }
    res.status(200).json({message: 'Delete Slider'});
}

exports.getSlider = getSlider
exports.createSlider = createSlider
exports.updateSlider = updateSlider
exports.deleteSlider = deleteSlider