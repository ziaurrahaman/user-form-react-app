import { useState } from "react";

const UserInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = enteredName.trim() !== "";
  const hasError = !enteredNameIsValid && isEnterNameTouched;
};
export default UserInput;
