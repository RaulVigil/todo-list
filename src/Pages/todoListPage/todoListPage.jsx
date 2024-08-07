import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const TodoListPage = () => {
  return (
    <>
      <div className=" w-full p-[12px] ">
        <div className="w-full flex flex-row justify-center items-baseline">
          <div className="w-[50%] flex flex-row justify-center items-baseline">
            <div className="w-[70%]">
              <Input />
            </div>
            <div className="w-[30%]">
              <Button />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[20px]">
          <Card>
            <p>asas</p>
          </Card>
          <Card>
            <p>asas</p>
          </Card>
          <Card>
            <p>asas</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TodoListPage;
