const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const blurHeder = () =>{ 
    const Heder = document.getElementById('header') 
    this.scrollY >= 50 ? Heder.classList.add('blur-header')
                       : Heder.classList.remove('blur-header')
    }
    window.addEventListener('scroll',blurHeder)

   
   