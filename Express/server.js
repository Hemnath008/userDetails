const express = require("express");
const cors = require("cors");
const app = express();
const movies = require("./helpers/movies.json");
const path = require("path")

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

 
app.get("/api/chart", (req, res) => {
  let value = getChartValues();
  try {
    res.status(200).json(value);
  } catch (err) {
    console.log("Error :::>", err);
  }
});

app.use(express.static(path.join(__dirname, "../React/dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../React/dist/index.html"));
});


const PORT = 7000;


app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});
