import express from "express";
import {
  getAkmJawaban,
  getAkmJawabanById,
  addAkmJawaban,
  updateAkmJawaban,
  deleteAkmJawaban,
  getAkmJawabanBySoalId,
} from "../controllers/AkmJawabanController.js";

const router = express.Router();

router.get("/akmjawaban", getAkmJawaban);
router.get("/akmjawaban/:id", getAkmJawabanById);
router.get("/akmjawaban/soal/:id", getAkmJawabanBySoalId);
router.post("/akmjawaban", addAkmJawaban);
router.patch("/akmjawaban/:id", updateAkmJawaban);
router.delete("/akmjawaban/:id", deleteAkmJawaban);

export default router;
