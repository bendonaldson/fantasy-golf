import mongoose from "mongoose";

const holeSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
      min: 1,
    },
    par: {
      type: Number,
      required: true,
      min: 3,
      max: 5,
    },
    yardage: {
      type: Number,
      required: true,
      min: 1,
      max: 1000,
    },
  },
  { timestamps: true }
);

const Hole = mongoose.model("Hole", holeSchema);
export default Hole;
