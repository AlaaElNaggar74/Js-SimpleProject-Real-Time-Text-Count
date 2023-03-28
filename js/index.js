let inputchar = document.getElementById("inputchar");
let toacharnumber = document.getElementById("toacharnumber");
let remaichartnumber = document.getElementById("remaichartnumber");

let box = inputchar.getAttribute("maxlength");
console.log(box);
inputchar.addEventListener("keyup", (e) => {
  let sum = inputchar.value.length;
  toacharnumber.innerHTML = sum;
     remaichartnumber.innerHTML = box - sum;
});

