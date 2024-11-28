
// THEME BUTTON
const themeBtn = document.getElementById('theme-btn')
themeBtn.addEventListener('click', e => {
    const themeIcon = document.querySelector('.fa-circle-half-stroke')
    if (themeIcon) {
        themeIcon.classList.toggle('dark')
    }
})


// PROFILE OPTIONS
