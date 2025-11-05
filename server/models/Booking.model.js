// Booking model for managing user bookings and appointments
// server/models/Booking.model.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: false },
  serviceName: { type: String },
  date: { type: Date, required: true },
  timeSlot: { type: String },
  notes: { type: String },
  status: { type: String, enum: ["pending","confirmed","cancelled","completed"], default: "pending" },
  paymentStatus: { type: String, enum: ["pending","paid","refunded"], default: "pending" },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
