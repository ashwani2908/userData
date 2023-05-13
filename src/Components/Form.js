import React, { useState , useRef } from "react";
import classes from "./Form.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const Form = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  //error
  const [error , setError] = useState();
  /*
  const [currentInput, setInput] = useState("");
  const [currentAge, setAge] = useState("");
  const [currentCollege, setCollege] = useState("");
  **/

  /*
  const inputValueChange = (e) => {
    setInput(e.target.value);
  };

  const ageValueChange = (e) => {
    setAge(e.target.value);
  };

  const collageValueChange = (e) => {
    setCollege(e.target.value);
  }
  */


  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName= nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollege = collegeInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollege.trim().length === 0) {
        setError({
            title: "Invalid Input",
            message: "Please Enter a valid name and age"
        })
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: "Invalid Age",
            message: "Please Enter a valid Age which is > 0."
        })
      return;
    }

    props.onAddUser(enteredName, enteredAge , enteredCollege);
    /*
    setInput("");
    setAge("");
    setCollege("");
    */
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeInputRef.current.value = '';
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
            // value={currentInput}
            // onChange={inputValueChange}
            ref={nameInputRef}
          />
          <label>Age (Years)</label>
          <input
            type="number"
            placeholder="Enter Your Age"
            // value={currentAge}
            // onChange={ageValueChange}
            ref={ageInputRef}
          />
          <label>College Name</label>
          <input
            type="text"
            placeholder="Enter Your College Name"
            // value={currentCollege}
            // onChange={collageValueChange}
            ref={collegeInputRef}
          />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
