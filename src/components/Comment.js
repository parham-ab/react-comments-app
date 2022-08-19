import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
// icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.date}
        </Typography>
        <Box component="div" display="flex" alignItems="center">
          <Avatar sx={{ width: 35, height: 35, margin: "0 10px 0 0" }}>
            <AccountCircleIcon sx={{ fontSize: "37px" }} />
          </Avatar>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
        </Box>
        <Typography variant="caption" color="text.secondary" component="p">
          {email}
        </Typography>
        <Divider />
        <Typography variant="body2">{comment}</Typography>
      </CardContent>
      <CardActions>
        <IconButton
          size="small"
          color="error"
          variant="contained"
          onClick={() => deleteHandle(index)}
        >
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Comment;
