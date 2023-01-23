import React from "react";
import "./event_list.css";

function Events_list_item({ id, location, date, time, gender, name }) {
  function send_selected_data() {
    localStorage.setItem(
      "selected_user",
      JSON.stringify({ id, location, date, time, gender, name })
    );
    const event = new Event("storage");
    dispatchEvent(event);

    const li = document.querySelectorAll("li");
    li.forEach(
      (elem) => (
        (elem.style.backgroundColor = "#d9d9d9"), (elem.style.color = "black")
      )
    );

    document.getElementById(`list_${id.slice(5, 7)}`).style.backgroundColor =
      "#7f7f7f";
    document.getElementById(`list_${id.slice(5, 7)}`).style.color = "white";
  }

  return (
    <li
      className="events_list"
      id={`list_${id.slice(5, 7)}`}
      onClick={send_selected_data}
    >
      {/* id */}
      <p>{`${id}: ${location}`}</p>
      {/* date and time */}
      <p className="date_time">{`${date} ${time}`}</p>
      {/* person detected */}
      <p>Person detected.</p>
    </li>
  );
}

export default Events_list_item;
