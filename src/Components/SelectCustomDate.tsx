import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";

const SelectCustomDate = () => {
  const [range, setRange] = useState<DateRange | undefined>();

  console.log(range);

  return (
    <DayPicker
      mode="range"
      onSelect={(range?: any) => {
        setRange(range);
      }}
      selected={range}
    />
  );
};

export default SelectCustomDate;
