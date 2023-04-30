import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema(
  {
    sportsRadarId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      default: "USA",
    },
    fedexPoints: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    fedexRank: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
    worldRank: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
    weeklyPayouts: [
      {
        week: {
          type: Number,
          required: true,
          min: 1,
          max: 52,
        },
        amount: {
          type: Number,
          required: true,
          min: 0,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", PlayerSchema);
export default Player;
