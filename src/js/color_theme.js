export { colorTheme };

const body = document.querySelector('body');
const svgLight = document.querySelector('.svg__light');
const svgDark = document.querySelector('.svg__dark');
const inputT = document.querySelector('[input="search-input"]');
const svgLupa = document.querySelector('.svg-lupa');
const svgMenu = document.querySelector('.svg__menu');
const svgX = document.querySelector('.svg__x');
const svgSun = document.querySelector('.svg__sun');
const svgMoon = document.querySelector('.svg__moon');

//console.log(svgLupa);
function colorTheme(themeKey){
    
    localStorage.setItem("themeKey", themeKey);
    body.classList.toggle('light__theme');
    body.classList.toggle('dark__theme');//body

    svgLight.classList.toggle('svg__light__theme');
    svgLight.classList.toggle('svg__dark__theme');//light

    svgDark.classList.toggle('svg__light__theme');
    svgDark.classList.toggle('svg__dark__theme');//dark

    inputT.classList.toggle('input__light__theme');
    inputT.classList.toggle('input__dark__theme');//input

    svgLupa.classList.toggle('lupa__light__theme');
    svgLupa.classList.toggle('lupa__dark__theme');//лупа
    
    svgMenu.classList.toggle('lupa__light__theme');
    svgMenu.classList.toggle('lupa__dark__theme');//menu burger

    svgX.classList.toggle('lupa__light__theme');
    svgX.classList.toggle('lupa__dark__theme');// X esc

    // svgSun.classList.toggle('svg__sun__light__theme');
    // svgSun.classList.toggle('svg__sun__dark__theme');

    // svgMoon.classList.toggle('svg__moon__light__theme');
    // svgMoon.classList.toggle('svg__moon__dark__theme');
    
    console.log(themeKey);
    if(themeKey){
        themeKey=false;
    }else{
        themeKey=true;
    }

    localStorage.setItem("themeKey", a);

}