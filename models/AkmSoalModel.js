import mongoose from "mongoose";

const AkmSoalSchema = new mongoose.Schema({
  soal_topik_id: {
    type: String,
    ref: "akm_topik",
    required: true,
  },
  soal_tipe: {
    type: Number,
    required: true,
  },
  soal_detail: {
    type: String,
    required: true,
  },
  soal_bobot: {
    type: String,
    required: false,
  },
  soal_aktif: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("akm_soal", AkmSoalSchema);
