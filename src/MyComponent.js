import MyInput from "./MyInput";
export default function MyComponent() {
  return (
    <>
    <h1>This is the Header</h1>
<MyInput 
 />
       <h1>This is the Footer</h1>
    </>
  );
}

// export default function MyComponent({ value, handleChange, inputNAme }) {
//   return <>
//   <h1>This is the header of the Component</h1>
//   <lable>{inputName}</lable>
//   <input
//   value={value}
//   onChange={(event)=>{
//     handleChange(event.target.value);
//   }}
//   />
//   <h1>This is the footer of the Component</h1>
//   </>;
// }
