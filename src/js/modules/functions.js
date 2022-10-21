export function isWebp() {
  // Проверка поддержки webp
  function testWebp(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML 
  testWebp(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}

export function windowPopup() {
  const burgerBtn = document.querySelector('.header__burger-btn')
  const popupMenu = document.querySelector('.popup-menu')

  burgerBtn.onclick = () => {
    popupMenu.classList.add('popup-menu_show')
  }

  popupMenu.onclick = (event) => {
    const target = event.target
    const wrapper = target.classList.contains('popup-menu')
    const closeBtn = target.closest('button')

    if (wrapper || closeBtn) {
      popupMenu.classList.remove('popup-menu_show')
    }
  }
}

// Якорь
export function anchor(){
  
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
  
}

export default class Burger{
	constructor(node){
		this.CLASS_OPENED = "hamburger--opened"
		this.CLASS_CLOSED = "hamburger--closed"
		this.EVENT_OPEN = new CustomEvent("burgerOpen", {bubbles: true})
		this.EVENT_CLOSE = new CustomEvent("burgerClose", {bubbles: true})
		this.currentState = "closed"
		this.elem = node
		this.toggleState = this.toggleState.bind(this)
		this.elem.addEventListener('click', this.toggleState)
	}

	toggleState(){
		if (this.currentState == "closed")
			this.open()
		else
			this.close()
	}

	open(){
		this.currentState = "opened"
		this.elem.classList.add(this.CLASS_OPENED)
		this.elem.classList.remove(this.CLASS_CLOSED)
		this.elem.dispatchEvent(this.EVENT_OPEN)
	}

	close(){
		this.currentState = "closed"
		this.elem.classList.add(this.CLASS_CLOSED)
		this.elem.classList.remove(this.CLASS_OPENED)
		this.elem.dispatchEvent(this.EVENT_CLOSE)
	}

	addAction(handler,once=false){
		this.elem.addEventListener('click', handler, {once: once})
	}

	removeAction(handler){
		this.elem.removeEventListener('click', handler)
	}
}