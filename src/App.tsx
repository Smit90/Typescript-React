import * as React from "react";
import {
  HelloComponent,
  NameEditComponent,
  ColorBrowser,
  ColorPicker,
  SidebarComponent,
} from "./Components";
import "./App.css";
import "./Components/sidebar.css";
import { Color } from "./Model/color";

export const App = () => {
  const [name, setName] = React.useState("Smit Patel");
  const [edititngName, seteEditingName] = React.useState("Smit Patel");
  const [color, setColor] = React.useState<Color>({
    red: 20,
    green: 40,
    blue: 180,
  });
  const [isVisible, setIsVisible] = React.useState(false);

  const loadUserName = () => {
    setTimeout(() => {
      setName("Enter Your Name");
      seteEditingName("Enter Your Name");
    }, 500);
  };

  React.useEffect(() => {
    loadUserName();
  }, []);

  const setUserNameState = () => {
    setName(edititngName);
  };

  return (
    <div className="container align-center">
      <div style={{ float: "right" }}>
        <button
          className="btn btn-outline-primary"
          onClick={() => setIsVisible(!isVisible)}
        >
          Toggle Sidebar
        </button>
      </div>
      <SidebarComponent isVisible={isVisible}>
        <h1>Cool Scfi movies</h1>
        <button className="btn btn-danger closebtn" onClick={() => setIsVisible(!isVisible)}>
          X
        </button>
        <ul>
          <li>
            <a href="https://www.imdb.com/title/tt0816692/">Interstellar</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0062622/">
              2001: a space odyssey
            </a>
          </li>
        </ul>
      </SidebarComponent>
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
      <HelloComponent userName={name} />
      <NameEditComponent
        initialUserName={name}
        editingName={edititngName}
        onNameUpdated={setUserNameState}
        onEditingNameUpdated={seteEditingName}
        disabled={edititngName === "" || edititngName === name}
      />
    </div>
  );
};
