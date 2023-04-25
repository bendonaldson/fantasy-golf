import mongoose from "mongoose";

const statisticSchema = new mongoose.Schema(
  {
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true,
    },
    tournament: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    albatrosses: {
      type: Number,
      required: true,
    },
    eagles: {
      type: Number,
      required: true,
    },
    birdies: {
      type: Number,
      required: true,
    },
    pars: {
      type: Number,
      required: true,
    },
    bogeys: {
      type: Number,
      required: true,
    },
    doubleBogeys: {
      type: Number,
      required: true,
    },
    others: {
      type: Number,
      required: true,
    },
    fairwaysHit: {
      type: Number,
      required: true,
    },
    greensInRegulation: {
      type: Number,
      required: true,
    },
    putts: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Statistic = mongoose.model("Statistic", statisticSchema);
export default Statistic;
