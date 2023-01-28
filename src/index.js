import './sass/index.scss';
import { colorTheme } from './js/color_theme.js';
//import {colorThemeMob} from './js/color_theme.js'




// document.addEventListener("DOMContentLoaded", ()=> {
//     themeKey = localStorage.getItem("themeKey");
//     alert(themeKey);
// });

//let themeKey = true;



const toggle = document.querySelector('.toggle');   
//const toggleMob = document.querySelector('.toggle__mob');

toggle.addEventListener('click', colorTheme);//(themeKey)

//toggleMob.addEventListener('click', colorThemeMob);

//localStorage.setItem("themeKey", a);

//const getLastTime =localStorage.getItem("themeKey");
// function checkColor(){
//     if()
// }
