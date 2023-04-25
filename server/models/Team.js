import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    golfers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true,
        default: [],
      },
    ],
    wins: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    losses: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", TeamSchema);
export default Team;
