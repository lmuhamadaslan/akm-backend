import express from "express";
import {
  createAkmSoal,
  deleteAkmSoal,
  editAkmSoal,
  getAkmSoal,
  getAkmSoalById,
  getAkmSoalByTopik,
} from "../controllers/AkmSoalController.js";

const router = express.Router();

router.get("/akmsoal", getAkmSoal);
router.get("/akmsoal/:id", getAkmSoalById);
router.get("/akmsoal/topik/:id", getAkmSoalByTopik);
router.post("/akmsoal", createAkmSoal);
router.patch("/akmsoal/:id", editAkmSoal);
router.delete("/akmsoal/:id", deleteAkmSoal);

export default router;
