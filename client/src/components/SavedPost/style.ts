import { theme } from "../../styles/theme";

const LayoutStyle = {
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "0 1rem",
    marginTop: "2rem",
  },
  title: {
    paddingLeft: "2rem",
    paddingBottom: "2rem",
    fontWeight: theme.typography.fontWeightBold,
  },
  tabLabel: {
    display: "flex",
    marginRight: "1rem",
  },
};
export default LayoutStyle;
