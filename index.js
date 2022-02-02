const myballEL = document.getElementById('myball')
const systemBallEl = document.getElementById('pcBall')

let interval;
let both = 0

let windowSize = window.innerWidth
let random = Math.floor(Math.random() * 500)

function setPosition() {
      let left = parseInt(window.getComputedStyle(systemBallEl).getPropertyValue('left'))
      systemBallEl.style.left = left + random + 'px'


      let top = parseInt(window.getComputedStyle(systemBallEl).getPropertyValue('top'))
      systemBallEl.style.top = top + random + 'px'
}

function tracing() {
      let pcBallLeft = parseInt(window.getComputedStyle(systemBallEl).getPropertyValue('left'))
      let pcBallTop = parseInt(window.getComputedStyle(systemBallEl).getPropertyValue('top'))

      let left = parseInt(window.getComputedStyle(myballEL).getPropertyValue('left'))
      let top = parseInt(window.getComputedStyle(myballEL).getPropertyValue('top'))
      let leftMinus = pcBallLeft - left
      let topMinus = top - pcBallTop

      if (leftMinus < 50 && topMinus < 50) {
            window.location.reload()
            alert('YOU WON!')
      }
}

function moveLeft() {
      let left = parseInt(window.getComputedStyle(myballEL).getPropertyValue('left'))
      myballEL.style.left = left - 2 + 'px'
      tracing()
}

function moveRight() {
      let left = parseInt(window.getComputedStyle(myballEL).getPropertyValue('left'))
      myballEL.style.left = left + 2 + 'px'
      tracing()
}

function moveTop() {
      let top = parseInt(window.getComputedStyle(myballEL).getPropertyValue('top'))
      myballEL.style.top = top - 2 + 'px'
      tracing()
}

function moveDown() {
      let top = parseInt(window.getComputedStyle(myballEL).getPropertyValue('top'))
      myballEL.style.top = top + 2 + 'px'
      tracing()
}

setPosition()

window.addEventListener('keydown', (e) => {
      if (both == 0) {
            both++;
            if (e.key === 'ArrowLeft') {
                  interval = setInterval(moveLeft, 1)
            }

            if (e.key === 'ArrowRight') {
                  interval = setInterval(moveRight, 1)
            }

            if (e.key === 'ArrowUp') {
                  interval = setInterval(moveTop, 1)
            }

            if (e.key === 'ArrowDown') {
                  interval = setInterval(moveDown, 1)
            }
      }
})

window.addEventListener('keyup', (e) => {
      clearInterval(interval)
      both = 0
})