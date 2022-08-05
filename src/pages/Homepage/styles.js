import theme from "../../theme";

const styles = {
  wrapper: {
    background: theme.background,
    height: window.innerHeight,
    width: "100%",
    position: "absolute",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
};

export default styles;
