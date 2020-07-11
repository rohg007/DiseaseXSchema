const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var vaccineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  forHuman: {
    type: String,
    required: true,
  },
});

var livestockSchema = new Schema({
  breed: {
    type: String,
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
});

var diseaseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  },
  precautions: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  morbidity: {
    type: Number,
    required: true,
  },
  mortality: {
    type: Number,
    required: true,
  },
  total_affected: {
    type: Number,
    required: true,
  },
  total_deaths: {
    type: Number,
    required: true,
  },
  livestock: [livestockSchema],
  vaccine: [vaccineSchema],
});

var healthCenterSchema = new Schema({
  address: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
  },
  contact: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  latlng: {
    type: String,
    required: true,
  },
  incharge: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
  },
  web: {
    type: String,
  },

  total_affected: {
    type: Number,
    required: true,
  },
  total_deaths: {
    type: Number,
    required: true,
  },
  total_recovered: {
    type: Number,
    required: true,
  },
});

var humanCaseSchema = new Schema({
  status: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  patientAddress: {
    type: String,
  },
  patientEmail: {
    type: String,
  },
  patientContact: {
    type: String,
    required: true,
  },
  latlng: {
    type: String,
  },
  disease: {
    type: diseaseSchema,
  },
  healthCenter: {
    type: healthCenterSchema,
  },
});

module.exports = mongoose.model('HumanCase', humanCaseSchema);
