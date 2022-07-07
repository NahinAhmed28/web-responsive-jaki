const btn = document.getElementById('btn1');
const navbar = document.getElementById('navbar');

btn.addEventListener('click', function onClick() {
    navbar.style.backgroundColor = '#2596be';
});


function changeColor1() {
    navbar.style.backgroundColor = '#2596be';

}

function changeColor2() {
    navbar.style.backgroundColor = '#FFFFFF';
}