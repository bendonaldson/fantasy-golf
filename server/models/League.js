import mongoose from "mongoose";

const LeagueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 50,
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    season: {
      type: Number,
      required: true,
      min: 2023,
      max: 3000,
      default: 2023,
    },
    teams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true,
        default: [],
      },
    ],
    matchups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Matchup",
        required: true,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const League = mongoose.model("League", LeagueSchema);
export default League;
