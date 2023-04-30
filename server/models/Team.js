import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
  {
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    league: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "League",
      required: true,
    },
    players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", TeamSchema);
export default Team;
