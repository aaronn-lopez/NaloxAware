const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function openBio(name, role, content) {
    const panel = document.getElementById('bio-panel');
    document.getElementById('bio-name').textContent = name;
    document.getElementById('bio-role').textContent = role;
    document.getElementById('bio-content').textContent = content;
  
    panel.classList.add('open');
}

function closeBio() {
    const panel = document.getElementById('bio-panel');
    panel.classList.remove('open');
}
