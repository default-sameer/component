import React from "react";
import {
  CalendarBody,
  CalendarDate,
  CalendarDatePagination,
  CalendarDatePicker,
  CalendarHeader,
  CalendarItem,
  CalendarMonthPicker,
  CalendarProvider,
  CalendarYearPicker,
} from "@/components/roadmap-ui/calendar";

const statuses = [
  { id: "1", name: "In Progress", color: "#FFA500" },
  { id: "2", name: "Completed", color: "#00FF00" },
  { id: "3", name: "On Hold", color: "#FF0000" },
  { id: "4", name: "Planned", color: "#0000FF" },
];

const features = [
  {
    id: "101",
    name: "Feature A",
    startAt: new Date("2024-12-10"),
    endAt: new Date("2024-12-13"),
    status: statuses[0],
  },
  {
    id: "102",
    name: "Feature B",
    startAt: new Date("2024-12-10"),
    endAt: new Date("2024-12-13"),
    status: statuses[1],
  },
  {
    id: "103",
    name: "Feature C",
    startAt: new Date("2024-12-10"),
    endAt: new Date("2024-12-13"),
    status: statuses[2],
  },
  {
    id: "104",
    name: "Feature D",
    startAt: new Date("2024-12-10"),
    endAt: new Date("2024-12-13"),
    status: statuses[3],
  },
];

const earliestYear =
  features
    .map((feature) => feature.startAt.getFullYear())
    .sort()
    .at(0) ?? new Date().getFullYear();

const latestYear =
  features
    .map((feature) => feature.endAt.getFullYear())
    .sort()
    .at(-1) ?? new Date().getFullYear();

const Calander = () => {
  return (
    <CalendarProvider>
      <CalendarDate>
        <CalendarDatePicker>
          <CalendarMonthPicker />
          <CalendarYearPicker start={earliestYear} end={latestYear} />
        </CalendarDatePicker>
        <CalendarDatePagination />
      </CalendarDate>
      <CalendarHeader />
      <CalendarBody features={features}>
        {({ feature }) => <CalendarItem key={feature.id} feature={feature} />}
      </CalendarBody>
    </CalendarProvider>
  );
};

export default Calander;
