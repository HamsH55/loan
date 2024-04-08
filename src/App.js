
import './App.css';
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
//import Typography from "@mui/material/Typography";
import LoanForm from './LoanForm';
import { UserContext } from './context/UserContext';

function App() {

  return (
    <UserContext.Provider value={{
      userName:"@HAMS",
      name:"Hams" ,
       email : "Hams@ditech.sa" 
    }}>
    <div className="App"
    style={{
    marginTop: "150px",
    minWidth: 275,
    background: "white",
    color: "white",
  }}>   
        <LoanForm />
    </div>
    </UserContext.Provider>
  );
}

export default App;
