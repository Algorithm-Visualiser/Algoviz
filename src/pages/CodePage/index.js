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

function CodePage() {
  const [lang, setLang] = React.useState();
  const [algo, setAlgo] = React.useState("BubbleSort");
  const [result, setResult] = React.useState();

  const handleChange = (event) => {
    setLang(event.target.value);
    switch (algo) {
      case "BubbleSort":
        console.log(lang);
        bubbleSort.map((item) => {
          item?.lang === event.target.value ? setResult(item) : setResult(null);
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
          position: "absolute",
          backgroundColor: theme.lightBackground,
          padding: 2,
        }}
      >
        <FormControl fullWidth>
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
            <MenuItem value={10}>C++</MenuItem>
            <MenuItem value={20}>Python</MenuItem>
            <MenuItem value={30}>Javascript</MenuItem>
          </Select>
        </FormControl>
        <Typography
          variant="body1"
          color="white"
          sx={{ whiteSpace: "pre-line", mt: 8 }}
        >
          {result?.info}
        </Typography>
      </Box>
      <div style={{ marginLeft: 400 }}>
        <SyntaxHighlighter
          language="javascript"
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
