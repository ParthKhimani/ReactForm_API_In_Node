const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    emailId: String,
    contactNumber: Number,
    dateOfBirth: String,
    password: String,
    confirmPassword: String,
    programmingSkills: String,
    gender: String,
    country: String,
    state: String,
    city: String,
    address: String,
    qualification: String
});

module.exports = mongoose.model('User', userSchema);