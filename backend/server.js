const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get("/", (req, res) => {
    res.send("Api is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));