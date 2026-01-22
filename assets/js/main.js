const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if (toggle && nav) { // Safety check
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
            toggle.classList.toggle('show-icon')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*=============== SHOW DROPDOWN ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.nav__link')

    dropdownButton.addEventListener('click', (e) => {
        // Only run this click logic on mobile/tablets (typically < 1118px)
        if (window.innerWidth < 1118) {
            e.preventDefault() // Prevents "About" from trying to go to a link immediately
            
            const showDropdown = item.classList.contains('show-dropdown')

            // Close any other open dropdowns first
            document.querySelectorAll('.dropdown__item').forEach((el) => {
                if (el !== item) el.classList.remove('show-dropdown')
            })

            // Toggle the current one
            if (showDropdown) {
                item.classList.remove('show-dropdown')
            } else {
                item.classList.add('show-dropdown')
            }
        }
    })
})