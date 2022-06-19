import mongoose from "mongoose";

const AkmJawabanSchema = new mongoose.Schema({
  jawaban_soal_id: {
    type: String,
    required: true,
  },
  jawaban_detail: {
    type: String,
    required: true,
  },
  jawaban_benar: {
    type: Boolean,
    required: true,
  },
  jawaban_aktif: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("akm_jawaban", AkmJawabanSchema);
