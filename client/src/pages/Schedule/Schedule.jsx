import React from "react";
import Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import PageHeading from "../../components/PageHeading/PageHeading";

const localizer = Calendar.momentLocalizer(moment);

const Schedule = () => (
  <>
    <PageHeading> Schedule </PageHeading>
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
