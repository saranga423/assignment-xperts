// Booking routes for managing user bookings and appointments
// server/routes/bookingRoutes.js
import express from "express";
import { createBooking, listBookings, getBooking, updateBookingStatus } from "../controllers/bookingController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/", protect, listBookings);
router.get("/:id", protect, getBooking);
router.put("/:id/status", protect, adminOnly, updateBookingStatus);

export default router;

