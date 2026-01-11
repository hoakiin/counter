import "../App.css";

type DisplayPropsType = {
  count: number;
  maxValue: number;
  error: boolean;
  isSetMode: boolean;
};

export const Display = ({ count, maxValue, error, isSetMode }: DisplayPropsType) => {
  if (error) {
    return <div className="display error">Incorrect value!</div>;
  }

  if (isSetMode) {
    return <div className="display setMode">set values and press "set"</div>;
  }

  return (
    <div className={count === maxValue ? "display red" : "display"}>
      {count}
    </div>
  );
};
