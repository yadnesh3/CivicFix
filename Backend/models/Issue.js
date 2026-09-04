const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    location: {
      type: String,
      required: true,
      trim: true
    },

    image: {
      type: String,
      required: false
    },

    status: {
      type: String,
      enum: [
        "Reported",
        "Under Review",
        "Assigned",
        "In Progress",
        "Resolved",
        "Rejected"
      ],
      default: "Reported"
    },

    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    assignedDepartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Issue", issueSchema);