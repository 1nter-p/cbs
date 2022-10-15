const express = require("express");

// NOTE: should we use a .env for this?
const PORT = 8000;

const app = express();
app.use("/", express.static("static"));

app.listen(PORT, () => console.log(`Cow is breathing on port ${PORT}`));
