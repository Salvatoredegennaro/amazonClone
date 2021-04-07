const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51Ib4MvCx0FtToOe3NNwcroZJUml2BqfJZHlA6JLDMzqRuBswZSqE60S5pXvaJUzyApUV5BolQH91wLAi4fOWa1mt00eDwewsGv"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

