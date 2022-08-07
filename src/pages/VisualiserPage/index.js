import React from "react";
import NavBar from "../../components/NavBar.js";
import Visualiser from "../../components/Visualiser.js";
import Sliders from "../../components/Sliders.js";
import { Box, Button, Typography, Slider } from "@mui/material";
import theme from "../../theme.js";
import { useParams } from "react-router-dom";

function VisualiserPage() {
  let { algorithm } = useParams();
  var [array, setArray] = React.useState([0]);
  var [run, setRun] = React.useState(false);
  var [speed, setSpeed] = React.useState("25");
  var [size, setSize] = React.useState("50");

  function getRandomInt(num) {
    return Math.floor(Math.random() * num);
  }
  function newArray() {
    var newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push(getRandomInt(100));
    }
    setArray(newArray);
  }
  function onSetSpeed(event) {
    setSpeed(event.target.value);
  }
  function onSetSize(event) {
    setSize(event.target.value);
  }

  return (
    <>
      <div>
        <Visualiser
          array={array}
          algorithm={algorithm}
          speed={speed}
          size={size}
          run={run}
        />
      </div>
      <Box
        sx={{
          width: window.innerWidth,
          height: window.innerHeight / 2.5,
          position: "absolute",
          backgroundColor: theme.lightBackground,
          padding: 2,
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Typography variant="h2" color="white">
            {algorithm}
          </Typography>
          <Typography variant="h4" color="white">
            <p className="operationCount">Operation Count: -</p>
          </Typography>
        </div>
        <div>
          <Typography variant="h4" color="white">
            Speed
          </Typography>
          <Slider
            value={speed}
            onChange={onSetSpeed}
            min={5}
            max={50}
            step={5}
          />
          <Typography variant="h4" color="white">
            Size
          </Typography>
          <Slider value={size} onChange={onSetSize} min={5} max={80} step={5} />
        </div>
        <div>
          <Button size="large" variant="outlined" onClick={() => newArray()}>
            Generate Array
          </Button>
          <Button size="large" variant="outlined" onClick={() => setRun(true)}>
            Visualize
          </Button>
        </div>
      </Box>
    </>
  );
}

export default VisualiserPage;
