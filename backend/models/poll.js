const mongoose = require("mongoose");

const PollSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    votes: [
     {
        name: {
          type: String,
          required: true,
        },
        count: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Polls", PollSchema);
