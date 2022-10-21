import Swiper, {Autoplay} from 'swiper'

Swiper.use([Autoplay]);

const sliderBanner = new Swiper('.slider_banner',{
    speed: 1500,
    autoplay: {
        delay: 5000,
    },
})