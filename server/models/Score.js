import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    hole: {
      type: Number,
      required: true,
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true,
    },
    strokes: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const Score = mongoose.model("Score", scoreSchema);
export default Score;
