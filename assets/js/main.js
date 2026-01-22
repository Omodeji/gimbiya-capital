// Toggle mobile menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

// Toggle dropdown menu on mobile
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const dropdownMenu = toggle.nextElementSibling; // the <ul class="dropdown__menu">
        dropdownMenu.classList.toggle('show-dropdown');
        toggle.classList.toggle('active-arrow'); // optional: rotate arrow
    });
});



// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//         nav = document.getElementById(navId)

//     toggle.addEventListener('click', () => {
//         nav.classList.toggle('show-menu')
//         toggle.classList.toggle('show-icon')
//     })
// }

// showMenu('nav-toggle', 'nav-menu')

// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId);
//     const nav = document.getElementById(navId);

//     if (!toggle || !nav) {
//         console.error(`Elements not found: ${toggleId}, ${navId}`);
//         return;
//     }

//     const toggleMenu = (open = null) => {
//         const isOpen = nav.classList.toggle('show-menu');
//         if (open !== null) nav.classList.toggle('show-menu', open);
        
//         toggle.classList.toggle('show-icon', isOpen);
//         toggle.setAttribute('aria-expanded', isOpen);
//     };

//     // Click
//     toggle.addEventListener('click', toggleMenu);

//     // Keyboard (Enter/Space)
//     toggle.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter' || e.key === ' ') {
//             e.preventDefault();
//             toggleMenu();
//         }
//     });

//     // Close on outside click (optional UX boost)
//     document.addEventListener('click', (e) => {
//         if (!toggle.contains(e.target) && !nav.contains(e.target)) {
//             nav.classList.remove('show-menu');
//             toggle.classList.remove('show-icon');
//             toggle.setAttribute('aria-expanded', 'false');
//         }
//     });
// };

// showMenu('nav-toggle', 'nav-menu');
