const records = require("../data/records");
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile } = require("../utils");

function findAll() {
  return JSON.stringify(records)
}

function findByExercise(exer) {
  const exercise = records.find((e) => e.exercise === exer.exercise);

  return exercise;
}

function add(exercise) {
  if(!records.find((e) => e.exercise === exercise.exercise)) {
    const newExer = {id: uuidv4(), ...exercise};
    records.push(newExer);

    writeDataToFile("./data/records.json", records);
    return newExer;
  } else {
    console.log("Already exists");
  }
}

function update(newTime, exercise) {
  const index = records.findIndex((exer) => exer.exercise === exercise.exercise);
  records[index].time = newTime;
  writeDataToFile("./data/records.json", records);
  return records[index];
}

function remove(exercise) {
  const index = records.findIndex((exer) => exer.exercise === exercise.exercise);
  records.splice(index, 1);
  writeDataToFile("./data/records.json", records);
  return records;
}

module.exports = {
  findAll,
  findByExercise,
  add,
  update,
  remove
}
