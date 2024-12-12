
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
let interval;

function changeBanner(newBanner, direction = 'right') {
    const banner = document.querySelector('.banner');

    if (direction === 'right') {
        banner.classList.add('slide-out-left');
    } else {
        banner.classList.add('slide-out-right');
    }

    setTimeout(() => {
        banner.src = `https://placehold.co/600x400?text=Banner${newBanner}`
        banner.classList.remove('slide-out-left', 'slide-out-right');

        if (direction === 'right') {
            banner.classList.add('slide-in-right');
        } else {
            banner.classList.add('slide-in-left');
        }
        setTimeout(() => {
            banner.classList.remove('slide-in-right', 'slide-in-left');
        }, 200);

        currentBanner = newBanner;
        autoBannerCounter(newBanner);
        resetInterval(interval);
    }, 200);
}

function clickBannerCounter(){
    const allCounters = document.querySelectorAll('.banner-calc i');

    allCounters.forEach((counter, index) => {
        counter.addEventListener('click', () => {
            if (index + 1 !== currentBanner) {
                changeBanner(index + 1);
            }
        });
    });
}


function autoBannerCounter(newBanner) {
    const currentCounter = document.querySelector('.fa-circle-dot')
    const newCounter = document.getElementById(`calc-${newBanner}`)
    
    if (currentCounter) {
        currentCounter.classList.remove('fa-circle-dot');
        currentCounter.classList.add('fa-circle');
    }
    if (newCounter) {
        newCounter.classList.remove('fa-circle');
        newCounter.classList.add('fa-circle-dot');

        const counterContainer = document.querySelector('.banner-calc');
        counterContainer.classList.add('active')
        setTimeout(() => {
            counterContainer.classList.remove('active')
        }, 1000)
    }
}


const rightBannerBtn = document.querySelector('#right-banner-btn');
const leftBannerBtn = document.querySelector('#left-banner-btn');


rightBannerBtn.addEventListener('click', function () {
    let newBanner = currentBanner < 6 ? currentBanner + 1 : 1;
    changeBanner(newBanner, 'right');
});

leftBannerBtn.addEventListener('click', function () {
    let newBanner = currentBanner > 1 ? currentBanner - 1 : 6;
    changeBanner(newBanner, 'left');
});


function bannerInterval() {
    interval = setInterval(function () {
        let newBanner = currentBanner < 6 ? currentBanner + 1 : 1;
        changeBanner(newBanner, 'right');
    }, 6000);
}

function resetInterval() {
    clearInterval(interval);
    bannerInterval();
}
bannerInterval();
clickBannerCounter();


//PRODUCTS GALERY

let productId = 1;

const productContainer = document.querySelectorAll('.product-container')
const product = document.querySelector(`#product-${productId}`)

const rightProductBtn = document.querySelector('#right-product-btn');
const leftProductBtn = document.querySelector('#left-product-btn');



