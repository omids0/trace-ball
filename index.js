const myballEL = document.getElementById("myball");
const systemBallEl = document.getElementById("pcBall");
const statusEl = document.getElementById("status");

let interval;
let both = 0;

let windowSize = {
  width: window.innerWidth - 80,
  height: window.innerHeight - 90,
};
let random = Math.floor(Math.random() * windowSize);

function setPosition() {
  let left = parseInt(
    window.getComputedStyle(systemBallEl).getPropertyValue("left")
  );
  systemBallEl.style.left =
    left + Math.floor(Math.random() * windowSize.width) + "px";

  let top = parseInt(
    window.getComputedStyle(systemBallEl).getPropertyValue("top")
  );
  systemBallEl.style.top =
    top + Math.floor(Math.random() * windowSize.height) + "px";
}

function tracing() {
  let pcBallLeft = parseInt(
    window.getComputedStyle(systemBallEl).getPropertyValue("left")
  );
  let pcBallTop = parseInt(
    window.getComputedStyle(systemBallEl).getPropertyValue("top")
  );

  let left = parseInt(
    window.getComputedStyle(myballEL).getPropertyValue("left")
  );
  let top = parseInt(window.getComputedStyle(myballEL).getPropertyValue("top"));
  let leftMinus = pcBallLeft - left;
  let topMinus = pcBallTop - top;
  statusEl.textContent = `${leftMinus} | ${topMinus}`;

  if (
    leftMinus <= 10 &&
    topMinus <= 10 &&
    leftMinus >= -10 &&
    topMinus >= -10
  ) {
    myballEL.style.left = 0;
    myballEL.style.top = 0;
    window.location.reload();
    alert("✨ YOU WON! ✨🎉🎈");
  }
}

function moveLeft() {
  let left = parseInt(
    window.getComputedStyle(myballEL).getPropertyValue("left")
  );
  if (left > 0) {
    myballEL.style.left = left - 2 + "px";
    tracing();
  }
}

function moveRight() {
  let left = parseInt(
    window.getComputedStyle(myballEL).getPropertyValue("left")
  );
  if (left < windowSize.width) {
    myballEL.style.left = left + 2 + "px";
    tracing();
  }
}

function moveTop() {
  let top = parseInt(window.getComputedStyle(myballEL).getPropertyValue("top"));
  if (top > 0) {
    myballEL.style.top = top - 2 + "px";
    tracing();
  }
}

function moveDown() {
  let top = parseInt(window.getComputedStyle(myballEL).getPropertyValue("top"));
  if (top < windowSize.height) {
    myballEL.style.top = top + 2 + "px";
    tracing();
  }
}

setPosition();

window.addEventListener("keydown", (e) => {
  tracing();
  if (both == 0) {
    both++;
    if (e.key === "ArrowLeft") {
      interval = setInterval(moveLeft, 1);
    }

    if (e.key === "ArrowRight") {
      interval = setInterval(moveRight, 1);
    }

    if (e.key === "ArrowUp") {
      interval = setInterval(moveTop, 1);
    }

    if (e.key === "ArrowDown") {
      interval = setInterval(moveDown, 1);
    }
  }
});

window.addEventListener("keyup", (e) => {
  clearInterval(interval);
  both = 0;
});
