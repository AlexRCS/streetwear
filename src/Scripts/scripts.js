
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

// BANNER CHANGE

let currentBanner = 1;

function changeBanner(newBanner) {
    const lastBanner = document.querySelector('.last-banner');
    const nextBanner = document.querySelector('.next-banner');
    const banner = document.querySelector('.current-banner');
    
    const last = newBanner - 1 < 1 ? 6 : newBanner - 1;
    const next = newBanner + 1 > 6 ? 1 : newBanner + 1;
    
    banner.src = `https://placehold.co/600x400?text=Banner${newBanner}`;
    lastBanner.src = `https://placehold.co/600x400?text=Banner${last}`;
    nextBanner.src = `https://placehold.co/600x400?text=Banner${next}`;

    currentBanner = newBanner;

    changeBannerCounter(newBanner);
    resetInterval(interval);
}



function changeBannerCounter(newBanner) {
    const currentCounter = document.querySelector('.fa-circle-dot')
    const newCounter = document.getElementById(`calc-${newBanner}`)
    const allCounters = document.querySelectorAll('.banner-calc i')

    allCounters.forEach((counter, element) => {
        counter.addEventListener('click', () => {
            if (element + 1 !== currentCounter)
                changeBanner(element + 1)
        });
    });

    if (currentCounter) {
        currentCounter.classList.remove('fa-circle-dot');
        currentCounter.classList.add('fa-circle');
    }
    if (newCounter) {
        newCounter.classList.remove('fa-circle');
        newCounter.classList.add('fa-circle-dot');
    }
}


const rightBannerBtn = document.querySelector('#right-banner-btn');
const leftBannerBtn = document.querySelector('#left-banner-btn');

rightBannerBtn.addEventListener('click', function () {
    let newBanner = currentBanner < 6 ? currentBanner + 1 : 1;
    changeBanner(newBanner);
})

leftBannerBtn.addEventListener('click', function () {
    let newBanner = currentBanner > 1 ? currentBanner - 1 : 6;
    changeBanner(newBanner);
})


function bannerInterval() {
    interval = setInterval(function () {
        let newBanner = currentBanner < 6 ? currentBanner + 1 : 1;
        changeBanner(newBanner);
    }, 6000);
}

function resetInterval() {
    clearInterval(interval);
    bannerInterval();
}
bannerInterval();
