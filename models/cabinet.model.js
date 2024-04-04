const mongoose = require('mongoose');

const cabinetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  specifications: {
    form_factor: String,
    motherboard_support: String,
    fan_support: String,
    radiator_support: String,
    gpu_clearance: String,
    cpu_cooler_clearance: String,
    storage: String,
    dimensions: String
  },
  price: {
    type: Number,
    required: true
  },
  image_url: {
    type: String,
    required: true
  }
});

const Cabinet = mongoose.model('cabinets', cabinetSchema);

module.exports = Cabinet;
