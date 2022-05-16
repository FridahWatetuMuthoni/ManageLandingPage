const nav = document.getElementById('nav');

const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', handleOpen);
close.addEventListener('click', handleClose);
nav.addEventListener("click", handleClick);


function handleOpen(){
    close.style.display="block"
    open.style.display="none"
}

function handleClose(){
    close.style.display="none"
    open.style.display='block'
}

function handleClick() {
    nav.classList.toggle('change')
}