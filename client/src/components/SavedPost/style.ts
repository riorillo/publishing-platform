import { customTheme } from "../../styles/theme";

const LayoutStyle = {
  box: {
    width: "100%",
    maxWidth: "700px",
    display: "flex",
    margin: "auto",
    flexDirection: "column",
    padding: "0 1rem",
    marginTop: "2rem",
    alignItems: "center"
  },
  title: {
    alignSelf: "start",
    paddingBottom: "2rem",
    fontWeight: "600",
    letterSpacing: "0",
    fontSize: customTheme.sizes.large
  },
  tabLabel: {
    display: "flex",
    marginRight: "1rem",
    textAlign: "left"
  },
  li:{
    listStyleType: "none"
  }
};
export default LayoutStyle;
