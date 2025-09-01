const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.render("tasks", { tasks, message: res.locals.message || null });
  } catch (err) {
    console.error(err);
    res.render("tasks", { tasks: [], message: "Error loading tasks." });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { title, description } = req.body;
    await Task.create({ title, description, userId: req.userId });
    req.flash("message", "Task added successfully!");
    res.redirect("/tasks");
  } catch (err) {
    console.error(err);
    req.flash("message", "Error adding task.");
    res.redirect("/tasks");
  }
});

router.post("/delete/:id", async (req, res) => {
  try {
    await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    req.flash("message", "Task deleted successfully!");
    res.redirect("/tasks");
  } catch (err) {
    console.error(err);
    req.flash("message", "Error deleting task.");
    res.redirect("/tasks");
  }
});

router.post("/toggle/:id", async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });
    if (task) {
      const currentStatus = task.status.toLowerCase();
      task.status = currentStatus === "pending" ? "Completed" : "Pending";
      await task.save();
    }
    req.flash("message", "Task status updated!");
    res.redirect("/tasks");
  } catch (err) {
    console.error(err);
    req.flash("message", "Error updating task status.");
    res.redirect("/tasks");
  }
});

router.post("/edit/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { title, description }
    );
    req.flash("message", "Task updated successfully!");
    res.redirect("/tasks");
  } catch (err) {
    console.error(err);
    req.flash("message", "Error updating task.");
    res.redirect("/tasks");
  }
});

module.exports = router;