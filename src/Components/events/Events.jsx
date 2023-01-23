import React from "react";
import Events_list_item from "../events_list_item/Events_list_item";
import "./events.css";
import { AiOutlineControl } from "react-icons/ai";

function Events({ data }) {
  return (
    <aside className="events">
      {/* heading */}
      <div className="head">
        <h3>Events</h3>
        <AiOutlineControl size="1.2rem" />
      </div>

      {/* events section */}
      <div className="event">
        {/* adding event list items dynamically. */}
        {data?.map((list_item) => (
          <Events_list_item
            key={list_item.ID}
            id={list_item.ID}
            gender={list_item.Gender}
            date={list_item.Date}
            location={list_item.Location}
            name={list_item.Name}
            time={list_item.Time}
          />
        ))}
      </div>
    </aside>
  );
}

export default Events;
