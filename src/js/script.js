let heart_btn = document.querySelector('.heart');
let circle_btn = document.querySelector('.circle');

heart_btn.addEventListener('click', function() {
    document.body.style.cursor = 'url("https://cdn-icons-png.flaticon.com/128/2324/2324510.png") 60 60, auto';
});

circle_btn.addEventListener('click', function() {
    document.body.style.cursor = ``;
});

console.log("slt")