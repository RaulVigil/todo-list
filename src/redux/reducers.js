// src/redux/reducers.js
import { ADD_TASK, MARK_TASK_DONE } from "./actions";

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload, status: "In Progress" }],
      };
    case MARK_TASK_DONE:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload ? { ...task, status: "Done" } : task
        ),
      };
    default:
      return state;
  }
};
