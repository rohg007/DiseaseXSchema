const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var animalOwnerSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    address:{
        type: String
    },
    email:{
        type: String
    },
    contact:{
        type: String,
        required: true
    }
});

var livestockSchema = new Schema({
    breed:{
        type: String,
        required: true
    },
    population:{
        type: Number,
        required: true
    }
});

var vaccineSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    scientificName: {
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    forHuman: {
        type: Boolean,
        required: true
    }
});

var animalSchema = new Schema({
    livestock:{
        type: livestockSchema
    },
    owner: {
        type:animalOwnerSchema
    },
    nextVaccination: {
        type: String,
        required: true
    },
    vaccine: {
        type: vaccineSchema
    }
});

module.exports = mongoose.model('Animal', animalSchema);