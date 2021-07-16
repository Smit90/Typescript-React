import * as React from "react";

interface Props {
  initialUserName: string;
  editingName: string;
  onNameUpdated: () => any;
  onEditingNameUpdated: (newEditingName: string) => any;
}

export const NameEditComponent: React.FC<Props> = (props) => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onEditingNameUpdated(event.target.value)
  };

  const onNameSubmit = (event: any): any => {
    props.onNameUpdated();
  };

  return (
    <div className="container">
      <label>Update Name: </label>
      <input placeholder={props.editingName} onChange={onChange} />
      <button
        className="btn btn-primary ml-2"
        type="submit"
        onClick={onNameSubmit}
      >
        Submit
      </button>
    </div>
  );
};
