const hamMenuIcon = document.getElementById('ham-menu');
const hamMenuClosed = document.getElementById('ham-menu-closed');
const hamMenuOpen = document.getElementById('ham-menu-open');
const menu = document.getElementById('menu');

hamMenuIcon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamMenuClosed.classList.toggle('hidden');
    hamMenuOpen.classList.toggle('hidden');
});