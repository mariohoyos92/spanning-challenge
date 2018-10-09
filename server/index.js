require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");

const app = express();

// SERVE FRONTEND
app.use(express.static(`${__dirname}/../build/`));

app.use(json());

const creditCard = {
    balance: 1200
};

app.use("/balance", (req, res) => {
    res.status(200).json({
        status: "success",
        balance: creditCard.balance
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port: ${port}`));
