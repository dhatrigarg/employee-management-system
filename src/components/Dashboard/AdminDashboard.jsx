import React from "react";
import Header from "../Other/Header";
import Createtask from "../Other/Createtask";
import AllTask from "../Other/AllTask";

const AdminDashboard = ({data}) => {
  return (
    <div className="p-10 bg-black h-screen w-full">
      <Header />
      <Createtask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
