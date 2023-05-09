import React, { useState } from "react";
import classes from "./Form.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const Form = (props) => {
  const [currentInput, setInput] = useState("");
  const [currentAge, setAge] = useState("");
  const [error , setError] = useState();
  //error

  const inputValueChange = (e) => {
    setInput(e.target.value);
  };

  const ageValueChange = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentInput.trim().length === 0 || currentAge.trim().length === 0) {
        setError({
            title: "Invalid Input",
            message: "Please Enter a valid name and age"
        })
      return;
    }
    if (+currentAge < 1) {
        setError({
            title: "Invalid Age",
            message: "Please Enter a valid Age which is > 0."
        })
      return;
    }

    props.onAddUser(currentInput, currentAge);
    setInput("");
    setAge("");
  };

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter Your User Name"
            value={currentInput}
            onChange={inputValueChange}
          />
          <label>Age (Years)</label>
          <input
            type="number"
            placeholder="Enter Your Age"
            value={currentAge}
            onChange={ageValueChange}
          />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
