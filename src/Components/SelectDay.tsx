import { useState } from "react";
import { DayPicker } from "react-day-picker";

const SelectDay = () => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };
  console.log(selectedDay);

  return <DayPicker selected={selectedDay} onDayClick={handleDayClick} />;
};

export default SelectDay;
