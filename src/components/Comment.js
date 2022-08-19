import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
// icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MarkunreadIcon from "@mui/icons-material/Markunread";

const Comment = ({ data, deleteHandle, index }) => {
  const { name, email, comment } = data.values;

  return (
    <Card
      sx={{
        minWidth: 275,
        my: 5,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <CardContent sx={{ backgroundColor: "#dbeafe" }}>
        <Box
          component="div"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography sx={{ fontSize: 12 }} color="text.secondary">
            {data.date}
          </Typography>
          <IconButton
            size="small"
            color="error"
            variant="contained"
            onClick={() => deleteHandle(index)}
          >
            <HighlightOffIcon sx={{ fontSize: "23px" }} />
          </IconButton>
        </Box>
        <Box component="div" display="flex" alignItems="center">
          <AccountCircleIcon
            sx={{ fontSize: "37px", margin: "0 10px 0 0", color: "#241234" }}
          />
          <Typography variant="h6" component="p" noWrap>
            {name}
          </Typography>
        </Box>
        <Box
          component="div"
          display="flex"
          alignItems="center"
          sx={{ ml: "5px" }}
        >
          <MarkunreadIcon
            sx={{ fontSize: "20px", color: "text.secondary", m: "5px 3px" }}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            component="p"
            noWrap
          >
            {email}
          </Typography>
        </Box>
        <Divider />
        <Typography variant="body2">{comment}</Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
