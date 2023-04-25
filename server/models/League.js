import mongoose from "mongoose";

const LeagueSchema = new mongoose.Schema(
  {
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 50,
    },
    season: {
      type: Number,
      required: true,
      min: 2023,
      max: 3000,
      default: 2023,
    },
    rules: {
      type: String,
      required: true,
      default: "",
    },
    teams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const League = mongoose.model("League", LeagueSchema);
export default League;
