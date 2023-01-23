import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/SecqurAIse_logo.webp";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [userData, setUserData] = useState();

  window.addEventListener("storage", () => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    setUserData(userData);
  });

  function countMale(data) {
    const male = data?.filter((elem) => elem.Gender == "Male");

    return male?.length;
  }

  function countFemale(data) {
    const female = data?.filter((elem) => elem.Gender == "Female");

    return female?.length;
  }

  return (
    <nav className="parent">
      {/* logo */}
      <div className="logo">
        <img className="logo_m" src={logo} alt="" />
      </div>

      {/* search and filter */}
      <div className="search_and_male_female">
        <FaSearch className="search_icon" />
        <div className="male_female">
          <div className="male">{countMale(userData)}</div>
          <div className="female">{countFemale(userData)}</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
