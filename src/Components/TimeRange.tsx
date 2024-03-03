import React, { useState } from "react";
import SelectDay from "./SelectDay";
import SelectWeek from "./SelectWeek";
import SelectCustomDate from "./SelectCustomDate";
import SelectMonthYear from "./SelectMonthYear";
import "./style.css";

const TimeRange = () => {
  const [selectedOption, setSelectedOption] = useState<string>("day");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  const renderDatePicker = () => {
    switch (selectedOption) {
      case "week":
        return <SelectWeek />;
      case "month":
        return <SelectMonthYear />;
      case "custom":
        return <SelectCustomDate />;
      default:
        return <SelectDay />;
    }
  };

  return (
    <div>
      <select
        className="mb-8"
        id="timeInterval"
        name="timeInterval"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="custom">Custom</option>
      </select>
      {renderDatePicker()}
    </div>
  );
};

export default TimeRange;
