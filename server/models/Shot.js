import mongoose from "mongoose";

const shotSchema = new mongoose.Schema(
  {
    hole: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hole",
      required: true,
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true,
    },
    club: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    result: {
      type: String,
      required: true,
      enum: [
        "fairway",
        "rough",
        "green",
        "bunker",
        "water",
        "out-of-bounds",
        "hole-in-one",
        "albatross",
        "eagle",
        "birdie",
        "par",
        "bogey",
        "double-bogey",
        "other",
      ],
    },
  },
  { timestamps: true }
);

const Shot = mongoose.model("Shot", shotSchema);
export default Shot;
