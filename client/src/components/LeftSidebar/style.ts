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
    fill: "black",
  },
  logout: {
    cursor: "pointer",
    px: 2.5,
    py: 1.25,
    transition: "all .3s ease-in-out",
    "&:hover": {
      backgroundColor: "#7AC86A",
      color: "white"
    }
  },
};

export default LeftSidebarStyle;
