const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

/*=============== SHOW DROPDOWN ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.nav__link')

    dropdownButton.addEventListener('click', () => {
        // 1. Check if the item already has the class
        const showDropdown = item.classList.contains('show-dropdown')

        // 2. Remove the class from other items (optional, for accordion effect)
        removeDefault()

        // 3. If it didn't have the class, add it
        if (!showDropdown) {
            item.classList.add('show-dropdown')
        }
    })
})

const removeDefault = () => {
    dropdownItems.forEach((item) => {
        item.classList.remove('show-dropdown')
    })
}