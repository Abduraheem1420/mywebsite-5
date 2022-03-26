// Toggle mobile menu

const MenuToggleOpen = document.querySelector('.menu-toggle-open');
const MenuToggleClose = document.querySelector('.menu-toggle-close');
const navMobileElemt = document.querySelector('.nav-mobile');

MenuToggleOpen.addEventListener('click', () => navMobileElemt.classList.add('active'));

MenuToggleClose.addEventListener('click', () => navMobileElemt.classList.remove('active'));

// Toggle theme

const bodyElement = document.body;
const ThemeToggleBtn = document.querySelector('.theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('theme-light');
}

ThemeToggleBtn.addEventListener('click', ()=>{
    bodyElement.classList.toggle('theme-light');
    if(bodyElement.classList.contains('theme-light')){
        localStorage.setItem('currentTheme','themeActive');
    }else{
        localStorage.removeItem('currentTheme','themeActive');
    }
});

// Show dropdown menu

document.addEventListener('click', element =>{
    const dropdown =document.querySelector('.dropdown');

    if(element.target.classList.contains('dropdown-btn')){
        dropdown.classList.add('active');
    }else{
        dropdown.classList.remove('active');
    }

});