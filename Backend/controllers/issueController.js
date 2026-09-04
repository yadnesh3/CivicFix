const Issue = require("../models/Issue");

// Create an issue
const createIssue = async (req, res) => {
  try {
    const issue = await Issue.create(req.body);

    res.status(201).json({
      message: "Issue created successfully",
      issue
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create issue",
      error: error.message
    });
  }
};

// Get all issues
const getIssues = async (req, res) => {
  try {
    const issues = await Issue.find();

    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get issues",
      error: error.message
    });
  }
};

// Get one issue
const getIssueById = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found"
      });
    }

    res.status(200).json(issue);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get issue",
      error: error.message
    });
  }
};

// Update an issue
const updateIssue = async (req, res) => {
  try {
    const issue = await Issue.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found"
      });
    }

    res.status(200).json({
      message: "Issue updated successfully",
      issue
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update issue",
      error: error.message
    });
  }
};

// Delete an issue
const deleteIssue = async (req, res) => {
  try {
    const issue = await Issue.findByIdAndDelete(req.params.id);

    if (!issue) {
      return res.status(404).json({
        message: "Issue not found"
      });
    }

    res.status(200).json({
      message: "Issue deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete issue",
      error: error.message
    });
  }
};

module.exports = {
  createIssue,
  getIssues,
  getIssueById,
  updateIssue,
  deleteIssue
};