
import './App.css';
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
//import Typography from "@mui/material/Typography";
import LoanForm from './LoanForm';
import { UserContext } from './context/UserContext';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typography from '@mui/material/Typography';

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AnotherPage from './AnotherPage';
import { createTheme , ThemeProvider } from "@mui/material/styles";

const theme = createTheme ({

typography:{
  fontFamily:["Rubik"]
}

})

function App() {

  return (
    // <ThemeProvider theme={theme}>

    
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
        {/* <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography> */}

        <Router>
  <Routes>

<Route path='/AnotherPage' element ={<AnotherPage/>}>

</Route>
  </Routes>
</Router>

    </div>
    </UserContext.Provider>

  );
}

export default App;
