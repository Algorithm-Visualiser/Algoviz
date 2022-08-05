import React from "react";
import NavBar from "../../components/NavBar.js";
import Visualiser from "../../components/Visualiser.js";
import Sliders from "../../components/Sliders.js";

function VisualiserPage() {
  var [array, setArray] = React.useState([0]);
  var [algorithm, setAlgorithm] = React.useState("Bubble-Sort");
  var [speed, setSpeed] = React.useState("25");
  var [size, setSize] = React.useState("50");

  return (
    <div className="App">
      <NavBar size={size} setArray={setArray} setAlgorithm={setAlgorithm} />

      <br></br>
      <div>
        <Visualiser
          array={array}
          algorithm={algorithm}
          speed={speed}
          size={size}
        />
        <Sliders
          speed={speed}
          setSpeed={setSpeed}
          size={size}
          setSize={setSize}
        />
      </div>
    </div>
  );
}

export default VisualiserPage;
