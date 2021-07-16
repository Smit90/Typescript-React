import * as React from "react";
import { HelloComponent } from "./Components/Hello";
import { NameEditComponent } from "./Components/NameEdit";
import "./App.css";

export const App = () => {
  const [name, setName] = React.useState("defaultUserName");
  const [edititngName, seteEditingName] = React.useState("defaultUserName");

  const loadUserName = () => {
    setTimeout(() => {
      setName("Only First Name");
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
      <HelloComponent userName={name} />
      <NameEditComponent
        initialUserName={name}
        editingName={edititngName}
        onNameUpdated={setUserNameState}
        onEditingNameUpdated={seteEditingName}
      />
    </>
  );
};
