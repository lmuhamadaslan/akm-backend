import mongoose from "mongoose";

const AkmModulSchema = mongoose.Schema({
  modul_nama: {
    type: String,
    required: true,
  },
  modul_aktif: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("akm_modul", AkmModulSchema);
