import SpecialtyPizza from "../models/specialty-pizza";

// require the express module
import express from "express";
 
// create a new Router object
const routes = express.Router();

// make specialty pizzas with imported interface
// const anchovyLovers: SpecialtyPizza = { name: "Anchovy Lover's", price: 15}
// const paleoPizza: SpecialtyPizza = { name: "Paleo Pizza", price: 10}
// const dessertPizza: SpecialtyPizza = { name: "Dessert Pizza", price: 7.5}

routes.get('/specialty-pizzas', (req, res) => {
  const name = req.query.name as string;
  const price = parseFloat(req.query.price as string).toFixed(2);

  //views/specialty-pizzas
  res.render('specialty-pizzas', {name, price});
});
 
export default routes;