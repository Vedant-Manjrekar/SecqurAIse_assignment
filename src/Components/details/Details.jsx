import React, { useState } from "react";
import "./details.css";
import { RxCross2 } from "react-icons/rx";
import { BiLogIn } from "react-icons/bi";

function Details() {
  // state for storing user data.
  const [data, setData] = useState();

  // state to flag opening and closing of filter (drawer).
  const [showFilter, setShowFilter] = useState(false);

  // listening for change in storage.
  window.addEventListener("storage", () => {
    setData(JSON.parse(localStorage.getItem("selected_user")));
  });

  // function to convert numeric date to alpha numeric.
  function dateToWords(date) {
    if (date) {
      const data = date?.split("-");
      data[1] = "January";
      data[2] = "2023";
      return `${data[0]}th ${data[1]}, ${data[2]}`;
    }
  }

  // function to change format of date.
  function reverseFormat(date) {
    const reversed = date.split("-");
    return `${reversed[2].slice(1)}-Jan-${reversed[0].slice(2)}`;
  }

  // function to filter data.
  function filterData() {
    console.log("filter");
    const user_data = JSON.parse(localStorage.getItem("user_data"));
    const selected_gender = document.querySelector("#gender-select");
    const selected_location = document.getElementById("location");
    const selected_date = document.getElementById("date");

    const filtered_data = user_data.filter(
      (elem) =>
        elem.Gender == selected_gender.value &&
        elem.Date === reverseFormat(selected_date.value) &&
        elem.Location == selected_location.value
    );
    console.log(filtered_data);
  }

  // function to open filter.
  function openDrawer() {
    setShowFilter(true);
  }

  // style for drawer.
  const drawerStyles = {
    left: showFilter ? "0" : "-20rem",
  };

  // style for overlay.
  const overlayStyles = {
    visibility: showFilter ? "visible" : "hidden",
  };

  return (
    <div className="details">
      {/* overlay */}
      <div className="overlay" style={overlayStyles}>
        {/* filter drawer */}
        <div className="drawer" style={drawerStyles}>
          <RxCross2 className="cross" onClick={() => setShowFilter(false)} />

          {/* Title */}
          <h2>Filter</h2>

          {/* Location */}
          <div className="grp">
            <p>Location:</p>
            <input type="text" id="location" placeholder="Enter location" />
          </div>

          {/* Gender */}
          <div className="grp">
            <label for="gender-select">Gender:</label>

            <select name="gender" id="gender-select">
              <option value="">Select one</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          {/* Date */}
          <div className="grp">
            <p>Date:</p>
            <input
              type="date"
              max="12-12-3000"
              name=""
              id="date"
              placeholder="Enter date"
            />
          </div>

          {/* Filter Button */}
          <button onClick={filterData} className="filter">
            Filter
          </button>
        </div>
      </div>

      {/* filter navbar */}
      <nav className="filter_nav">
        {/* sandwich button */}
        <div className="sandwich" onClick={openDrawer}>
          <div className="sandwich_sticks"></div>
          <div className="sandwich_sticks"></div>
          <div className="sandwich_sticks"></div>
        </div>

        {/* login button */}
        <div className="login">
          <BiLogIn color="white" size="1.5rem" />
        </div>
      </nav>

      {/* user details */}
      <form className="user_details">
        <div className="personal_details">
          {data ? (
            <>
              {/* id */}
              <div className="id">{`${data?.id}`} </div>
              <div className="id">Person Detected</div>
              {/* name */}
              <p>Name: {`${data?.name || ""}`}</p>
              {/* location */}
              <p>Location: {`${data?.location || ""}`}</p>
              {/* date */}
              <p>Date: {`${data?.date || ""}`}</p>
              {/* time */}
              <p>Time: {`${data?.time || ""}`}</p>
              {/* description */}
              <p>
                Description:{" "}
                {`${data?.gender} detected at ${
                  data?.location
                } on ${dateToWords(data?.date)}`}
              </p>{" "}
            </>
          ) : (
            ""
          )}
        </div>
      </form>

      {/* title and image */}
      <div className="title_and_image">
        {/* Title */}
        <h3>{`${data?.gender || ""}`}</h3>

        {/* Image */}
        {data ? (
          <img
            src={`/Images/${data?.name}.jpg`}
            alt="User Image"
            className="image"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Details;
