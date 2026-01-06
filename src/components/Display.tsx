import "../App.css"

type DisplayPropsType = {
  count: number;
  maxValue: number;
};

export const Display = (props: DisplayPropsType) => {
  return (
    <div className={props.count === props.maxValue ? "display red" : "display"}>
      {props.count}
    </div>
  );
};
