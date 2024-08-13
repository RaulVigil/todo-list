import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const TodoListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      const newTasks = [...tasks, { text: newTask, status: "In Progress" }];
      setTasks(newTasks);
      setNewTask("");
    } else {
      console.log("No se agregó la tarea");
    }
  };

  const handleMarkAsDone = (index) => {
    console.log("Marking task as done at index:", index);
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: "Done" } : task
    );
    setTasks(updatedTasks);
    console.log("Tasks after marking as done:", updatedTasks);
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
              <Button onClick={addTask}>Add Task</Button>
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
                {task.status === "Done" ? "Done" : "Mark Done"}
              </button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoListPage;
