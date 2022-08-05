import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../animation/TextReveal";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material";
import Card from "../../components/Card";
import styles from "./styles";
import algorithms from "../../utils/alogithms";
import theme from "../../theme";

export default function App() {
  const placeholderText = [
    { type: "heading1", text: "WELCOME!" },
    {
      type: "heading2",
      text: "Visualise Famous Algorithms using ALGOVIZ",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div style={styles.wrapper}>
        <Container fixed>
          <motion.div
            className="App"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.025,
                },
              },
            }}
          >
            <div className="container">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>
          <div style={styles.card}>
            {algorithms.map((item, index) => (
              <Card index={index + 1} title={item.title} desc={item.desc} />
            ))}
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}
