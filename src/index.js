const url = document.querySelector('input[type="url"]');

const display = document.querySelector('#display');
const items = document.querySelectorAll('.item');
const str = 'https://pixabay.com/get/52e2dd474257aa14f6d1867dda6d49214b6ac3e456577348712a79d692/scent-of-jasmine-4284856_1920.jpg';

display.addEventListener('click', () => {
    
    imgLoad(str);
    console.log(url.value);
})

function imgLoad(url) {
    items.forEach((item) => {
        const src = item.querySelector('img').src = url;
        console.log(src);
    })
} 