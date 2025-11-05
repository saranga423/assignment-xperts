// Controller for managing user services and offerings
// server/controllers/serviceController.js
import asyncHandler from "express-async-handler";
import Service from "../models/Service.model.js";

export const listServices = asyncHandler(async (req, res) => {
  const services = await Service.find({ active: true }).sort({ createdAt: -1 });
  res.json(services);
});

export const getService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error("Service not found");
  }
  res.json(service);
});

export const createService = asyncHandler(async (req, res) => {
  const { title, description, price, durationMinutes } = req.body;
  const service = new Service({ title, description, price, durationMinutes });
  await service.save();
  res.status(201).json(service);
});

export const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) { res.status(404); throw new Error("Service not found"); }
  Object.assign(service, req.body);
  await service.save();
  res.json(service);
});

export const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) { res.status(404); throw new Error("Service not found"); }
  await service.remove();
  res.json({ message: "Service removed" });
});
