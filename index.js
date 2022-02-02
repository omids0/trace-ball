const myballEL = document.getElementById('myball')
const systemBallEl = document.getElementById('pcBall')

let interval;
let both = 0


let windowSize = window.innerWidth
let random = Math.floor(Math.random() * windowSize/2)

function setPosition() {
      let left = parseInt(window.getComputedStyle(systemBallEl).getPropertyValue('left'))
      systemBallEl.style.left = left + random + 'px'

      
      let top = parseInt(window.getComputedStyle(systemBallEl).getPropertyValue('top'))
      systemBallEl.style.top = top + random + 'px'

      console.log(random);
}

function moveLeft() {
      let left = parseInt(window.getComputedStyle(myballEL).getPropertyValue('left'))
      myballEL.style.left = left - 2 + 'px'
}

function moveRight() {
      let left = parseInt(window.getComputedStyle(myballEL).getPropertyValue('left'))
      myballEL.style.left = left + 2 + 'px'
}

function moveTop() {
      let top = parseInt(window.getComputedStyle(myballEL).getPropertyValue('top'))
      myballEL.style.top = top - 2 + 'px'
}

function moveDown() {
      let top = parseInt(window.getComputedStyle(myballEL).getPropertyValue('top'))
      myballEL.style.top = top + 2 + 'px'
}

setPosition()

window.addEventListener('keydown', (e) => {
      
      console.log(e.key);
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