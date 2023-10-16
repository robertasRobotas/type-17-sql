const db = require("../db");

const GET_ALL_TASKS = async (req, res) => {
  try {
    const tasks = await db.query("SELECT * from Tasks");
    return res.json({ tasks: tasks.rows });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const GET_TASK_BY_ID = async (req, res) => {
  try {
    const task = await db.query(
      `SELECT * from Tasks WHERE id=${req.params.id} `
    );

    return res.json({ task: task.rows[0] });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const ADD_TASK = async (req, res) => {
  try {
    const task = await db.query(`INSERT INTO public.tasks(
      title, task_status)
      VALUES ('${req.body.title}', ${req.body.task_status})`);

    return res.status(201).json({ response: "Task was added", task });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const UPDATE_TASK = async (req, res) => {
  try {
    const task = await db.query(`UPDATE public.tasks
      SET title = '${req.body.title}', task_status = ${req.body.task_status}
      WHERE id = ${req.params.id}`);

    return res.status(201).json({ response: task, status: "task was updated" });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const DELETE_TASK = async (req, res) => {
  try {
    const task = await db.query(`DELETE from Tasks WHERE id=${req.params.id} `);

    return res.json({ response: task, status: "Task was deleted" });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

module.exports = {
  GET_ALL_TASKS,
  ADD_TASK,
  GET_TASK_BY_ID,
  UPDATE_TASK,
  DELETE_TASK,
};
