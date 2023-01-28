import './sass/index.scss';
import { colorTheme } from './js/color_theme.js';


let themeKey = true;

document.addEventListener("DOMContentLoaded", ()=> {
    themeKey = localStorage.getItem("themeKey");
    alert(themeKey);
});

const toggle = document.querySelector('.toggle');   

toggle.addEventListener('click', colorTheme(themeKey));


//localStorage.setItem("themeKey", a);

//const getLastTime =localStorage.getItem("themeKey");
// function checkColor(){
//     if()
// }
