'use strict';

const [red, green, blue] = [200, 233, 121]
let bannerChange = document.getElementById('main_nav');
let topButton = document.getElementById('top');

topButton.addEventListener('click', () => {
  window.scrollTo(0,0);
});

topButton.hidden = true;


window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red, green, blue]
  bannerChange.style.backgroundImage = 'none'
  bannerChange.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  if (y > 1) {
  topButton.hidden = false;
  }
  else {
    topButton.hidden = true;
  }
})

const projectsIcon = document.getElementById('projectsicon');
const aboutMeIcon = document.getElementById('aboutmeicon');
const skillsIcon = document.getElementById('skillsicon');
const homeIcon = document.getElementById('homeicon');
const bchIcon = document.getElementById('bchicon')

projectsIcon.addEventListener('click', () => {
  location.href = 'index.html#projects';
});

aboutMeIcon.addEventListener('click', () => {
  location.href = 'index.html#aboutme';
});

skillsIcon.addEventListener('click', () => {
  location.href = 'index.html#skills';
});

homeIcon.addEventListener('click', () => {
  window.location.href = './index.html'
});

bchIcon.addEventListener('click', () => {
  window.location.href = 'http://www.bc.fi/en'
});
