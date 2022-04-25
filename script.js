const title = document.getElementById('title')
const textOff = document.getElementById('textOff')
const icon = document.querySelector('#icon')

const titleTwo = document.getElementById('titleTwo')
const textTwo = document.getElementById('textTwo')
const iconTwo = document.querySelector('#iconTwo')

const titleThree = document.getElementById('titleThree')
const textThree = document.getElementById('textThree')
const iconThree = document.querySelector('#iconThree')

const titleFour = document.getElementById('titleFour')
const textFour = document.getElementById('textFour')
const iconFour = document.querySelector('#iconFour')

let isVisible = false
let isVisibleTwo = false
let isVisibleThree = false
let isVisibleFour = false

title.onclick = () => {
  textOff.style.display = isVisible ? 'block' : 'none'
  icon.style.transform = isVisible ? 'rotate(180deg)' : 'rotate(0deg)'
  isVisible = !isVisible
}

titleTwo.onclick = () => {
  textTwo.style.display = isVisibleTwo ? 'block' : 'none'
  iconTwo.style.transform = isVisibleTwo ? 'rotate(180deg)' : 'rotate(0deg)'
  isVisibleTwo = !isVisibleTwo
}

titleThree.onclick = () => {
  textThree.style.display = isVisibleThree ? 'block' : 'none'
  iconThree.style.transform = isVisibleThree ? 'rotate(180deg)' : 'rotate(0deg)'
  isVisibleThree = !isVisibleThree
}

titleFour.onclick = () => {
  textFour.style.display = isVisibleFour ? 'block' : 'none'
  iconFour.style.transform = isVisibleFour ? 'rotate(180deg)' : 'rotate(0deg)'
  isVisibleFour = !isVisibleFour
}
