const HttpError = require('../models/http-error')
const Contact = require('../models/contact')


const getContact = async(req, res, next) =>{
    let contacts;
    try {
        contacts = await Contact.find();
    }
    catch(err) {
        const error = new HttpError('Could not find the contact', 404)
        return next(error)
    }
    res.status(200)
    res.json({ contacts: contacts.map((contact) => contact.toObject({ getters: true })) })
}

// =====>Delete Contact funcion<======
const deleteContact = async(req, res, next) => {
    const contactId = req.params.cid
    let contact;
    try {
        contact = await Contact.findById(contactId);
    }
    catch(err) {
        const error = new HttpError('Something went wrong could not delete the sldier, please try again', 500);
        return next(error);
    }

    if(!contact) {
        const error = new HttpError('Could not find sldier by this ID, please try again', 404)
        return next(error);
    }

    try {
        contact.remove();
    }
    catch(err){
        const error = new HttpError("Somethiing went wrong could not delete contact", 500);
        return next(error);
    }
    res.status(200).json({message: 'Delete contact'});
}

exports.getContact = getContact;
exports.deleteContact = deleteContact;

