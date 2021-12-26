import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // const nameInputRef = useRef();
  // const [isEnterNameValid, setIsEnteredName] = useState(false);
  const [isEnterNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormValidity] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && isEnterNameTouched;
  let formIsValid = false;
  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormValidity(true);
  //   } else {
  //     setFormValidity(false);
  //   }
  // }, [enteredNameIsValid]);

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   if (isEnterNameValid) {
  //     console.log("Input is valid");
  //   }
  // }, [isEnterNameValid]);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // if (enteredName != "") {
    //   setIsEnteredName(true);
    // }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    // if (enteredName === "") {
    //   setIsEnteredName(false);
    //   return;
    // }
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);

    // if (enteredName === "") {
    //   setIsEnteredName(false);
    //   return;
    // }
    console.log(enteredName);
  };
  const nameInputClasses = enteredNameIsValid
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text"> Field must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
