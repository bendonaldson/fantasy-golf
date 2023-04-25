import mongoose from "mongoose";

const TournamentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    rounds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Round",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Tournament = mongoose.model("Tournament", TournamentSchema);
export default Tournament;
