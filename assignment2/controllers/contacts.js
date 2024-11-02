let ContactModel = require('../models/contacts');

module.exports.create = async function(req, res, next){
    try {

        let newContact = new ContactModel(req.body);
        let result = await ContactModel.create(newContact);
        res.json(
            {
            status: 'OK',
            message: 'Contact created successfully'}
        )
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.list = async function(req, res, next){
    try {
        let list = await ContactModel.find({}, '-password');
        res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.contactsGet = async function(req, res, next){
    try {
        let contactsID = req.params.contactsID;

        req.contacts = await ContactModel.findOne({_id: contactsID});
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.contactsByID = async function(req, res, next){
    res.json(req.contacts);
}

module.exports.update = async function(req, res, next){
    try {
        let contactsID = req.params.contactsID;
        let updateContacts = new ContactModel(req.body);
        updateContacts._id = contactsID;
        let result = await ContactModel.updateOne({_id: contactsID}, updateContacts);
        console.log(result);

        if(result.modifiedCount >0){
            res.json(
                {
                    status: 'OK',
                    message: 'Contact updated successfully'
                }
            );
        }else {
            throw new Error('Contact not found');
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.remove = async function(req, res, next){
    try {
        let contactsID = req.params.contactsID;
        let result = await ContactModel.deleteOne({_id: contactsID});
        console.log(result);

        if(result.deletedCount >0){
            res.json(
                {
                    status: 'OK',
                    message: 'Contact deleted successfully'
                }
            );
        }else {
            throw new Error('Contact not found');
        }
    }catch (error) {
        console.log(error);
        next(error);
    }
}