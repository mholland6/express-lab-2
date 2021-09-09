import reviewSubmission from "../models/review";

// require the express module
import express, { urlencoded } from "express";
 
// create a new Router object
const routes = express.Router();

routes.post('/review-submission', (req, res) => {
  const name = req.body.name as string;
  const comment = req.body.comment;
  const rating = req.body.rating;
  console.log(name);
  const review: reviewSubmission = {
    name: name,
    comment: comment,
    rating: rating
  };
  console.log(name);
  console.log(review);
  
  res.render('review-submission', {review});
});

export default routes;
 