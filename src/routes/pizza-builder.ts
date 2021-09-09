// require the express module
import express from "express";
 
// create a new Router object
const routes = express.Router();

routes.get('/pizza-builder', (req, res) => {
  const toppings = [
    "Pepperoni",
    "Mushroom",
    "Green Pepper",
    "Black Olives",
  ]    
  res.render('pizza-builder', {toppings});
});
 
export default routes;