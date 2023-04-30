import mongoose from "mongoose";

const MatchupSchema = new mongoose.Schema(
  {
    league: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "League",
      required: true,
    },
    week: {
      type: Number,
      required: true,
      min: 1,
      max: 52,
    },
    team1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    team2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    team1Total: {
      type: Number,
      required: true,
      default: 0,
    },
    team2Total: {
      type: Number,
      required: true,
      default: 0,
    },
    winner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  },
  { timestamps: true }
);

const Matchup = mongoose.model("Matchup", MatchupSchema);
export default Matchup;
