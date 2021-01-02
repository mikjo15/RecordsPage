const Records = require("../models/dataModel");

function getAll(req, res) {
  const records = Records.findAll();

  if (records){
    res.writeHead(200, { "Content-type": "application/json"});
    res.end(records)
  }
}

function getExercise(req, res, exer) {
  const time = Records.findByExercise(exer);

  if(time) {
    res.writeHead(200, { "Content-type": "application/json"});
    res.end(JSON.stringify(time));
  }
}

function addExercise(req, res, exer) {
  const exercise = exer;
  Records.add(exercise);

  res.writeHead(200, { "Content-type": "application/json"});
  res.end(JSON.stringify(exercise));
}

function updateExercise(req, res, exer) {
  const updExercise = Records.findByExercise(exer);
  const newTime = exer.time;

  if(updExercise) {
    Records.update(newTime, updExercise);
    res.end(JSON.stringify(updExercise));
  } else {
    res.write("Record not found");
    res.end();
  }
}

function deleteExercise(req, res, exer) {
  const delExercise = Records.findByExercise(exer);

  if(delExercise) {
    const list = Records.remove(delExercise);
    res.end(JSON.stringify(list));
  } else {
    res.write("Record not found");
    res.end();
  }
}

module.exports = {
  getAll,
  getExercise,
  addExercise,
  updateExercise,
  deleteExercise
}
