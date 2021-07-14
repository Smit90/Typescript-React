import * as React from "react";

interface Props {
  initialUserName: string;
  onNameUpdated: (newName: string) => any;
}

export const NameEditComponent: React.FC<Props> = (props) => {
  const [editingName, setEditingName] = React.useState(props.initialUserName);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingName(event.target.value);
  };

  const onNameSubmit = (event: any): any => {
    props.onNameUpdated(editingName);
  };

  return (
    <>
      <label>Update Name: </label>
      <input value={editingName} onChange={onChange} />
      <button type="submit" onClick={onNameSubmit}>
        Submit
      </button>
    </>
  );
};
