// Payment routes for managing user payments and transactions
// server/routes/paymentRoutes.js
import express from "express";
import { createCheckoutSession } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/checkout", createCheckoutSession);

export default router;
