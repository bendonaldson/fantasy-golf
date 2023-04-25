import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fedexPoints: {
      type: Number,
      required: true,
      min: 0,
    },
    fedexRank: {
      type: Number,
      required: true,
      min: 0,
    },
    worldRank: {
      type: Number,
      required: true,
      min: 0,
    },
    country: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    height: {
      type: Number,
      required: true,
      min: 0,
    },
    weight: {
      type: Number,
      required: true,
      min: 0,
    },
    tournaments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tournament",
      },
    ],
  },
  { timestamps: true }
);
