const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema(
  {
    irradiance: { type: Number, required: true },
    temp: { type: Number, required: true },
    prevHour: { type: Number, required: true },
    prevDay: { type: Number, required: true },
    roll3: { type: Number, required: true },
    roll6: { type: Number, required: true },
    prediction: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Prediction", predictionSchema);
