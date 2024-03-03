import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";

const SelectWeek = () => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(
    undefined
  );

  const handleDayClick = (day: Date) => {
    const weekStart = new Date(day);
    weekStart.setDate(day.getDate() - day.getDay() + 1);

    const weekEnd = new Date(day);
    weekEnd.setDate(day.getDate() - day.getDay() + 7);

    const newRange = { from: weekStart, to: weekEnd };

    setSelectedRange(newRange);
  };

  console.log(selectedRange);

  return <DayPicker selected={selectedRange} onDayClick={handleDayClick} />;
};

export default SelectWeek;
