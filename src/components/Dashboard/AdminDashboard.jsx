import React from "react";
import Header from "../Other/Header";
import Createtask from "../Other/Createtask";
import AllTask from "../Other/AllTask";

const AdminDashboard = (props) => {
  console.log(props);
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen w-full">
      <Header changeUser={props.changeUser} />
      <Createtask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
