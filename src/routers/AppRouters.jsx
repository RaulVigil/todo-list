import React from "react";
import TodoListPage  from "../Pages/todoListPage/todoListPage"
import { Routes, Route, Navigate } from "react-router-dom";
// import RouterUser from "./RouterUser";


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<TodoListPage />} />
        {/* <Route path="/user/*" index element={<RouterUser />} /> */}
      </Routes>
    </>
  );
};
export default AppRouter;
