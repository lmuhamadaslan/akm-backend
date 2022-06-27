import mongoose from "mongoose";

const AkmJawabanPilganModel = new mongoose.Schema({
  result_soal_pilihan: {
    type: String,
    ref: "akm_soal",
  },
  result_pilihan: {
    type: String,
    required: false,
  },
});

export default mongoose.model("akm_jawaban_pilgan", AkmJawabanPilganModel);
