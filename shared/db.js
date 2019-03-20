let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/company-demo');
let staffSchema = new mongoose.Schema({
    name: String,
    title: String
}, {collection: 'staff'});

let staff = mongoose.model('staff', staffSchema);

exports.staff = staff;