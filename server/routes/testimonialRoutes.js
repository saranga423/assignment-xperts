// Testimonial routes for managing user testimonials and reviews
// server/routes/testimonialRoutes.js
import express from "express";
import { listTestimonials, createTestimonial, moderateTestimonial } from "../controllers/testimonialController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.get("/", listTestimonials);
router.post("/", createTestimonial);
router.put("/:id/moderate", protect, adminOnly, moderateTestimonial);

export default router;
