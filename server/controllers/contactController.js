// Controller for managing user contact inquiries and support requests
// server/controllers/contactController.js
import asyncHandler from "express-async-handler";
import Contact from "../models/Contact.model.js";
import { sendContactEmail } from "../utils/email.js";

export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, message, phone } = req.body;
  if (!name || !email || !message) { res.status(400); throw new Error("Missing fields"); }

  const contact = await Contact.create({ name, email, message, phone });
  try { sendContactEmail(contact); } catch (err) { console.warn("email err", err.message); }
  res.status(201).json({ message: "Message received", contact });
});

export const listContacts = asyncHandler(async (req, res) => {
  const items = await Contact.find().sort({ createdAt: -1 });
  res.json(items);
});

