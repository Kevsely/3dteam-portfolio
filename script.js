// DOM Elements
particlesLayer = document.getElementById("particles-layer")
leftMenu = document.getElementById("left-menu")
rightMenu = document.getElementById("right-menu")

// Global Variables
const maxIdleTime = 10 //in seconds
let currentIdleTime
let idleTimer

// Display or Hide particles' layer
// Make the side menu a bit darker
function toggleParticles() {
  particlesLayer.hidden = !particlesLayer.hidden
  resetIdleTimer()

  // leftMenu.style.backgroundColor = `rgba(0, 0, 0, 0.${(!particlesLayer.hidden) ? "1" : "25"})`
  // rightMenu.style.backgroundColor = `rgba(0, 0, 0, 0.${(!particlesLayer.hidden) ? "1" : "25"})`
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
  // console.log(`You're inactive since ${currentIdleTime} seconds`)
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

//On Load
// 1 --------------
// create the panorama player with the container
pano=new pano2vrPlayer("panorama-player");
// add the skin object
skin=new pano2vrSkin(pano);
// load the configuration
window.addEventListener("load", function() {
  pano.readConfigUrlAsync("background-panorama/pano.xml");
});

// 2 -------------
particlesJS.load('particles-layer', 'assets/particles/particles.config.json');