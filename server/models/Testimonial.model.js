// Testimonial model for managing user testimonials and reviews
// server/models/Testimonial.model.js
import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  company: { type: String },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  visible: { type: Boolean, default: true },
}, { timestamps: true });

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;
