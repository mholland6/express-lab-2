import reviewSubmission from "../models/review";

// require the express module
import express, { request } from "express";
 
// create a new Router object
const routes = express.Router();

// http://localhost:3000/review
// This page displays a form
routes.get("/review", (req, res) => {
  res.render("review");
});
// routes.post("/review-submission", (req, res) => {
//   const name: string = req.body.name;
//   const comment = req.body.comment
//   const rating: number = parseInt(request.body.rating.value);
//   const review: reviewSubmission = {
//     name: name,
//     comment: comment,
//     rating: rating
//   };
//   console.log(review);
//   res.render("review-submission", {name, comment});
// });
 


 
export default routes;