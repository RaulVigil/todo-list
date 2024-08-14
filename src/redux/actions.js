// src/redux/actions.js
export const ADD_TASK = "ADD_TASK";
export const MARK_TASK_DONE = "MARK_TASK_DONE";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const markTaskDone = (index) => ({
  type: MARK_TASK_DONE,
  payload: index,
});
