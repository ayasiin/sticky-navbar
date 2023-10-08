const navbar = document.querySelector('.navbar')
const bottom = document.querySelector('.bottom-container')
console.log(bottom)
window.addEventListener('scroll',()=>{
    if(window.screenY > bottom.offsetTop - navbar.offsetHeight - 50
        ) {
    navbar.classList.add('active')

}else{
    navbar.classList.remove('active')
}
})