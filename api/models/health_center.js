const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var healthCenterSchema = new Schema({
  address: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
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
});

var HealthCenters = mongoose.model('HealthCenter', healthCenterSchema);
module.exports = HealthCenters;
