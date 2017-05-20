//  mongodb schema for contacts
const mongoose = require('mongoose');



const ContactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        requried: true
    },
    phone:{
        type: String,
        required: true
    }
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);