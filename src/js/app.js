import * as flsFunctions from './modules/functions.js'
import * as slider from './modules/slider.js'
import * as parallax from './modules/parallax.js'

import Burger from "./modules/functions.js"

flsFunctions.isWebp()
flsFunctions.anchor()
// flsFunctions.windowPopup()

const HEADER_BURGER = new Burger(document.getElementById('hamburger'))