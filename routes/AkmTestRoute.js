import express from "express";
import {
  addAkmTest,
  deleteAkmTest,
  getAkmTest,
  getAkmTestById,
  updateAkmTest,
  verifyPin,
} from "../controllers/AkmTestController.js";

const router = express.Router();

router.get("/akmtes", getAkmTest);
router.get("/akmtes/:id", getAkmTestById);
router.post("/akmtes", addAkmTest);
router.post("/akmtes/cekpin", verifyPin);
router.patch("/akmtes/:id", updateAkmTest);
router.delete("/akmtes/:id", deleteAkmTest);

export default router;
