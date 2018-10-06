require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");

const app = express();
app.use(json());

app.use("/test", (req, res) => {
    res.status(200).json({
        status: "success!"
    })
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port: ${port}`));
