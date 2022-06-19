import mongoose from "mongoose";

const AkmTesResultModel = new mongoose.Schema({
  // make data type array
  result_pilihan: {
    type: Array,
    required: false,
  },
  result_essay: {
    type: String,
    required: false,
  },
});

export default mongoose.model("akm_tes_result", AkmTesResultModel);
