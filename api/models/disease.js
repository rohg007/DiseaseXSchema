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

module.exports = mongoose.model('Disease', diseaseSchema);
