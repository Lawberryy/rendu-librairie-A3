let heart_btn = document.querySelector('.heart');
let star_btn = document.querySelector('.star');
let default_btn = document.querySelector('.default');
let reset_btn = document.querySelector('.reset');
let iframes = document.querySelectorAll('iframe');

// Function to hide all iframes
function hideAll() {
    for (let iframe of iframes) {
        iframe.style.display = 'none';
    }
}

// Function to reset and show the first iframe
function resetIframes() {
    hideAll();
    iframes[0].style.display = 'block';
    document.body.style.cursor = 'auto';
}

// Initial setup to hide all iframes except the first one
resetIframes();

heart_btn.addEventListener('click', function() {
    document.body.style.cursor = 'url("https://cdn-icons-png.flaticon.com/128/2324/2324510.png") 60 60, auto';
    hideAll();
    iframes[3].style.display = 'block'; // Show the second iframe
});

star_btn.addEventListener('click', function() {
    document.body.style.cursor = 'url("data:image/svg+xml;utf8,%3Csvg%20id%3D%22eeTHxknQWZo1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2032%2032%22%20shape-rendering%3D%22geometricPrecision%22%20text-rendering%3D%22geometricPrecision%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M14.869338%2C0.756872L11.583832%2C5.230025l-5.56151-.092454l3.706764%2C3.28688-1.975691%2C4.606773l5.721593-1.850158c0%2C0%2C5.276095%2C2.972076%2C5.276095%2C2.972076s-1.109027-4.921457-1.109027-4.921457L21.84826%2C6.752038L16.479144%2C5.729415L14.869338%2C0.756872Z%22%20transform%3D%22matrix(.993246-.116025%200.132858%201.137344%201.168369%209.137932)%22%20fill%3D%22%23000000%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%2F%3E%0A%20%20%3C%2Fsvg%3E") 30 10, auto';
    hideAll();
    iframes[1].style.display = 'block'; // Show the fourth iframe
});

default_btn.addEventListener('click', function() {
    document.body.style.cursor = 'url("data:image/svg+xml;utf8,%3Csvg%20id%3D%22eL5y4AUlFe31%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2732%27%20height%3D%2732%27%20viewBox%3D%220%200%2032%2032%22%20shape-rendering%3D%22geometricPrecision%22%20text-rendering%3D%22geometricPrecision%22%3E%3Cpath%20d%3D%22M9.575241%2C16.543307l4.5-10l4.5%2C10-3.5-1.92v4.274331h-2v-4.269467l-3.5%2C1.915136Z%22%20transform%3D%22matrix(2.026028-1.169728%201.169728%202.026028-28.312759%205.948613)%22%20fill%3D%22none%22%20stroke%3D%22%23ff0FF0%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fsvg%3E"), auto';
    hideAll();
    iframes[2].style.display = 'block'; // Show the third iframe
});

reset_btn.addEventListener('click', resetIframes);

console.log("slt");
