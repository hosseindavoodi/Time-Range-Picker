import React, { useState } from "react";

const SelectMonthYear = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(event.target.value, 10);
    setSelectedDate(new Date(selectedDate.getFullYear(), newMonth - 1, 1));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(event.target.value, 10);
    setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
  };

  const renderMonthOptions = () => {
    const months = Array.from({ length: 12 }, (_, i) => i);
    return months.map((month) => (
      <option key={month + 1} value={month + 1}>
        {new Date(0, month).toLocaleString(undefined, { month: "long" })}
      </option>
    ));
  };

  const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 2 }, (_, i) => currentYear - i);
    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };

  console.log(selectedDate.getFullYear() + " - " + selectedDate.getMonth());

  return (
    <div>
      <select value={selectedDate.getFullYear()} onChange={handleYearChange}>
        {renderYearOptions()}
      </select>
      <select value={selectedDate.getMonth()} onChange={handleMonthChange}>
        {renderMonthOptions()}
      </select>
    </div>
  );
};

export default SelectMonthYear;
