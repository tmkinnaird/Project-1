// Create the modal and Carousel of backgrounds
const beginButton = document.querySelector('.begin-game');
const modal = document.querySelector(".modal");
const carousel = document.querySelector('.carousel');
const carouselImage = document.querySelector('.carousel img');
const carouselNext = document.querySelector('.carousel-next');
const carouselPrevious = document.querySelector('.carousel-previous');
const carouselSelect = document.querySelector('.carousel-select');
const getStarted = document.querySelector('.get-started');
const resetButton = document.querySelector('.reset');
const upgradeButton = document.querySelector('.upgrade');
const castButton = document.querySelector('.cast');
const catchFishModal = document.querySelector('#catch-fish');
const myFish = document.querySelector('#myFish');




const backgroundImage = [
	'https://www.wakegov.com/parks/harrislake/PublishingImages/Fishing%20Pond.jpg',
	'https://d3fldh011ywsk8.cloudfront.net/wp-content/uploads/2019/02/icefishing-1024x678.jpg',
	'https://www.fishingtipsdepot.com/images/lake-fishing.jpg',
	'https://wavedancercharters.com/wp-content/uploads/2018/12/deep-sea-fishing-charter-1024x1024.jpeg',
	'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1473450716/clients/lanecounty/mckenzie_river_drift_boat_fishing_courtesy_of_eugene_cascades_coast_20__efceb4d1-c77e-48ef-bbba-5bbfbcdb6f56.png',
	'https://bassfishinginsider.com/wp-content/uploads/2020/07/fast-bass-boat-big-1.jpeg'
]

let slideIndex = 0;

const toggleModal = () => {
	modal.classList.toggle('open');
}

const updateCarouselImage = () => {
	carouselImage.setAttribute('src', backgroundImage[slideIndex]);
}

updateCarouselImage();

const changeSlideNext = () => {
	if(slideIndex < backgroundImage.length -1) {
		slideIndex++;
	} else {
		slideIndex = 0;
	}
	updateCarouselImage();
}

const changeSlidePrevious = () => {
	if(slideIndex > 0) {
		slideIndex--;
	} else {
		slideIndex = backgroundImage.length -1;
	}
	updateCarouselImage();
}

const updateBackground = () => {
	const body = document.querySelector('body');
	body.style.backgroundImage = `url(${backgroundImage[slideIndex]})`;
	carousel.remove();
}

const openCarousel = () => {
	toggleModal();
	carousel.classList.add('open');
}

// beginButton.addEventListener('click', toggleModal);
// carouselNext.addEventListener('click', changeSlideNext);
// carouselPrevious.addEventListener('click', changeSlidePrevious);
// carouselSelect.addEventListener('click', updateBackground);
// getStarted.addEventListener('click', openCarousel);
// // resetButton.addEventListener('click' , resetGame);
// // upgradeButton.addEventListener('click', upgrade);
// castButton.addEventListener('click', cast);


// Start on functionality 
let action = null;
let totalFish = 0;

// Reset button 
// Set fish caught to 0, number of computer fish caught to 0
// Reset current action to null

// Cast button 
// Catch fish at a random interval 
// Catch fish and the counter goes up
// Computer casts and fish counter goes up

// Upgrade button
// When you get catch enough fish, you can upgrade your gear

const randomWeight = Math.floor(Math.random()* 10);
const randomLength = Math.floor(Math.random()* 10);
const smallFish = ['bluegill', 'crappie', 'bass'];
const bigFish = ['halibut', 'yellowfin', 'swordfish'];
const randomType = smallFish[Math.floor(Math.random() * 3)];;
const randomPercentage = Math.floor(Math.random()* 10);


class Fish {
    constructor() {
        this.weight = randomWeight;
        this.length = randomLength;
        this.type = randomType;
        this.percentage = randomPercentage;
    }
}
let newFish = new Fish()
console.log(newFish);

class Gear {
    constructor(cost, usp){
        this.cost = cost;
        this.usp = usp;
    }
}
const deepSeaFish = ['halibut', 'yellowfin', 'swordfish'];

 class Boat extends Gear {
     constructor(cost, usp) {
         super(cost, usp)
     }
     deepSeaCast(){

     }
 }

 const cast = () => {
     let random = Math.floor(Math.random() *10);
     if (random <= newFish.percentage) {
       catchFishModal.innerHTML = `<h1>You Caught The Fish</h1>`
         catchFishModal.classList.toggle('open');
            totalFish+=1;
        myFish.innerText = totalFish;
     } else {
         catchFishModal.innerHTML = `<h1>You Suck</h1>`
         catchFishModal.classList.toggle('open');
         console.log('You suck');
     }
    
 }
 beginButton.addEventListener('click', toggleModal);
 carouselNext.addEventListener('click', changeSlideNext);
 carouselPrevious.addEventListener('click', changeSlidePrevious);
 carouselSelect.addEventListener('click', updateBackground);
 getStarted.addEventListener('click', openCarousel);
 // resetButton.addEventListener('click' , resetGame);
 // upgradeButton.addEventListener('click', upgrade);
 castButton.addEventListener('click', cast);
 