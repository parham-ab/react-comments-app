import React from "react";
// mui
import { Button, TextField, Typography, Grid, Container } from "@mui/material";
// icons
import SendIcon from "@mui/icons-material/Send";

const CommentsList = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={{
          background: "#ebebeb",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "rgb(0 0 0 / 10%) 0px 4px 12px",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold" color="primary">
            Comments:
          </Typography>
        </Grid>

        <Grid item xs={12} mb={5}>
          <TextField
            sx={{ mt: 3 }}
            id="name"
            label="Name"
            name="name"
            // helperText="Some important text"
            variant="standard"
            fullWidth
            size="small"
          />
          <TextField
            sx={{ mt: 3 }}
            id="email"
            label="Email"
            name="email"
            // helperText="Some important text"
            variant="standard"
            fullWidth
            size="small"
          />
          <TextField
            sx={{ mt: 3 }}
            id="comment"
            label="Comment"
            name="comment"
            // helperText="Some important text"
            variant="standard"
            fullWidth
            size="small"
            multiline
            rows={4}
          />
        </Grid>
        <Button variant="contained" size="small" endIcon={<SendIcon />}>
          Post
        </Button>
      </Grid>
    </Container>
  );
};

export default CommentsList;
