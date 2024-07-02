const express = require("express");
const flightRoutes = require("./routes/flightRoutes");

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/", flightRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
