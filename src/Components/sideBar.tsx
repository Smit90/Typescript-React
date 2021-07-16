import * as React from "react";
// const classname = require("./sidebar.css");
import './sidebar.css'

interface Props {
  isVisible: boolean;
}

const divStyle = (props: Props): React.CSSProperties => ({
  width: props.isVisible ? "23rem" : "0rem",
});

export const SidebarComponent: React.FC<Props> = (props) => (
  <div id="mySidenav" className="sidenav" style={divStyle(props)}>
    {props.children}
  </div>
);
