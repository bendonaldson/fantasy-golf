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
    country: {
      type: String,
      required: true,
      default: "USA",
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 100,
      default: 18,
    },
    height: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    weight: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
  },
  { timestamps: true }
);
