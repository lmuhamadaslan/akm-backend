import mongoose from "mongoose";

const AkmGroupSchema = new mongoose.Schema({
  group_nama: {
    type: String,
    required: true,
  },
});

export default mongoose.model("akm_group", AkmGroupSchema);
