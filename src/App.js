import './App.css';
import Axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios
      .get(`https://api.agify.io/?name=${name}`)
      .then((response) => {
        setPredictedAge(response.data);
      });
  };

  return (
    <div className="App">
      <input 
      placeholder='enter name'
      onChange={(event) => {
        setName(event.target.value);
      }}
      />
      <button 
      onClick={fetchData}
      >Predict Age
      </button>

      <h1>name: {predictedAge?.name} </h1>
      <h1>predicted age: {predictedAge?.age} </h1>
      <h1>count: {predictedAge?.count} </h1>
    </div>
  );
}

export default App;
