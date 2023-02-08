import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [catFact, setCatFact] = useState("");

  const showCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
        setCatFact(res.data.fact);
      });
  }

  useEffect(() => {
    showCatFact();
  }, []);

  return (
    <div className="App">
      <button onClick={showCatFact} style={{color: "red",}}> Generate Cat Fact </button>
      <p style={{background: "lightGray",height: "200px", width: "250px", margin: "100px auto" ,borderRadius: "5px",}}> {catFact} </p>
    </div>
  );
}

export default App;
