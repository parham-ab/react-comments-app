import React, { useState } from "react";
// mui
import {
  Button,
  TextField,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
// icons
import SendIcon from "@mui/icons-material/Send";
// formik
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CustomError from "./CustomError";

// initial values
const initialValues = {
  name: "",
  email: "",
  comment: "",
};
// validate function
const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Required!")
    .max(50, "your name can't be more than 50 chars!"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
      "invalid Email address"
    )
    .required("Required"),
  comment: Yup.string()
    .trim()
    .min(5, "your comment must be at least 5 or more chars!")
    .max(500, "your comment can't be more than 500 chars!")
    .required("Text Required!"),
});

const CommentsList = () => {
  const [mainData, setMainData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // submit
  const onSubmit = (values) => {
    setMainData(values);
    const postComments = async () => {
      try {
        await axios.post("https://fakestoreapi.com/products", values);
        const { data } = await axios.get("https://fakestoreapi.com/products");
        console.log(data);
      } catch (err) {
        setError(err);
        console.log(error.message);
      }
    };
    postComments();
  };

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

        <Grid item xs={12}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Box component="div" sx={{ my: 3 }}>
                <div style={{ padding: "5px" }}>
                  <label htmlFor="name">
                    <Typography variant="body2" color="text.secondary">
                      Name
                    </Typography>
                  </label>
                </div>
                <Field id="name" type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component={CustomError} />
              </Box>

              <Box component="div" sx={{ my: 3 }}>
                <div style={{ padding: "5px" }}>
                  <label htmlFor="email">
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                  </label>
                </div>
                <Field
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component={CustomError} />
              </Box>

              <Box component="div" sx={{ my: 3 }}>
                <div style={{ padding: "5px" }}>
                  <label htmlFor="comment">
                    <Typography variant="body2" color="text.secondary">
                      Comment
                    </Typography>
                  </label>
                </div>
                <Field
                  id="comment"
                  as="textarea"
                  type="text"
                  name="comment"
                  placeholder="Comment"
                  rows={5}
                />
                <ErrorMessage name="comment" component={CustomError} />
              </Box>

              <Button
                variant="contained"
                size="small"
                endIcon={<SendIcon />}
                sx={{ mt: 5 }}
                type="submit"
                //   endIcon={!loading ? <SendIcon /> : <HourglassTopIcon />}
                //   disabled={formik.isValidating}
              >
                Post
              </Button>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CommentsList;
