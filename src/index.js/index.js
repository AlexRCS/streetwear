
// THEME BUTTON
const themeBtn = document.getElementById('theme-btn')
themeBtn.addEventListener('click', () => {
    const themeIcon = document.querySelector('.fa-circle-half-stroke')
    if (themeIcon) {
        themeIcon.classList.toggle('dark')
    }
})


// PROFILE OPTIONS
const profileBtn = document.getElementById('profile-btn')
profileBtn.addEventListener('click', () => {
    const profileOptions = document.querySelector('.profile-options')
    if (profileOptions) {
        profileOptions.classList.toggle('open')

        const profileItems = document.querySelectorAll('.profile-item')
        profileItems.forEach(e => {
            e.classList.toggle('show')

            // const openProfile = document.querySelector('.open')
        });
        document.addEventListener('click', (event) => {
            if (profileOptions && !profileOptions.contains(event.target) && !profileBtn.contains(event.target)) {
                profileOptions.classList.remove('open')

                const showBtns = document.querySelectorAll('.show')
                showBtns.forEach(e => {
                    e.classList.remove('show')
                })
            }
        });
    }
})
