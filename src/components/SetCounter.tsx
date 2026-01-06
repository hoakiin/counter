import { Button } from "./Button";
import { useState } from "react";
import "../App.css";

type Props = {
  onSet: () => void;
};

export const SetCounter = ({ onSet }: Props) => {
  let [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem("maxValue")) || 5);
  let [minValue, setMinValue] = useState<number>(Number(localStorage.getItem("minValue")) || 0);

  const setBtnHandler = () => {
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("minValue", JSON.stringify(minValue));
    onSet()
  };

  const maxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value));
  };

  const minValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(e.currentTarget.value));
  };

  return (
    <div className="counter">
      <div className="display setCounter">
        <label>
          max value: <input type="number" onChange={maxValueHandler} value={maxValue} />
        </label>
        <label>
          min value: <input type="number" onChange={minValueHandler} value={minValue} />
        </label>
      </div>
      <div className="buttonsWrapper">
        <Button title={"set"} onClick={setBtnHandler} />
      </div>
    </div>
  );
};
