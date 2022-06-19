import mongoose from "mongoose";

const AkmUserSchema = new mongoose.Schema(
  {
    user_group_id: {
      type: String,
      required: true,
      ref: "akm_group",
    },
    user_name: {
      type: String,
      required: true,
    },
    user_password: {
      type: String,
      required: true,
    },
    user_firstName: {
      type: String,
      required: true,
    },
    user_nik: {
      type: String,
      required: true,
    },
    user_keterangan: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("akm_user", AkmUserSchema);
