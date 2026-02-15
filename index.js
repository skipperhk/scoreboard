let homeEl = document.getElementById("homeScore")
let countHome = 0

function hBtn1() {
    countHome += 1
    homeEl.innerText = countHome
}

function hBtn2() {
    countHome += 2
    homeEl.innerText = countHome
}

function hBtn3() {
    countHome += 3
    homeEl.innerText = countHome
}


let guestEl = document.getElementById("guestScore")
let count = 0
function oneBtn() {
  count += 1
  guestEl.innerText = count
}

function twoBtn() {
  count += 2
  guestEl.innerText = count
}

function threeBtn() {
  count += 3
  guestEl.innerText = count
}

function resetScore() {
  count = 0
  countHome = 0
  homeEl.innerText = 0
  guestEl.innerText = 0
}
