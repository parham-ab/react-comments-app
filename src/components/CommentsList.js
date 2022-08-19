import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// mui
import { Button, Typography, Grid, Container, Box } from "@mui/material";
// icons
import SendIcon from "@mui/icons-material/Send";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
// components
import CustomError from "./CustomError";
import Comment from "./Comment";
import http from "../services/httpServices";
import Loading from "./Loading";
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
    .max(30, "your name can't be more than 30 chars!"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
      "invalid Email address"
    )
    .required("Required")
    .max(20, "your email can't be more than 20 chars!"),
  comment: Yup.string()
    .trim()
    .min(5, "your comment must be at least 5 or more chars!")
    .max(500, "your comment can't be more than 500 chars!")
    .required("Text Required!"),
});

const CommentsList = () => {
  const [mainData, setMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      const response = await http.post("/posts", { values, date });
      const newValue = [...mainData, response.data];
      setMainData(newValue);
      // save to localStorage
      localStorage.setItem("react-comments-list", JSON.stringify(newValue));
      setIsLoading(false);
    };
    PostData();
    // clear inputs
    [values].forEach((item) => {
      item.name = "";
      item.email = "";
      item.comment = "";
    });
  };
  // delete comment
  const deleteHandle = (id) => {
    const filteredData = mainData.filter(
      (item) => mainData.indexOf(item) !== id
    );
    http.delete(`/posts/${id}`).then((res) => setMainData(filteredData));
    localStorage.setItem("react-comments-list", JSON.stringify(filteredData));
  };
  // load comments from localStorage
  useEffect(() => {
    const savedComments = localStorage.getItem("react-comments-list");
    const parsedSavedComments = JSON.parse(savedComments);
    savedComments != null && setMainData(parsedSavedComments);
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={{
          background: "#ebebeb",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "rgb(0 0 0 / 10%) 0px 4px 12px",
          mt: 5,
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
                type="submit"
                sx={{ fontWeight: "600" }}
                endIcon={!isLoading ? <SendIcon /> : <HourglassTopIcon />}
                disabled={isLoading}
              >
                {!isLoading ? "Post" : "Posting..."}
              </Button>
            </Form>
          </Formik>
        </Grid>
      </Grid>
      {/* display data */}
      {isLoading ? (
        <Loading />
      ) : (
        mainData.map((item, index) => (
          <Comment
            key={index}
            data={item}
            deleteHandle={deleteHandle}
            index={index}
          />
        ))
      )}
    </Container>
  );
};

export default CommentsList;
