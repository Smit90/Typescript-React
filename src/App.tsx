import * as React from "react";
import { HelloComponent } from "./Components/Hello";
import { NameEditComponent } from "./Components/NameEdit";
import "./App.css";

export const App = () => {
  const [name, setName] = React.useState("initialName");

  const setUserNameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent userName={name} onChange={setUserNameState} />
    </>
  );
};
