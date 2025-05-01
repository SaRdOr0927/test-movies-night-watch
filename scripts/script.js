let tv = new Swiper(`.trend__tv-slider`, {
    slidesPerView: 1,
    spaceBetween: 27,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    navigation: {
        nextEl: `.trend__tv-slider .swiper-button-next`,
        prevEl: `.trend__tv-slider .swiper-button-prev`,
    },
    breakpoints: {
        1440: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 5,
        },
        960: {
            slidesPerView: 4,
        },
        720: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        },
    }
});

let awaited = new Swiper(`.popular__actors-slider`, {
    slidesPerView: 1,
    spaceBetween: 27,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    navigation: {
        nextEl: `.popular__actors-slider .swiper-button-next`,
        prevEl: `.popular__actors-slider .swiper-button-prev`,
    },
    breakpoints: {
        1440: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 5,
        },
        960: {
            slidesPerView: 4,
        },
        720: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        },
    }
});




const headerBtn = document.querySelector('.header__btn')
    const headerItems = document.querySelector('.header__items')
    const headerAbs = document.querySelector('.header__abs')


headerBtn.addEventListener('click', (e) => {
    e.preventDefault()
    headerBtn.classList.toggle('active')
    headerItems.classList.toggle('active')
    headerAbs.classList.toggle('active')
    body.classList.toggle('active')
}) 

headerAbs.addEventListener('click', (e) => {
    if(e.target == e.currentTarget) {
    headerBtn.classList.toggle('active')
    headerAbs.classList.toggle('active')
    headerItems.classList.remove('active')
    }
})







const url = "https://kinopoiskapiunofficial.tech/"
const hostName = "X-API-KEY"
const hostValue = "3e8324a1-6d50-48f8-a88b-9c42d9d565e1"

class Kino {
    constructor () {

    }

    fOpen = async () => {
        let response = await fetch(url,{
            headers: {
                [hostName]: hostValue
            }
        })

        if(response.ok) return response.json()
            else throw new Error(`Connect access to ${url}`);
            
    }
}
const db = new Kino()
console.log(db.fOpen())