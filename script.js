document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById("menu");
    const nav = document.getElementsByClassName("links")[0];

    menu.onclick = () => {
        menu.classList.toggle('fa-xmark');
        nav.classList.toggle('active');
    };

    // close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menu.classList.remove('fa-xmark');
            menu.setAttribute('aria-expanded', false);
        }
    });
});


