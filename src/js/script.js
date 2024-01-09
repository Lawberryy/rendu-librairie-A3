let heart_btn = document.querySelector('.heart');
let star_btn = document.querySelector('.star');
let default_btn = document.querySelector('.default');
let reset_btn = document.querySelector('.reset');
let flower_btn = document.querySelector('.flower');
let cat_btn = document.querySelector('.cat');
let sun_btn = document.querySelector('.sun');
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
    iframes[3].style.display = 'block'; // Show the fourth iframe
});

star_btn.addEventListener('click', function() {
    document.body.style.cursor = 'url("data:image/svg+xml;utf8,%3Csvg%20id%3D%22eeTHxknQWZo1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2032%2032%22%20shape-rendering%3D%22geometricPrecision%22%20text-rendering%3D%22geometricPrecision%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M14.869338%2C0.756872L11.583832%2C5.230025l-5.56151-.092454l3.706764%2C3.28688-1.975691%2C4.606773l5.721593-1.850158c0%2C0%2C5.276095%2C2.972076%2C5.276095%2C2.972076s-1.109027-4.921457-1.109027-4.921457L21.84826%2C6.752038L16.479144%2C5.729415L14.869338%2C0.756872Z%22%20transform%3D%22matrix(.993246-.116025%200.132858%201.137344%201.168369%209.137932)%22%20fill%3D%22%23000000%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%2F%3E%0A%20%20%3C%2Fsvg%3E") 30 10, auto';
    hideAll();
    iframes[1].style.display = 'block'; // Show the second iframe
});

default_btn.addEventListener('click', function() {
    document.body.style.cursor = 'url("data:image/svg+xml;utf8,%3Csvg%20id%3D%22eL5y4AUlFe31%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2732%27%20height%3D%2732%27%20viewBox%3D%220%200%2032%2032%22%20shape-rendering%3D%22geometricPrecision%22%20text-rendering%3D%22geometricPrecision%22%3E%3Cpath%20d%3D%22M9.575241%2C16.543307l4.5-10l4.5%2C10-3.5-1.92v4.274331h-2v-4.269467l-3.5%2C1.915136Z%22%20transform%3D%22matrix(2.026028-1.169728%201.169728%202.026028-28.312759%205.948613)%22%20fill%3D%22none%22%20stroke%3D%22%23ff0FF0%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fsvg%3E"), auto';
    hideAll();
    iframes[2].style.display = 'block'; // Show the third iframe
});

cat_btn.addEventListener('click', function() {
    document.body.style.cursor = 'url("https://cdn-icons-png.flaticon.com/128/3276/3276340.png") 60 80, auto';
    hideAll();
    iframes[4].style.display = 'block'; // Show the 5th iframe
});

sun_btn.addEventListener('click', function() {
    document.body.style.cursor = 'url("https://cdn-icons-png.flaticon.com/128/1196/1196517.png") 60 60, auto';
    hideAll();
    iframes[5].style.display = 'block'; // Show the sixth iframe
});

flower_btn.addEventListener('click', function() {
    document.body.style.cursor = 'url("data:image/svg+xml;utf8,%3Csvg%20id%3D%22eb2oimtOGyU1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20shape-rendering%3D%22geometricPrecision%22%20text-rendering%3D%22geometricPrecision%22%3E%3Cpath%20d%3D%22M11.124116%2C11.108681c0%2C0-3.459023-3.93349-3.459023-5.604622c0-2.864275%2C3.575399-4.566852%2C5.200921-4.371789q3.768783.452254%2C3.768783%2C4.371789v4.199708l3.284261-4.199708q2.368915-1.658264%2C4.554809-.829132c2.185894.829132%2C3.140765%2C4.85114.868738%2C5.803926q-2.272027.952786-5.423547%2C2.742887h3.047295c2.146288%2C0%2C3.085176.351073%2C4.070286%2C1.327399c1.027076%2C1.017918%2C1.19722%2C3.536238.452254%2C4.673292q-1.432137%2C2.185894-4.52254.507912c0%2C0-4.038808-2.522644-4.038808-2.522644s2.606671%2C5.395312%2C2.606671%2C5.395312q.635274%2C1.912961-.979884%2C3.629357c-1.615158%2C1.716396-4.513782.96264-5.032743-.846376q-.518961-1.809016-1.148062-8.592827l-1.507513%2C5.067414q-1.274798%2C3.391905-3.693408%2C4.371789c-2.41861.979884-4.748667-2.660564-3.316529-5.68151q1.432138-3.020946%2C5.268042-4.983801L4.499315%2C16.793165q-2.185894-.43501-2.939651-2.244026c-.753757-1.809016.376878-6.894953%2C4.899418-5.502424q4.52254%2C1.392529%2C4.665034%2C2.061966Z%22%20transform%3D%22matrix(1.12464%200%200%201.124638-.480117%200.07889)%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%23B468FF%22%20stroke-width%3D%220.5%22%2F%3E%3Cellipse%20rx%3D%224.899418%22%20ry%3D%224.899419%22%20transform%3D%22matrix(1.188636%200%200%201.188636%2016%2015.331679)%22%20fill%3D%22%23d2dbed%22%20stroke-width%3D%220%22%2F%3E%3C%2Fsvg%3E%0A%20%20%20%20%20%20") 10 10, auto';   
    hideAll();
    iframes[6].style.display = 'block'; // Show the seventh iframe
});

reset_btn.addEventListener('click', resetIframes);

console.log("slt");