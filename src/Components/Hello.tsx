import * as React from "react";

interface Props {
  userName: string;
}

export const HelloComponent: React.FC<Props> = (props) => {
  return (
    <div className="container">
      <h4>Hello User: {props.userName} !</h4>
    </div>
  );
};
