// Service routes for managing user services and offerings
// server/routes/serviceRoutes.js
import express from "express";
import { listServices, getService, createService, updateService, deleteService } from "../controllers/serviceController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.get("/", listServices);
router.get("/:id", getService);

// protected/admin routes
router.post("/", protect, adminOnly, createService);
router.put("/:id", protect, adminOnly, updateService);
router.delete("/:id", protect, adminOnly, deleteService);

export default router;
