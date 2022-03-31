import React, { useEffect, useState } from "react";
import moment from "moment";
const date = "2022-03-31";

const targetTime = moment(date);
export const CountdownMonths = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>target date: "2022-03-31"</h2>
      <br />
      <p className="counter">
        <span>{timeBetween.years()} Years </span>
        <span>{timeBetween.months()} Months </span>
        <span>{timeBetween.days()} Days </span>
        <span>{timeBetween.hours()} Hours </span>
        <span>{timeBetween.minutes()} Minutes </span>
        <span>{timeBetween.seconds()} Seconds </span>
      </p>
    </>
  );
};
