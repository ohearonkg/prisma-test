import React from "react";
import Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = Calendar.momentLocalizer(moment);

const Schedule = () => (
  <>
    <h1> Schedule </h1>
    <Calendar
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={[]}
      style={{ height: "100vh" }}
    />
  </>
);

export default Schedule;
