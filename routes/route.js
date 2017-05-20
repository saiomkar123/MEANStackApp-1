const express = require('express');
const router = express.Router();

const Contact= require('../models/contacts.js');

// Retreving contacts
router.get('/contact', (req, res)=>{
    console.log('contacts get called');
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
})

// add contact
router.post('/contact', (req, res, next)=>{
    console.log('contacts post called');
    // logic to add contact
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'Failed to add contact'});
        }
        else{
            res.json({msg: 'Contact added Scuccessfully'});
        }
    })
})
// Delete contacts
router.delete('/contact/:id', (req, res, next)=>{
    console.log('contacts delete called');
    // logic to delete contacts
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

module.exports = router;