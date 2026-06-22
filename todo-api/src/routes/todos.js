const express = require("express");
const pool = require("../db/db");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const { title, completed } = req.body;

    await pool.query(
      "INSERT INTO todos(title,completed,user_id) VALUES($1,$2,$3)",
      [title, completed, req.user.id]
    );

    res.json({
      message: "Todo Created",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_id=$1",
      [req.user.id]
    );

    res.json(todos.rows);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const { title, completed } = req.body;

    await pool.query(
      "UPDATE todos SET title=$1,completed=$2 WHERE id=$3",
      [title, completed, req.params.id]
    );

    res.json({
      message: "Todo Updated",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM todos WHERE id=$1",
      [req.params.id]
    );

    res.json({
      message: "Todo Deleted",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;
