import Typography from "@mui/material/Typography";

const CustomError = ({ children }) => {
  return (
    <div>
      <Typography
        variant="caption"
        color="initial"
        sx={{ color: "#e75353", fontSize: "14px" }}
      >
        {children}
      </Typography>
    </div>
  );
};
export default CustomError;