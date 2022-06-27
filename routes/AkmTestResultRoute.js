import exporess from "express";
import {
  addAkmJawabanEssay,
  addAkmJawabanPilgan,
  deleteAkmJawabanEssay,
  deleteAkmJawabanPilgan,
  getAkmJawabanEssay,
  getAkmJawabanEssayById,
  getAkmJawabanPilgan,
  getAkmJawabanPilganById,
  updateAkmJawabanEssay,
  updateAkmJawabanPilgan,
} from "../controllers/AkmTestResultController.js";

const router = exporess.Router();

// bagian AkmJawanPilgan
router.get("/akmpilgan", getAkmJawabanPilgan);
router.get("/akmpilgan/:id", getAkmJawabanPilganById);
router.post("/akmpilgan", addAkmJawabanPilgan);
router.patch("/akmpilgan", updateAkmJawabanPilgan);
router.delete("/akmpilgan/:id", deleteAkmJawabanPilgan);

// bagian AkmJawanEssay
router.get("/akmessay", getAkmJawabanEssay);
router.get("/akmessay/:id", getAkmJawabanEssayById);
router.post("/akmessay", addAkmJawabanEssay);
router.patch("/akmessay", updateAkmJawabanEssay);
router.delete("/akmessay/:id", deleteAkmJawabanEssay);

export default router;
