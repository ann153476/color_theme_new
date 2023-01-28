export { colorTheme };
//export {colorThemeMob};

const body = document.querySelector('body');
const svgLight = document.querySelector('.svg__light');
const svgDark = document.querySelector('.svg__dark');
const svgSun = document.querySelector('.svg__sun');
const svgMoon = document.querySelector('.svg__moon');
const inputT = document.querySelector('.input__theme');

const svgLupa = document.querySelector('.lupa__theme');
const svgMenu = document.querySelector('.menu__theme');
const svgX = document.querySelector('.x__theme');


console.log(svgLupa,svgMenu,svgX);
function colorTheme(){
    
    body.classList.toggle('light__theme');
    body.classList.toggle('dark__theme');//body

    svgLight.classList.toggle('toggle__light__theme');
    svgLight.classList.toggle('toggle__dark__theme');//light

    svgDark.classList.toggle('toggle__light__theme');
    svgDark.classList.toggle('toggle__dark__theme');//dark

    svgSun.classList.toggle('toggle__sun__theme');
    svgSun.classList.toggle('toggle__moon__theme');//sun

    svgMoon.classList.toggle('toggle__sun__theme');
    svgMoon.classList.toggle('toggle__moon__theme');//moon

    inputT.classList.toggle('input__light__theme');
    inputT.classList.toggle('input__dark__theme');//input

    svgLupa.classList.toggle('svg__light__theme');
    svgLupa.classList.toggle('svg__dark__theme');//лупа

    svgMenu.classList.toggle('svg__light__theme');
    svgMenu.classList.toggle('svg__dark__theme');//menu burger

    svgX.classList.toggle('svg__light__theme');
    svgX.classList.toggle('svg__dark__theme');// X esc

    
    
    // console.log(themeKey);
    // if(themeKey){
    //     themeKey=false;
    // }else{
    //     themeKey=true;
    // }

    // localStorage.setItem("themeKey", a);

}

// function colorThemeMob(){
//     body.classList.toggle('light__theme');
//     body.classList.toggle('dark__theme');//body

//     inputT.classList.toggle('input__light__theme');
//     inputT.classList.toggle('input__dark__theme');//input

//     svgLupa.classList.toggle('lupa__light__theme');
//     svgLupa.classList.toggle('lupa__dark__theme');//лупа
    
//     svgMenu.classList.toggle('lupa__light__theme');
//     svgMenu.classList.toggle('lupa__dark__theme');//menu burger

//     svgX.classList.toggle('lupa__light__theme');
//     svgX.classList.toggle('lupa__dark__theme');//x

//     svgSun.classList.toggle('svg__sun__light__theme');
//     svgSun.classList.toggle('svg__sun__dark__theme');//sun

//     svgMoon.classList.toggle('svg__moon__light__theme');
//     svgMoon.classList.toggle('svg__moon__dark__theme');//moon
// }