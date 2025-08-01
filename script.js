const elem = ['title','textOff','icon','titleTwo', 'textTwo','#iconTwo','titleThree','textThree','#iconThree','titleFour','textFour','#iconFour']

function getElemID(list) {

  for(let i = 0; i < list.length; i++ ) {
    list[i] = document.getElementById(i)
  }
}

getElemID(elem);

let isVisible = false
let isVisibleTwo = false
let isVisibleThree = false
let isVisibleFour = false

elem[0].onclick = () => {
  elem[1].style.display = isVisible ? 'block' : 'none'
  elem[2].style.transform = isVisible ? 'rotate(180deg)' : 'rotate(0deg)'
  isVisible = !isVisible
}

elem[3].onclick = () => {
  elem[4].style.display = isVisibleTwo ? 'block' : 'none'
  elem[5].style.transform = isVisibleTwo ? 'rotate(180deg)' : 'rotate(0deg)'
  isVisibleTwo = !isVisibleTwo
}

elem[6].onclick = () => {
  elem[7].style.display = isVisibleThree ? 'block' : 'none'
  elem[8].style.transform = isVisibleThree ? 'rotate(180deg)' : 'rotate(0deg)'
  isVisibleThree = !isVisibleThree
}

elem[9].onclick = () => {
  elem[10].style.display = isVisibleFour ? 'block' : 'none'
  elem[11].style.transform = isVisibleFour ? 'rotate(180deg)' : 'rotate(0deg)'
  isVisibleFour = !isVisibleFour
}
