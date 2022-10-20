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
  gridContainer: { minHeight: "100%", maxWidth: "1500px" },
};
export default LayoutStyle;
