import React from "react";
// mui
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

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
            label="name"
            // helperText="Some important text"
            variant="standard"
            fullWidth
            size="small"
          />
          <TextField
            sx={{ mt: 3 }}
            id="email"
            label="email"
            // helperText="Some important text"
            variant="standard"
            fullWidth
            size="small"
          />
          <TextField
            sx={{ mt: 3 }}
            id="comment"
            label="comment"
            // helperText="Some important text"
            variant="standard"
            fullWidth
            size="small"
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CommentsList;
