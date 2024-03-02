import { useState } from "react";
import { DayPicker } from "react-day-picker";

const SelectWeek = () => {
  const [selectedRange, setSelectedRange] = useState<Date[] | undefined>(
    undefined
  );

  const handleDayClick = (day: Date) => {
    const weekStart = new Date(day);
    weekStart.setDate(day.getDate() - day.getDay());

    const weekEnd = new Date(day);
    weekEnd.setDate(day.getDate() - day.getDay() + 6);

    const newRange = [weekStart, weekEnd];

    setSelectedRange(newRange);
  };

  console.log(selectedRange);

  return <DayPicker selected={selectedRange} onDayClick={handleDayClick} />;
};

export default SelectWeek;
