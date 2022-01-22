const mongooseUniqueValidator = require('mongoose-unique-validator');
const HttpError = require('../models/http-error');

const mongoose = require('mongoose');

const SocialMedia = require('../models/social-media');
const socialMedia = require('../models/social-media');

// =====>Get Social Media funcion<======
const getSocialMedia = async(req, res, next) => {
    let socialMedia;
    try{
        socialMedia = await SocialMedia.find();
    }
    catch(err) {
        const error = new HttpError('Could not find the Social Media', 404)
        return next(error)
    }
    res.status(200)
    res.json({ socialMedia: socialMedia.map((social) => social.toObject({ getters: true }))})
}

// =====>Create SocialMedia funcion<======
const createSocialMedia = async (req, res, next) => {
    const {title, description, facebookUrl, telegramUrl, instagramUrl} = req.body;

    const createdSocialMedia = new Slider({
        title,
        description,
        facebookUrl,
        instagramUrl,
        telegramUrl,
    })

    // let socialMedia 
    try{
        await createdSocialMedia.save();
    }
    catch(err){
        const error = new HttpError('Creating SocialMedia error, please try again', 500);
        return next(error);
    }
    res.status(200)
    res.json({socialMedia: createdSocialMedia})
}
 
// =====>Update Social Media funcion<======
const updateSocialMedia = async (req, res, next)=> {
    
    const {title, description,facebookUrl, telegramUrl, instagramUrl} = req.body;
    const socialMediaId = req.params.sid;

    let socialMedia
    try {
        socialMedia = await SocialMedia.findById(socialMediaId);
    }
    catch(err) {
        const error = new HttpError('Something went wrong could not update social media', 500);
        return next(error);
    }

    socialMedia.title = title;
    socialMedia.facebookUrl = facebookUrl,
    socialMedia.description = description,
    socialMedia.instagramUrl = instagramUrl,
    socialMedia.telegramUrl= telegramUrl

    try{
        await socialMedia.save()
    }
    catch(err){
        const error = new HttpError('Something went wrong, could not update social media', 500);
        return next(error); 
    }

    res.status(200); 
    res.json({ socialMedia: socialMedia.toObject({ getters: true }) });

}

// =====>Delete SocialMedia funcion<======
const deleteSocialMedia = async(req, res, next) => {
    const socialMediaId = req.params.sid
    let socialMedia;
    try {
        socialMedia = await SocialMedia.findById(socialMediaId);
    }
    catch(err) {
        const error = new HttpError('Something went wrong could not delete the social media, please try again', 500);
        return next(error);
    }

    if(!socialMedia) {
        const error = new HttpError('Could not find social media by this ID, please try again', 404)
        return next(error);
    }

    try {
        socialMedia.remove();
    }
    catch(err){
        const error = new HttpError("Somethiing went wrong could not delete social media", 500);
        return next(error);
    }
    res.status(200).json({message: 'Deleted social media'});
}

exports.getSocialMedia = getSocialMedia
exports.createSocialMedia = createSocialMedia
exports.updateSocialMedia = updateSocialMedia
exports.deleteSocialMedia = deleteSocialMedia