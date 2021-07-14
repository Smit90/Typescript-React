import * as React from "react";
import { HelloComponent } from "./Components/Hello";
import { NameEditComponent } from "./Components/NameEdit";
import "./App.css";

export const App = () => {
  const [name, setName] = React.useState("defaultName");

  const setUserNameState = (newName: string) => {
    setName(newName);
  };

  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent initialUserName={name} onNameUpdated={setUserNameState} />
    </>
  );
};
