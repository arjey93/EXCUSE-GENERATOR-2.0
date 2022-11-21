/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoum = ["A", "The"];
  let subject = [
    "bird",
    "mugger",
    "driver",
    "dog",
    "delivery boy",
    "stop sign"
  ];
  let actions = ["took", "grabbed", "destroyed", "stole", "lost"];
  let possession = ["my homework", "my computer", "my car", "my pants"];
  let where = ["on the park", "in the street", "going there"];

  let proIndx = Math.floor(Math.random() * pronoum.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * actions.length);
  let possIndx = Math.floor(Math.random() * possession.length);
  let wherIndx = Math.floor(Math.random() * where.length);

  return (
    pronoum[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    actions[actIndx] +
    " " +
    possession[possIndx] +
    " " +
    where[wherIndx] +
    " "
  );
};
