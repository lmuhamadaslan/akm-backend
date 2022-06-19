import mongoose from "mongoose";

const AkmTopikSchema = mongoose.Schema({
  topik_modul_id: {
    type: String,
    required: true,
    ref: "akm_modul",
  },
  topik_nama: {
    type: String,
    required: true,
  },
  topik_detail: {
    type: String,
    required: true,
  },
  topik_aktif: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("akm_topik", AkmTopikSchema);
