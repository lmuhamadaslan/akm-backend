import mongoose from "mongoose";

const AkmTestSchema = new mongoose.Schema({
  tes_group_id: {
    type: String,
    ref: "akm_group",
    required: true,
  },
  tes_nama: {
    type: String,
    required: true,
  },
  tes_waktu_mulai: {
    type: Date,
    required: true,
  },
  tes_waktu_selesai: {
    type: Date,
    required: true,
  },
  tes_waktu: {
    type: Number,
    required: true,
  },
  tes_token: {
    type: String,
    required: true,
  },
});

export default mongoose.model("akm_tes", AkmTestSchema);
