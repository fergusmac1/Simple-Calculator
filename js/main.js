let total = 0

document.querySelector('#zero').addEventListener('click', makeZero)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)
document.querySelector('#-zero').addEventListener('click', makeZero)
document.querySelector('#-one').addEventListener('click', minusOne)
document.querySelector('#-two').addEventListener('click', minusTwo)
document.querySelector('#-three').addEventListener('click', minusThree)
document.querySelector('#-four').addEventListener('click', minusFour)
document.querySelector('#-five').addEventListener('click', minusFive)
document.querySelector('#-six').addEventListener('click', minusSix)
document.querySelector('#-seven').addEventListener('click', minusSeven)
document.querySelector('#-eight').addEventListener('click', minusEight)
document.querySelector('#-nine').addEventListener('click', minusNine)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function one() {
  total = total + 1
  document.querySelector('#placeToPutResult').innerText = total
}

function two() {
  total = total + 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function three() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerHTML = total
}

function four() {
  total = total + 4
  document.querySelector('#placeToPutResult').innerHTML = total
}

function five() {
  total = total + 5
  document.querySelector('#placeToPutResult').innerText = total
}

function six() {
  total = total + 6
  document.querySelector('#placeToPutResult').innerText = total
}

function seven() {
  total = total + 7
  document.querySelector('#placeToPutResult').innerHTML = total
}

function eight() {
  total = total + 8
  document.querySelector('#placeToPutResult').innerHTML = total
}

function nine() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function minusOne() {
  total = total - 1
  document.querySelector('#placeToPutResult').innerText = total
}

function minusTwo() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function minusThree() {
  total = total - 3
  document.querySelector('#placeToPutResult').innerHTML = total
}

function minusFour() {
  total = total - 4
  document.querySelector('#placeToPutResult').innerHTML = total
}

function minusFive() {
  total = total - 5
  document.querySelector('#placeToPutResult').innerText = total
}

function minusSix() {
  total = total - 6
  document.querySelector('#placeToPutResult').innerText = total
}

function minusSeven() {
  total = total - 7
  document.querySelector('#placeToPutResult').innerHTML = total
}

function minusEight() {
  total = total - 8
  document.querySelector('#placeToPutResult').innerHTML = total
}

function minusNine() {
  total = total - 9
  document.querySelector('#placeToPutResult').innerHTML = total
}