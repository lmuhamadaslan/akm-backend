import express from "express";
import {
  getAkmModulById,
  getAkmModul,
  createAkmModul,
} from "../controllers/AkmModulController.js";

const router = express.Router();

router.get("/akmmodul", getAkmModul);
router.get("/akmmodul/:id", getAkmModulById);
router.post("/akmmodul", createAkmModul);

export default router;
