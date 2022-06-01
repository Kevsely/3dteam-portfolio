// DOM Elements
particlesLayer = document.getElementById("particles-js")
panoramaPlayer = document.getElementById("panorama-player")
// console.log(panoramaPlayer)

// Global Variables
const maxIdleTime = 10 //in seconds
let currentIdleTime
let idleTimer

// Display or Hide particles' layer
function toggleParticles() {
  if (!particlesLayer.hidden) {
    particlesLayer.hidden = true
    resetIdleTimer()
  } else {
    particlesLayer.hidden = false
    resetIdleTimer()
  }
}

// Reset the idle timer 
function resetIdleTimer() {  
  clearInterval(idleTimer)
  currentIdleTime = 0
  if(particlesLayer.hidden) idleTimer = setInterval(checkIdleTime, 1000)
}

// Check if the timer is at 4 seconds of idle time
function checkIdleTime() {
  currentIdleTime++
  console.log(`You're inactive since ${currentIdleTime} seconds`)
  if (currentIdleTime === maxIdleTime) toggleParticles()
}

// Event Listeners
particlesLayer.addEventListener("click", toggleParticles)
window.addEventListener("load", resetIdleTimer)
window.addEventListener("mousemove", resetIdleTimer)
window.addEventListener("mousedown", resetIdleTimer)
window.addEventListener("touchstart", resetIdleTimer)
window.addEventListener("click", resetIdleTimer)
window.addEventListener("keypress", resetIdleTimer)
panoramaPlayer.contentWindow.addEventListener("load", resetIdleTimer)
panoramaPlayer.contentWindow.addEventListener("mousemove", resetIdleTimer)
panoramaPlayer.contentWindow.addEventListener("mousedown", resetIdleTimer)
panoramaPlayer.contentWindow.addEventListener("touchstart", resetIdleTimer)
panoramaPlayer.contentWindow.addEventListener("click", resetIdleTimer)
panoramaPlayer.contentWindow.addEventListener("keypress", resetIdleTimer)

//On Load
particlesJS.load('particles-js', 'assets/particles/particles.config.json');