import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";
import MyComponent from "./MyComponent";
import { LoanInputContext } from "./context/LoanFormInputContext";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function LoanForm({ title }) {
  const userDate = useContext(UserContext);

  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInput, setLoanInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInput;

    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("The phone Number should be 10 digits ");
    }
    setShowModal(true);
  }
  const btnDisabled =
    loanInput.phoneNumber === "" ||
    loanInput.name === "" ||
    loanInput.age === "";

  //   let btnClasses = "";
  //   if (btnDisabled) {
  //     btnClasses = "disabled";
  //   } else {
  //     btnClasses =""
  //   }

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  function handlePhoneNumberInputChange(value) {
    setLoanInput({ ...loanInput, phoneNumber: value });
  }
  function handleNameInputChange(value) {
    setLoanInput({ ...loanInput, name: value });
  }

  function handleAgeInputChange(value) {
    setLoanInput({ ...loanInput, age: value });
  }
  return (
    <div
      onClick={handleDivClick}
      className="flex"
      //style={{background:"yellow"}}
      style={{ flexDirection: "column" }}
    >
      <h1 style={{ color: "pink" }}>Hello Beautiful {userDate.name}</h1>
      <h1 style={{ color: "black" }}> {title}</h1>
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Loan Form</h1>

        <hr></hr>

        {/* <label>Name :</label>
        <input
          value={loanInput.name}
          onChange={(event) => {
            setLoanInput({ ...loanInput, name: event.target.value });
          }}
        /> */}

        <LoanInputContext.Provider
          value={{
            value: loanInput.name,
            handleChange: handleNameInputChange,
            labelTitle: "name",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        {/* <MyComponent
          inputName="Phone number"
          handleChangeComponent={handlePhoneNumberInputChange}
          valueComponent={loanInput.phoneNumber}
        /> */}

        <LoanInputContext.Provider
          value={{
            value: loanInput.phoneNumber,
            handleChange: handlePhoneNumberInputChange,
            labelTitle: "phoneNumber",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        {/* <MyComponent
          inputName="Age"
          handleChangeComponent={handleAgeInputChange}
          valueComponent={loanInput.age}
        /> */}
        <LoanInputContext.Provider
          value={{
            value: loanInput.age,
            handleChange: handleAgeInputChange,
            labelTitle: "Age",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        {/* <label>Phone Number :</label>
        <input
          value={loanInput.phoneNumber}
          onChange={(event) => {
            setLoanInput({ ...loanInput, phoneNumber: event.target.value });
          }}
        /> */}

        {/* <label>Age : </label>
        <input
          value={loanInput.age}
          onChange={(event) => {
            setLoanInput({ ...loanInput, age: event.target.value });
          }}
        /> */}

        <label style={{ marginTop: "30px" }}> Are you an employee ? </label>
        <input
          type="checkbox"
          checked={loanInput.isEmployee}
          onChange={(event) => {
            setLoanInput({ ...loanInput, isEmployee: event.target.checked });
          }}
        />

        <label>Salary : </label>
        <select
          value={loanInput.salaryRange}
          onChange={(event) => {
            setLoanInput({ ...loanInput, salaryRange: event.target.value });
          }}
        >
          <option>Less than 5000 SR</option>
          <option>Between 5500 - 10000 SR</option>
          <option>Above 10500 SR</option>
        </select>

        <br></br>
        <button
          className={btnDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnDisabled}
          id="submit-loan-btn"
        >
          Submit
        </button>
        <Modal errorMessage={errorMessage} isVisible={showModal} />
      </form>
    </div>
  );
}
