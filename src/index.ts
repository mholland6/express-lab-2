// require the express module
import express from 'express';
import path from 'path';

 
// require the cors module
import cors from "cors"
// do this for each ts file
// require the router object (and all the defined routes)
// to be used in this file 
import homepageRoutes from "./routes/homepage";
import specialtyPizzaRoutes from "./routes/specialty-pizzas";
import reviewRoutes from "./routes/review";
import reviewSubmissionRoutes from "./routes/review-submission";
import pizzaBuilderRoutes from "./routes/pizza-builder";
import pizzaBuilderSubmissionRoutes from "./routes/pizza-builder-submission";
// creates an instance of an Express server
const app = express();
// enable Cross Origin Resource Sharing so this API can be used from web-apps on other domains
app.use(cors()) 
// allow POST and PUT requests to use JSON bodies
app.use(express.json())
// Settings for web server
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// then do this after importing the ts file from above
// use the router object (and all the defined routes)
app.use("/", homepageRoutes);
app.use("/", specialtyPizzaRoutes);
app.use("/", reviewRoutes); 
app.use("/", reviewSubmissionRoutes);
app.use("/", pizzaBuilderRoutes);
app.use("/", pizzaBuilderSubmissionRoutes);
// define the port
const port = 3000;
 
// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));

