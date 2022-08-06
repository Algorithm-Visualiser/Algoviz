import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../theme";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import bubbleSort from "../../utils/bubbleSort";
import insertionSort from "../../utils/insertionSort";
import selectionSort from "../../utils/selectionSort";
import { useParams } from "react-router-dom";

function CodePage() {
  let { algorithm } = useParams();
  const [lang, setLang] = React.useState("");
  const [algo, setAlgo] = React.useState(algorithm);
  const [result, setResult] = React.useState();

  const handleChange = (event) => {
    setLang(event.target.value);
    switch (algo) {
      case "Bubble Sort":
        bubbleSort.map((item) => {
          item?.lang === event.target.value ? setResult(item) : console.log();
        });
        break;

      case "Insertion Sort":
        insertionSort.map((item) => {
          item?.lang === event.target.value ? setResult(item) : console.log();
        });
        break;

      case "Selection Sort":
        selectionSort.map((item) => {
          item?.lang === event.target.value ? setResult(item) : console.log();
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Box
        sx={{
          width: 300,
          height: window.innerHeight,
          position: "fixed",
          backgroundColor: theme.lightBackground,
          padding: 2,
        }}
      >
        <Typography variant="h2" color="white">
          {algorithm}
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
            Language
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            label="Language"
            onChange={handleChange}
            sx={{ color: "white" }}
          >
            <MenuItem value={"C++"}>C++</MenuItem>
            <MenuItem value={"Python"}>Python</MenuItem>
            <MenuItem value={"Javascript"}>Javascript</MenuItem>
          </Select>
        </FormControl>
        <Typography
          variant="body1"
          color="white"
          sx={{ whiteSpace: "pre-line", mt: 4 }}
        >
          {result?.info}
        </Typography>
      </Box>
      <div style={{ marginLeft: 400 }}>
        <SyntaxHighlighter
          language={lang.toLowerCase()}
          style={atomOneDark}
          customStyle={{ background: "black" }}
          showLineNumbers
        >
          {result?.code}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default CodePage;
