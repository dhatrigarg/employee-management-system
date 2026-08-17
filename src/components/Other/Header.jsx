import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }
  return (
    <div className="px-6 flex items-end text-white justify-between">
      <h1 className="text-2xl font-medium">
        Hi,
        <br />
        <span className="text-3xl font-semibold">Dhatri👋</span>
      </h1>
      <button onClick={logOutUser} className="px-5 py-2 bg-red-600 text-lg font-medium rounded-sm">
        Log Out
      </button>
    </div>
  );
};

export default Header;
