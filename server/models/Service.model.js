// Service model for managing user services and offerings
// server/models/Service.model.js
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, index: true },
  description: { type: String },
  price: { type: Number, default: 0 },
  durationMinutes: { type: Number, default: 60 },
  image: { type: String },
  active: { type: Boolean, default: true }
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);
export default Service;
