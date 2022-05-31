// DOM Elements
particlesLayer = document.getElementById("particles-js")

// Global Variables
const maxIdleTime = 5 //in seconds
let currentIdleTime
let idleTimer

// Display or Hide particles' layer
function toggleParticles() {
  if (!particlesLayer.hidden) {
    particlesLayer.hidden = true
    // Reset the idle timer
    clearInterval(idleTimer)
    currentIdleTime = 0
    idleTimer = setInterval(checkIdleTime, 1000)
  } else {
    particlesLayer.hidden = false
    clearInterval(idleTimer)
    currentIdleTime = 0
  }
}

// Check if the timer is at 4 seconds of idle time
function checkIdleTime() {
  currentIdleTime++
  if (currentIdleTime === maxIdleTime) toggleParticles()
}

// Event Listeners
particlesLayer.addEventListener("click", toggleParticles)

//On Load
particlesJS.load('particles-js', 'assets/particles/particles.config.json');