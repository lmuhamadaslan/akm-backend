import exporess from "express";
import {
  addAkmTesResult,
  deleteAkmTesResult,
  getAkmTesResult,
  getAkmTesResultById,
  updateAkmTesResult,
} from "../controllers/AkmTestResultController.js";

const router = exporess.Router();

router.get("/akmresult", getAkmTesResult);
router.get("/akmresult/:id", getAkmTesResultById);
router.post("/akmresult", addAkmTesResult);
router.patch("/akmresult", updateAkmTesResult);
router.delete("/akmresult/:id", deleteAkmTesResult);

export default router;
