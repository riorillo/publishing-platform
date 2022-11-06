const flexColumn = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const LeftSidebarStyle = {
  container: {
    ...flexColumn,
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    ...flexColumn,
    gap: "40px",
    justifyContent: "center",
  },
  icon: {
    fill: 'black',
  }
};

export default LeftSidebarStyle;
