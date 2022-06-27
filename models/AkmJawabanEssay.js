import mongoose from "mongoose";

const AkmJawabanEssayModel = new mongoose.Schema({
  result_soal_essay: {
    type: String,
    ref: "akm_soal",
  },
  result_essay: {
    type: String,
    required: false,
  },
});

export default mongoose.model("akm_jawaban_essay", AkmJawabanEssayModel);
