import { SxProps } from "@mui/system";

interface Style {
  flex: SxProps;
  hoverStyle: SxProps;
  cardContainer: SxProps;
  userName_imageContainer: SxProps;
  userImage: SxProps;
  title_descr_container: SxProps;
  CardImage: SxProps;
  CardFooter: {
    layout: SxProps;
    details: SxProps;
  };
  FooterContainer: SxProps;
  FooterIcons: {
    layout: SxProps;
    details: SxProps;
  };
}

export const styles: Style = {
  flex: { display: "flex" },
  hoverStyle: {
    position: "absolute",
    top: { sm: -25, xs: -13 },
    right: 0,
    left: -10,
    p: 1,
    zIndex: 1,
    bgcolor: "background.paper",
    whiteSpace: "nowrap",
  },
  cardContainer: { maxWidth: { sm: 700, xs: "95%" }, margin: "auto", marginBottom : "20px" },
  userName_imageContainer: {
    display: "flex",
    gap: 1,
    paddingLeft: "16px",
    paddingTop: "10px",
    alignItems: "center",
    paddingBottom: "5px",
  },
  userImage: { width: "24px", borderRadius: "50%" },
  title_descr_container: { width: "70%" },
  CardImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  CardFooter: {
    layout: { display: "flex", alignItems: "center", gap: 1 },
    details: {
      pt: 0.3,
      pb: 0.3,
      pl: 1,
      pr: 1,
      backgroundColor: "lightgrey",
      borderRadius: "20px",
    },
  },
  FooterContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pl: "16px",
  },
  FooterIcons: {
    layout: { display: "flex", gap: 2, p: 1.5, position: "relative" },
    details: {
      mr: 1,
      cursor: "pointer",
    },
  },
};
