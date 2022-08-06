import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Index({ index, title, desc }) {
  return (
    <Link to={`/code/${title}`}>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 1 + index }}
      >
        <Card style={styles.wrapper}>
          <CardContent>
            <Typography style={styles.title} gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" component="div" style={styles.content}>
              {desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/visualiser/${title}`}>
              <Button size="small">Visualise</Button>
            </Link>
          </CardActions>
        </Card>
      </motion.div>
    </Link>
  );
}

export default Index;
