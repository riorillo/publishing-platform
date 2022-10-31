import { customTheme } from "../../styles/theme";

const LayoutStyle = {
  externalBox:{
    width: "100%"
  },
  box: {
    maxWidth: "700px",
    ["@media (max-width: 900px)"]: { maxWidth: "95%" },
    width: "100%",
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
  tabList:{
    width: "100%",
  },
  tabLabel: {
    display: "flex",
    marginRight: "1rem",
    textAlign: "left"
  },
  tabPanel:{
    paddingLeft: "0",
    paddingRight: "0"
  },
  li:{
    listStyleType: "none"
  }
};
export default LayoutStyle;
