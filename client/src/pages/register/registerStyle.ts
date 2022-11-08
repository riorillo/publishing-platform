export const formStyle: any = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: { sm: "30px", xs: "0px" },
};
export const containerFormStyle: any = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const paperStyle = {
  height: { sm: 700, xs: "720px" },
  padding: { sm: "20px 30px", xs: "0" },
  width: { sm: 700, xs: 300 },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const boxesContainer = {
  display: "flex",
  justifyContent: "center",
  gap: { sm: "15px", xs: "7px" },
  flexDirection: { sm: "row", xs: "column" },
  marginBottom: { sm: "0px", xs: "10px" },
};
export const firstBoxStyle = {
  display: "flex",
  flexDirection: "column",
  gap: { sm: "15px", xs: "7px" },
};
export const secondBoxStyle = {
  display: "flex",
  flexDirection: "column",
  gap: { sm: "15px", xs: "7px" },
};

export const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 400, xs: 300 },
  bgcolor: "background.paper",
  border: "2px solid #7AC86A",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
