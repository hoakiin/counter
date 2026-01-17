import { useState, useEffect } from "react";
import { Display } from "./Display";
import { Button } from "./Button";

type Props = {
  version: number;
  error: boolean;
  isSetMode: boolean;
};

export const Counter = ({ version, error, isSetMode }: Props) => {
  const minValue = Number(localStorage.getItem("minValue")) || 0;
  const maxValue = Number(localStorage.getItem("maxValue")) || 5;

  const [count, setCount] = useState(minValue);

  useEffect(() => {
    setCount(minValue);
  }, [version]);

  const increaseBtnHandler = () => {
    setCount(count + 1);
  };

  const resetBtnHandler = () => {
    setCount(minValue);
  };

  const isIncreaseDisabled = count === maxValue || isSetMode || error;
  const isResetDisabled = count === 0 || isSetMode || error;

  return (
    <div className="counter">
      <Display
        count={count}
        maxValue={maxValue}
        error={error}
        isSetMode={isSetMode}
      />
      <div className="buttonsWrapper">
        <Button
          title={"+"}
          onClick={increaseBtnHandler}
          disabled={isIncreaseDisabled}
        />
        <Button
          title={"reset"}
          onClick={resetBtnHandler}
          disabled={isResetDisabled}
        />
      </div>
    </div>
  );
};
