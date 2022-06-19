import express from "express";
import {
  addAkmUser,
  deleteAkmUser,
  getAkmUser,
  getAkmUserById,
  updateAkmUser,
} from "../controllers/AkmUserController.js";

const router = express.Router();

router.get("/akmuser", getAkmUser);
router.get("/akmuser/:id", getAkmUserById);
router.post("/akmuser", addAkmUser);
router.patch("/akmuser/:id", updateAkmUser);
router.delete("/akmuser/:id", deleteAkmUser);

export default router;
