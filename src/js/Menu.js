let menu = document.querySelector('#menuicon');
let nav = document.querySelector('#nav');
let navlinks = document.querySelector('nav');

navlinks.onclick = () => {
    nav.classList.toggle('navactive');
}

menu.onclick = () => {
    nav.classList.toggle('navactive');
}
