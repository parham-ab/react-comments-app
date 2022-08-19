import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// mui
import { Button, Typography, Grid, Container, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// components
import CustomError from "./CustomError";
import Comment from "./Comment";
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
  //   const [isLoading, setIsLoading] = useState(false);
  // submit
  const onSubmit = (values) => {
    const PostData = async () => {
      // date
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      const date = new Date().toLocaleString("en-US", options);
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { values, date }
      );
      const newValue = [...mainData, response.data];
      setMainData(newValue);
    };
    PostData();
    // clear input
  };
  // delete comment
  const deleteHandle = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) =>
        setMainData(mainData.filter((item) => mainData.indexOf(item) !== id))
      );
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
      {/* display data */}
      {mainData.map((item, index) => (
        <Comment
          key={index}
          data={item}
          deleteHandle={deleteHandle}
          index={index}
        />
      ))}
    </Container>
  );
};

export default CommentsList;
