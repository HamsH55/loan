
import { useContext } from "react";
import { LoanInputContext } from "./context/LoanFormInputContext";


export default function MyInput({ value, handleChange, inputName }){

    const inputContext = useContext(LoanInputContext);
    
    console.log("The context from myInput.js is ")
    console.log(inputContext)
    return (
        <>
        <label>{inputName}</label>
        <input 
        value ={inputContext.value}
        onChange={(event) => {
            inputContext.handleChange(event.target.value);
        }}
        />
        </>
    );
}