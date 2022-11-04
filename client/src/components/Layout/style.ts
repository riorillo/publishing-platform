const sticky = {
  height: "100vh",
  position: "sticky",
  top: 0,
};

const LayoutStyle = {
  navbar: {
    ...sticky,
    borderRight: "0.5px solid lightgrey",
    pt: 4,
    pb: 4,
    width: { sm: "200px" },
    maxWidth: { sm: "none", xs : "none" },
    flexDirection : {sm : "column", xs : "row"}
  },
  sidebar: {
    ...sticky,
    borderLeft: "0.5px solid lightgrey",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    maxWidth: "1500px",
    ["@media (min-width: 1200px)"]: { maxWidth: "1500px" },
  },
  gridContainer: {
    minHeight: "100%",
    maxWidth: "1500px",
    flexDirection: { sm : "row", xs: "column-reverse" },
  },
  leftbarXS: {
    position: "sticky",
    bottom: 0,
    maxWidth: 0,
  },
};
export default LayoutStyle;
