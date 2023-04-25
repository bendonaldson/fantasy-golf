import mongoose from "mongoose";

const RoundSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
      min: 1,
    },
    tournament: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    },
    holes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hole",
        required: true,
      },
    ],
    scores: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Score",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Round = mongoose.model("Round", RoundSchema);
export default Round;
