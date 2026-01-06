import { useState, useEffect } from "react";
import { Display } from "./Display";
import { Button } from "./Button";

type Props = {
  version: number;
};

export const Counter = ({version}: Props) => {
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

  return (
    <div className="counter">
      <Display count={count} maxValue={maxValue} />
      <div className="buttonsWrapper">
        <Button
          title={"+"}
          onClick={increaseBtnHandler}
          disabled={count === maxValue}
        />
        <Button
          title={"reset"}
          onClick={resetBtnHandler}
          disabled={count === 0}
        />
      </div>
    </div>
  );
};
