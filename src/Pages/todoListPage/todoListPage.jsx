// src/Pages/todo/todoListPage.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, markTaskDone } from "../../redux/actions";
import Card from "../../Components/Card/Card";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const TodoListPage = () => {
  const [newTask, setNewTask] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask(newTask));
      setNewTask("");
    } else {
      console.log("No se agregó la tarea");
    }
  };

  const handleMarkAsDone = (index) => {
    dispatch(markTaskDone(index));
  };

  return (
    <>
      <div className="w-full p-[12px]">
        <div className="w-full flex flex-row justify-center items-baseline">
          <div className="w-[50%] flex flex-row justify-center items-baseline">
            <div className="w-[70%]">
              <Input
                value={newTask}
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
              />
            </div>
            <div className="w-[30%]">
              <Button onClick={handleAddTask}>Agregar Tarea</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[20px] mt-4">
          {tasks.map((task, index) => (
            <Card key={index}>
              <p>{task.text}</p>
              <button
                className={`mt-2 p-2 ${
                  task.status === "Done" ? "bg-gray-400" : "bg-green-400"
                } text-white`}
                onClick={() => handleMarkAsDone(index)}
                disabled={task.status === "Done"}
              >
                {task.status === "Done" ? "Completada" : "Marcar como Completada"}
              </button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoListPage;
