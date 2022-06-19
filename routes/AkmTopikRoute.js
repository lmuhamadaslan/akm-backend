import express from "express";
import {
  getAkmTopik,
  getAKmTopikById,
  createAkmTopik,
  updateAkmTopik,
  deleteAkmTopik,
  getAkmTopikByIdModul,
} from "../controllers/AkmTopikController.js";

const router = express.Router();

router.get("/akmtopik", getAkmTopik);
router.get("/akmtopik/:id", getAKmTopikById);
router.post("/akmtopik", createAkmTopik);
router.patch("/akmtopik/:id", updateAkmTopik);
router.delete("/akmtopik/:id", deleteAkmTopik);
router.get("/akmtopik/modul/:id", getAkmTopikByIdModul);

export default router;
