import Parallax from 'parallax-js'

// Parallax banner
var sceneBan = document.querySelector('.parallax_banner');
var sceneSer = document.querySelector('.parallax_service');

if(window.screen.width >= 1199){
    var parallaxInstanceBanner = new Parallax(sceneBan);
    var parallaxInstanceService = new Parallax(sceneSer);
}