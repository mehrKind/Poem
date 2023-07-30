const Mobile_btn = document.getElementById('mobile-btn'),
nav = document.getElementById('nav-links'),
edame_poet = document.getElementById('edame-poet'),
poet = document.getElementById('poet-div'),
remove_poet = document.getElementById('remove-poet')
 
Mobile_btn.addEventListener('click', () => {
    nav.classList.toggle('nav-links-after')
});
edame_poet.addEventListener('click',()=>{
    poet.classList.add('display-poet');
    edame_poet.classList.add('edame-poet')
});
remove_poet.addEventListener('click',()=>{
    poet.classList.remove('display-poet')
    edame_poet.classList.remove('edame-poet')
});