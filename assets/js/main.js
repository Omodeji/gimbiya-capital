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
        // 1. If screen is mobile size
        if (window.innerWidth < 1118) {
            e.preventDefault();

            // 2. Check if this specific menu is already open
            const isOpen = item.classList.contains('show-dropdown')

            // 3. Close ALL dropdowns first (clears the deck)
            dropdownItems.forEach((el) => {
                el.classList.remove('show-dropdown')
            })

            // 4. If the one we clicked WAS NOT open, open it now.
            // If it WAS open, it stays closed (because of step 3).
            if (!isOpen) {
                item.classList.add('show-dropdown')
            }
        }
    })
})