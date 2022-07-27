//SIDEMENU

const btn = document.querySelector('.hamburger')
const menu = document.getElementById('menu')
const links = document.querySelectorAll('.links')
const yoffset = document.querySelectorAll('section[id]')
const scrollbtn =  document.querySelector('.scroll_btn')
const about = document.getElementById('skills')
function sidemenu(){
    btn.addEventListener('click', ()=>{
        menu.classList.toggle('sidemenu_open')
    })
}
sidemenu();

links.forEach(()=>{
    menu.addEventListener('click',()=>{
        if(menu.classList.contains('sidemenu_open')){
            menu.classList.remove('sidemenu_open')
        }
    })
    
})
console.log(links);

     console.log(window.pageYOffset)

