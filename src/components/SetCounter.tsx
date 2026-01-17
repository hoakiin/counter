import { Button } from "./Button";
import { useState, useEffect } from "react";
import "../App.css";

type Props = {
  onSet: () => void;
  error: boolean;
  setError: (error: boolean) => void;
  setIsSetMode: (isSetMode: boolean) => void;
};

export const SetCounter = ({ onSet, setIsSetMode, error, setError }: Props) => {
  const DEFAULT_MAX_VALUE = 5;
  const DEFAULT_MIN_VALUE = 0;

  let [maxValue, setMaxValue] = useState<number>(
    Number(localStorage.getItem("maxValue")) || DEFAULT_MAX_VALUE
  );
  let [minValue, setMinValue] = useState<number>(
    Number(localStorage.getItem("minValue")) || DEFAULT_MIN_VALUE
  );

  const minError = minValue < 0 || minValue >= maxValue;
  const maxError = maxValue < 1 || maxValue <= minValue;

  useEffect(() => {
    setError(minError || maxError);
  }, [minError, maxError]);

  const setBtnHandler = () => {
    if (error) return;

    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("minValue", JSON.stringify(minValue));

    setIsSetMode(false);
    onSet();
  };

  const hasLeadingZero = (value: string) =>
    value.length > 1 && value.startsWith("0");

  const minValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (hasLeadingZero(value)) {
      setError(true);
      return;
    }
    setMinValue(Number(value));
    setIsSetMode(true);
  };

  const maxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (hasLeadingZero(value)) {
      setError(true);
      return;
    }
    setMaxValue(Number(value));
    setIsSetMode(true);
  };

  return (
    <div className="counter">
      <div className="display setCounter">
        <label>
          max value:
          <input
            className={maxError ? "error" : ""}
            type="number"
            onChange={maxValueHandler}
            value={maxValue}
          />
        </label>
        <label>
          min value:
          <input
            className={minError ? "error" : ""}
            type="number"
            onChange={minValueHandler}
            value={minValue}
          />
        </label>
      </div>
      <div className="buttonsWrapper">
        <Button title={"set"} onClick={setBtnHandler} disabled={error} />
      </div>
    </div>
  );
};
