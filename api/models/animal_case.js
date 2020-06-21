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

var diseaseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    scientificName: {
        type: String,
        required: true
    },
    precautions:{
        type: String,
        required: true
    },
    symptoms:{
        type: String,
        required: true
    },
    morbidity:{
        type: Number,
        required: true
    }, 
    mortality: {
        type: Number,
        required: true
    },
    total_affected: {
        type: Number,
        required: true
    },
    total_deaths: {
        type: Number,
        required: true
    },
    livestock: [livestockSchema],
    vaccine: [vaccineSchema]
});

var healthCenterSchema = new Schema({
    address:{
        type: String
    },
    email:{
        type: String
    },
    contact:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    latlng : {
        type: String,
        required: true
    },
    incharge: {
        type: String,
        required: true
    },
    pincode: {
        type: String
    },
    web: {
        type: String,
    }
});

var animalCaseSchema = new Schema({
    animal: {
        type: animalSchema
    },
    healthCenter: {
        type: healthCenterSchema
    },
    disease: {
        diseaseSchema
    },
    latlng: {
        type: String
    }
});

module.exports = mongoose.model('AnimalCase', animalCaseSchema);