import React, { useState } from "react";

const TimeRange = () => {
  const [selectedOption, setSelectedOption] = useState<string>("day");

  const renderDatePicker = () => {
    switch (selectedOption) {
      case "week":
        return "week";
      case "month":
        return;
      case "year":
        return;
      case "custom":
        return;

      default:
        return "day";
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      <div>
        <label htmlFor="timeInterval">Select an option:</label>
        <select
          id="timeInterval"
          name="timeInterval"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      {renderDatePicker()}
    </div>
  );
};

export default TimeRange;
