import { Box, Typography } from "@mui/material";
// icon
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

const Loading = () => {
  return (
    <Box component="div" display="flex" justifyContent="center" mt={5}>
      <Typography variant="h3">
        <HourglassTopIcon sx={{ fontSize: "45px", color: "#252a62" }} />
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
