import React, {useState} from "react";
import './App.css';
import Contacts from './Contacts';

function App() { 

  // const nameArray = React.useState("Buba Conteh");

  // const name = nameArray[0];
  // const nameUpdater = nameArray[1];

  const [name, setName] = useState("Buba Conteh");

  const changeNameHandler = () => {

    if (name === "Buba Conteh") {
      setName("Omar Jasseh");
    } else {
      setName("Buba Conteh");
    }

  }
  return (
    <div className="App">
      <h1>Week 1 - Working with States & Forms in React</h1>

      {/* <div>
        <h2>My name is <span>{name}</span></h2>

        <button onClick={changeNameHandler}>Change Name</button>
      </div> */}

      <Contacts />
    </div>
  );
}

export default App;
