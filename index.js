const myballEL = document.getElementById('myball')
let interval;
let both = 0

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