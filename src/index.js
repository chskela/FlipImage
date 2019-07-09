const url = document.querySelector('input[type="url"]');

const display = document.querySelector('#display');
const items = document.querySelectorAll('.item');
const up = document.querySelectorAll('.up');
const down = document.querySelectorAll('.down');
const left = document.querySelectorAll('.left');
const right = document.querySelectorAll('.right');

const str = '1.jpg';

imgLoad(str);

display.addEventListener('click', () => {
    if(url.value === '') {
      imgLoad(str);
    } else {
      imgLoad(url.value)
    } 
})

up.forEach((item) => {
    item.addEventListener('click', (event) => {
    event.target.parentElement.lastElementChild.style = "transform: scaleY(-1);"
    })
})

down.forEach((item) => {
    item.addEventListener('click', (event) => {
    event.target.parentElement.lastElementChild.style = "transform: scaleY(1);"
    })
})

left.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.target.parentElement.lastElementChild.style = "transform: scaleX(1);"
  })
})

right.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.target.parentElement.lastElementChild.style = "transform: scaleX(-1);"
  })
})
function imgLoad(url) {
    items.forEach((item) => {
        const src = item.querySelector('img').src = url;
    })
} 