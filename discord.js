const canvas = document.querySelector("canvas").getContext("2d");

let starsX = [];
let starsY = [];

for (let i = 0; i < 700; i++) {
  starsX.push(Math.random());
  starsY.push(Math.random());
}

const mouseUpdate = (e) => {
  document.querySelector("canvas").width = window.innerWidth;
  document.querySelector("canvas").height = window.innerHeight;
  canvas.fillStyle = "#ffffff";
  for (let i = 0; i < 1000; i++) {
    canvas.fillRect(starsX[i] * window.innerWidth + ((e.clientX - (window.innerWidth / 2)) / 40), starsY[i] * window.innerHeight + ((e.clientY - (window.innerHeight / 2)) / 40), 1, 1);
  }
}

const update = () => {
  document.querySelector("canvas").width = window.innerWidth;
  document.querySelector("canvas").height = window.innerHeight;
  canvas.fillStyle = "#ffffff";
  for (let i = 0; i < 1000; i++) {
    canvas.fillRect(starsX[i] * window.innerWidth, starsY[i] * window.innerHeight, 1, 1);
  }
}

window.addEventListener("resize", update);
window.addEventListener("mousemove", mouseUpdate);

update();
