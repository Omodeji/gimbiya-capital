// // Toggle mobile menu
// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//         nav = document.getElementById(navId)

//     toggle.addEventListener('click', () => {
//         nav.classList.toggle('show-menu')
//         toggle.classList.toggle('show-icon')
//     })
// }

// showMenu('nav-toggle', 'nav-menu')

// // Toggle dropdown menu on mobile
// const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// dropdownToggles.forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         const dropdownMenu = toggle.nextElementSibling; // the <ul class="dropdown__menu">
//         dropdownMenu.classList.toggle('show-dropdown');
//         toggle.classList.toggle('active-arrow'); // optional: rotate arrow
//     });
// });

// Mobile menu toggle
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');
    });
};
showMenu('nav-toggle', 'nav-menu');

// Mobile dropdown toggle
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent clicks from closing everything

        const dropdownMenu = toggle.nextElementSibling;

        // If already open, just close it
        if (dropdownMenu.classList.contains('show-dropdown')) {
            dropdownMenu.classList.remove('show-dropdown');
            toggle.classList.remove('active-arrow');
        } else {
            // Close all other dropdowns first
            dropdownToggles.forEach(item => {
                const menu = item.nextElementSibling;
                if (menu && menu !== dropdownMenu) {
                    menu.classList.remove('show-dropdown');
                    item.classList.remove('active-arrow');
                }
            });

            // Open this one
            dropdownMenu.classList.add('show-dropdown');
            toggle.classList.add('active-arrow');
        }
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
