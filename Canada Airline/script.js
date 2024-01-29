// all of the possible reviews
const reviews = [
  {
      id: 1,
      name: "Stephen Chef Curry",
      job: "Air Canada Chef",
      img: "https://phantom-marca.unidadeditorial.es/1c7e80b512d7b2c326e7a684e3d976af/resize/828/f/jpg/assets/multimedia/imagenes/2023/07/13/16892703264593.png",
      text: "As a member of Air Canada's customer service team, I take pride in ensuring every passenger's experience is exceptional. It's a pleasure to be part of a team dedicated to making travel seamless and enjoyable."
  },
  {
      id: 2,
      name: "Klay Thompson",
      job: "Air Canada Pilot ",
      img: "https://sportshub.cbsistatic.com/i/r/2023/12/21/13b65f1d-0914-4944-af32-0d9eb8b6cf34/thumbnail/1200x675/bb57dee2cfc263b6f77db5f64af69722/klay-thompson-still-2023.png",
      text: "Having flown as a pilot with Air Canada for several years, I can confidently say our commitment to safety and professionalism is unmatched. It's an honor to lead flights knowing our passengers are in good hands."
  },
  {
      id: 3,
      name: "Draymond Green",
      job: "Air Canada Engineer",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/240116110354-01-golden-state-warriors-memphis-grizzlies-011524.jpg?c=16x9&q=h_833,w_1480,c_fill",
      text: "As an engineer at Air Canada, I take pride in our team's commitment to maintaining top-notch aircraft performance, ensuring passengers experience safe and reliable travels."
  },
  {
      id: 4,
      name: "Jonathan Kuminga",
      job: "Air Canada Flight Attendant",
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630228.png",
      text: "As a flight attendant at Air Canada, I'm committed to ensuring passengers have a comfortable and pleasant journey. Being part of a team that prioritizes passenger well-being makes every flight rewarding." 
  },
  
     
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const slideshowBtn = document.querySelector(".slideshow")

let currentItem = 0;
let ss = false;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// displays reviews/person
function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// starts slideshow of reviews
function startSlideshow() {
  slideshowInterval = setInterval(() => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    ss = true;
    showPerson();
  }, 5000); // 5s
}
//stop slideshow
function stopSlideshow() {
  clearInterval(slideshowInterval);
}

nextBtn.addEventListener("click", function () {
  if (ss == true){ // lets user take control when slideshow in effect
      stopSlideshow();
  }
  currentItem++;
  if (currentItem > reviews.length - 1) {
      currentItem = 0; 
      // restarts slideshow from beginning
  }
  showPerson();
});

prevBtn.addEventListener("click", function () {
  if (ss == true){
      stopSlideshow();
  }
  currentItem--;
  if (currentItem < 0) {
      currentItem = reviews.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener("click", function () {
  if (ss == true){
      stopSlideshow();
  }
  currentItem = Math.floor(Math.random() * reviews.length); // generates random reviews, taken from previous review page
  showPerson();
});

slideshowBtn.addEventListener("click", function () {
  startSlideshow();
});

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode'); // dark mode function, taken from previous review page
  // display the text depending on which button
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
});

    

const traditional = document.getElementById('traditional');
traditional.addEventListener("click", function () {
  document.querySelector('main').style.backgroundColor = 'red';
  document.getElementById('text').style.color = 'white';
  const nav = document.querySelector('nav');
  nav.style.backgroundColor = 'white';
  nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  nav.style.backdropFilter = 'blur(10px)';
  

  const navLinks = document.querySelectorAll('.links li button');
  navLinks.forEach(function (link) {
    link.style.color = 'black';
  });
});




document.addEventListener('DOMContentLoaded', function () {
  const colorButton = document.getElementById('color');

  // Different arrays of colors for the whole page
  const mainColors = ['#F29C94', '#c9ada7', '#a3c9a8', '#BFB0A3', '#E68465', '#E84A3F', '#E65C6C']; 
  const navColors = ['#A63C3C', '#BFB0A3', '#F29C94', '#5CDCE6', '#E3C8E6', '#A2A7E8', '#E6AD96']; 
  const linkColors = ['#F29C94', '#590C13', '#F27272', '#3FEBE4', '#C4EEEF'];
  const textColor = ['#E4EBE6', '#3FEBAE', '#000', '#3FEBAE'];

  colorButton.addEventListener('click', function () {
    // random indices for each array
    const mainIndex = Math.floor(Math.random() * mainColors.length);
    const navIndex = Math.floor(Math.random() * navColors.length);
    const linkIndex = Math.floor(Math.random() * linkColors.length);
    const textIndex = Math.floor(Math.random() * textColor.length);

    document.querySelector('main').style.backgroundColor = mainColors[mainIndex];
    document.getElementById('text').style.color = textColor[textIndex];
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = navColors[navIndex];
    nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    nav.style.backdropFilter = 'blur(10px)';

    const navLinks = document.querySelectorAll('.links li button');
    navLinks.forEach(function (link) {
      link.style.color = linkColors[linkIndex];
    });
  });
});


// counter

document.addEventListener('DOMContentLoaded', function() {
  var counter = 0;
  var counterDisplay = document.querySelector('.counter h1');

  // func to update display
  function updateCounter() {
    counterDisplay.textContent = counter;
    if (counter == 0){
      counterDisplay.style.color = 'black'
    }
    else if (counter > 0){
      counterDisplay.style.color = 'white';
    }
    else{
      counterDisplay.style.color = 'red';
    }
  }

  var likeBtn = document.getElementById('like');
  var dislikeBtn = document.getElementById('dislike');
  var resetBtn = document.getElementById('reset');
  //counter for like, dislike, and reset

  // increases by 2
  likeBtn.addEventListener('click', function() {
    counter += 2;
    updateCounter();
  });

  // decreases by 1
  dislikeBtn.addEventListener('click', function() {
    counter--;
    updateCounter();
  });

  // reset
  resetBtn.addEventListener('click', function() {
    counter = 0;
    updateCounter();
  });
});


// Boarding pass generator

// All boarding passes
const randomBoardingPasses = [
  {
    airline: 'Air Canada',
    flight: 'AC982',
    departure: 'Atlanta',
    destination: 'Brazil',
    gate: '6E',
    message: "Contact us on aircanadafreeflight@yahoo.ca"
  },
  {
    airline: 'Air Canada',
    flight: 'AC614',
    departure: 'South Africa',
    destination: 'Vancouver',
    gate: '1A',
    message: "Contact us on aircanadafreeflight@yahoo.ca"
  },
  {
    airline: 'Air Canada',
    flight: 'AC123',
    departure: 'Vancouver',
    destination: 'Crotia',
    gate: '12B',
    message: 'Contact us on aircanadafreeflight@yahoo.ca'
  },
  {
    airline: 'Air Canada',
    flight: 'AC124',
    departure: 'Mexico',
    destination: 'Dubai',
    gate: '9A',
    message: 'Contact us on aircanadafreeflight@yahoo.ca'
  },
  {
    airline: 'Air Canada',
    flight: 'AC876',
    departure: 'Dubai',
    destination: 'Philiphines',
    gate: '10A',
    message: 'Contact us on aircanadafreeflight@yahoo.ca'
  },
 
];

// get access to random pass
function getRandomBoardingPass() {
  const randomIndex = Math.floor(Math.random() * randomBoardingPasses.length);
  return randomBoardingPasses[randomIndex];
}

// display random pass
function displayRandomBoardingPass() {
  const randomPass = getRandomBoardingPass();
  document.getElementById('airlineName').textContent = randomPass.airline;
  document.getElementById('flightNumber').textContent = `Flight: ${randomPass.flight}`;
  document.getElementById('departure').textContent = `Departue: ${randomPass.departure}`;
  document.getElementById('destination').textContent = `Destination: ${randomPass.destination}`;
  document.getElementById('gate').textContent = `Gate: ${randomPass.gate}`;
  document.getElementById('message').textContent = ` ${randomPass.message}`;
}

document.getElementById('animation').addEventListener('click', function() {
  const boardingPass = document.querySelector('.boarding-pass');

  // changing boarding pass visibility and position
  if (boardingPass.style.opacity === '0') {
    displayRandomBoardingPass(); 
    boardingPass.style.top = '50px';
    boardingPass.style.opacity = '1';
  } else {
    boardingPass.style.top = '-300px'; 
    boardingPass.style.opacity = '0';
  }
});
function hideBoardingPass() {
  const boardingPass = document.querySelector('.boarding-pass');
  boardingPass.style.top = '-300px'; 
  boardingPass.style.opacity = '0';
}

// closes boarding pass if you click on the 'x' symbol
document.getElementById('closeButton').addEventListener('click', hideBoardingPass);