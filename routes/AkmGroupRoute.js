import express from "express";
import {
  addAkmGroup,
  getAkmGroup,
  getAkmGroupById,
  updateAkmGroup,
  deleteAkmGroup,
} from "../controllers/AkmGroupController.js";

const router = express.Router();

router.get("/akmgroup", getAkmGroup);
router.get("/akmgroup/:id", getAkmGroupById);
router.post("/akmgroup", addAkmGroup);
router.patch("/akmgroup/:id", updateAkmGroup);
router.delete("/akmgroup/:id", deleteAkmGroup);

export default router;
