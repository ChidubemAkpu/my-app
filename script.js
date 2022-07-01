"use strict"
const forOpen = document.querySelector('#hamburger');
const forClose = document.querySelector("#close-me");
forOpen.addEventListener("click",openme);
forClose.addEventListener("click",closeme);
function openme(){
    document.getElementById('menu-stuff').style.width='75vw';
}

function closeme(){
    document.getElementById('menu-stuff').style.width='0';
}