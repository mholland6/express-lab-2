import express from "express";

const routes = express.Router();

// const price: number[] =[
//   {
//     priceSmall: 7 + toppingCount * 0.5,
//   },

// ]

routes.get("/pizza-builder-submission", (req, res) => {
  const size: string = req.query.size as string;
  const toppingCount: number = parseInt(req.query.toppingCount as string);
  const glutenFree: boolean = !!req.query.glutenFree;
  const specialInstructions: string = req.query.specialInstructions as string;
  const price: number = Number(req.query.price);
  const free = req.query.free as string;
  const isFreeDelivery = free === "yes";
  console.log(toppingCount);

  function pizzaPrice(size: string, toppingCount: number, glutenFree: boolean) {
    let price = 0;
    

    let smallPizza = 7 + toppingCount * 0.5;
    let mediumPizza = 10 + toppingCount * 1;
    let largePizza = 12 + toppingCount * 1.25;

    if (glutenFree) {
      smallPizza + 2.0;
      mediumPizza + 2.0;
      largePizza + 2.0;
    }
    return price;
  }

  res.render("pizza-builder-submission", {
    size,
    toppingCount,
    glutenFree,
    specialInstructions,
    price,
    isFreeDelivery,
  });
});

export default routes;