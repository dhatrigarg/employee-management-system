import React from "react";

const Header = () => {
  return (
    <div className="flex items-end text-white justify-between">
      <h1 className="text-2xl font-medium">
        Hi,
        <br />
        <span className="text-3xl font-semibold">Dhatri👋</span>
      </h1>
      <button className="px-5 py-2 bg-red-600 text-lg font-medium rounded-sm">
        Log Out
      </button>
    </div>
  );
};

export default Header;
