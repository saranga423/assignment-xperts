// Controller for managing user testimonials and reviews
// server/controllers/testimonialController.js
import asyncHandler from "express-async-handler";
import Testimonial from "../models/Testimonial.model.js";

export const listTestimonials = asyncHandler(async (req, res) => {
  const items = await Testimonial.find({ visible: true }).sort({ createdAt: -1 });
  res.json(items);
});

export const createTestimonial = asyncHandler(async (req, res) => {
  const { authorName, message, rating, company } = req.body;
  const t = await Testimonial.create({ authorName, message, rating, company, visible: false });
  res.status(201).json(t);
});

export const moderateTestimonial = asyncHandler(async (req, res) => {
  const t = await Testimonial.findById(req.params.id);
  if (!t) { res.status(404); throw new Error("Not found"); }
  t.visible = req.body.visible ?? t.visible;
  await t.save();
  res.json(t);
});

