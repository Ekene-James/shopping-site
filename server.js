const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };
 
  stripe.charges.create(body, (stripeErr, stripeSucces) => {
    if (stripeErr) {
      res.status(500).send({ stripeError: stripeErr });
    } else {
      res.status(200).send({ stripeSuccess: stripeSucces });
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app running on port : ${port}`));
