import React from "react";
import Events_list_item from "../events_list_item/Events_list_item";
import "./events.css";

function Events({ data }) {
  return (
    <aside className="events">
      {/* heading */}
      <h3>Events</h3>
      <div className="events">
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
