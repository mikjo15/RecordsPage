const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getAll, getExercise, addExercise, updateExercise, deleteExercise } = require("./controllers/dataController");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.get("/records", function(req, res){
  getAll(req, res);
})

app.get("/records/:exercise", function(req, res){
  getExercise(req, res, req.params)
})

app.post("/records/add", function(req, res){
  const newExercise = req.body;
  addExercise(req, res, newExercise);
})

app.post("/records/update", function(req, res){
  console.log(req.body);
  const updExercise = req.body;
  updateExercise(req, res, updExercise)
})

app.post("/records/delete", function(req, res){
  const delExercise = req.body;
  deleteExercise(req, res, delExercise)
})

app.listen(3000, function() {
  console.log("Im on it");
});
