import * as React from "react";
import {
  HelloComponent,
  NameEditComponent,
  ColorBrowser,
  ColorPicker,
} from "./Components";
import "./App.css";
import { Color } from "./Model/color";

export const App = () => {
  const [name, setName] = React.useState("Smit Patel");
  const [edititngName, seteEditingName] = React.useState("Smit Patel");
  const [color, setColor] = React.useState<Color>({
    red: 20,
    green: 40,
    blue: 180,
  });

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
    <>
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
    </>
  );
};
