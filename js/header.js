// to show the mobile_menu
const button_center_section_nav_header = document.querySelector('.button_center_section_nav_header');
const a_container_button = document.querySelector('.a_container_button');

button_center_section_nav_header.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    a_container_button.classList.toggle('inactive');
}

