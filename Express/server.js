const express = require("express");
const cors = require("cors");
const app = express();
const port = 7000;
const movies = require("./helpers/movies.json");

app.use(
  cors({
    origin: "http://localhost:5173" 
  })
);

function getChartValues() {
  let ratingCount;
  return (ratingCount = movies.reduce((acc, movie) => {
    const rating = movie.rating;

    if (rating) {
      acc[rating] = acc[rating] ? acc[rating] + 1 : 1;
    }

    return acc;
  }, {}));
}

 
app.get("/", (req, res) => {
  let value = getChartValues();
  try {
    res.status(200).json(value);
  } catch (err) {
    console.log("Error :::>", err);
  }
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
