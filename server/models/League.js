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
    season: {
      type: Number,
      required: true,
      min: 1,
      max: 5000,
    },
    rules: {
      type: String,
      required: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    teams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const League = mongoose.model("League", LeagueSchema);
export default League;
