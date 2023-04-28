const express = require("express");


const app = express();

//const port = 8885;
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})