'use strict';

const getData = () => {

    fetch('https://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => {console.log(data);
         let activity = data.activity;
         let dayWord = document.getElementById("dayWord");
         return dayWord.textContent = activity;
        })
}
getData();


const [red, green, blue] = [200, 233, 121]
let bannerChange = document.getElementById('main_nav')
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
const galleryIcon = document.getElementById('galleryicon');
const bchIcon = document.getElementById('bchicon')

projectsIcon.addEventListener('click', () => {
  location.hash = '#' + 'projects'
});

aboutMeIcon.addEventListener('click', () => {
  location.hash = '#' + 'aboutme'
});

skillsIcon.addEventListener('click', () => {
  location.hash = '#' + 'skills'
});

galleryIcon.addEventListener('click', () => {
  window.location.href = './gallery.html'
});

bchIcon.addEventListener('click', () => {
  window.location.href = 'http://www.bc.fi/en'
});

const contactSubmit = document.getElementById('contact-submit');

contactSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  submitContact();

});


function submitContact() {

  console.log("Submit working")

}







