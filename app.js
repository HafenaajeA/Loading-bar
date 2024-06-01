const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

let idx = 0;

updateNum();

function updateNum() {
  // It waas possibie to write it 20% but we have to write it dynamic
  counterEl.innerText = idx + "%";
  barEl.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    // this has to load every 20ms
    setTimeout(updateNum, 20);
  }
}
