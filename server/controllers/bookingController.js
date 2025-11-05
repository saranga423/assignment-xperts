// Controller for managing user bookings and appointments
// server/controllers/bookingController.js
import asyncHandler from "express-async-handler";
import Booking from "../models/Booking.model.js";
import Service from "../models/Service.model.js";
import { sendBookingEmail } from "../utils/email.js";

// create booking
export const createBooking = asyncHandler(async (req, res) => {
  const { name, email, date, serviceId, notes, timeSlot } = req.body;
  if (!name || !email || !date) {
    res.status(400); throw new Error("Please provide name, email and date");
  }

  const service = serviceId ? await Service.findById(serviceId) : null;
  const booking = await Booking.create({
    user: req.user?.id || null,
    name,
    email,
    date,
    service: service?._id,
    serviceName: service?.title || req.body.serviceName,
    notes,
    timeSlot,
  });

  // send notification email (async, don't block response)
  try { sendBookingEmail(booking); } catch (err) { console.warn("email error", err.message); }

  res.status(201).json(booking);
});

// list bookings (admin) or user bookings
export const listBookings = asyncHandler(async (req, res) => {
  if (req.user?.role === "admin") {
    const bookings = await Booking.find().populate("service user").sort({ createdAt: -1 });
    return res.json(bookings);
  }
  const bookings = await Booking.find({ user: req.user?.id }).populate("service").sort({ createdAt: -1 });
  res.json(bookings);
});

export const getBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate("service user");
  if (!booking) { res.status(404); throw new Error("Booking not found"); }
  res.json(booking);
});

export const updateBookingStatus = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) { res.status(404); throw new Error("Booking not found"); }
  booking.status = req.body.status || booking.status;
  await booking.save();
  res.json(booking);
});
