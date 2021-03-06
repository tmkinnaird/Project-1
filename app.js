// Create the modal and Carousel of backgrounds
const beginButton = document.querySelector('.begin-game');
const modal = document.querySelector(".modal");
const carousel = document.querySelector('.carousel');
const carouselImage = document.querySelector('.carousel img');
const carouselNext = document.querySelector('.carousel-next');
const carouselPrevious = document.querySelector('.carousel-previous');
const carouselSelect = document.querySelector('.carousel-select');
const getStarted = document.querySelector('.get-started');
// const resetButton = document.querySelector('.reset');
// const upgradeButton = document.querySelector('.upgrade');
const castButton = document.querySelector('.cast');
const catchFishModal = document.querySelector('#catch-fish');
const myFish = document.querySelector('#myFish');
const compFish = document.querySelector('#computer-fish');


const backgroundImage = [
	'https://images.trvl-media.com/hotels/36000000/35550000/35549800/35549771/34e9340e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium',
	'https://d3fldh011ywsk8.cloudfront.net/wp-content/uploads/2019/02/icefishing-1024x678.jpg',
	'https://www.visitbrazosport.com/wp-content/uploads/2019/02/Bastrop-Bayou-Public-Fishing-Area-2.jpg',
	'https://wavedancercharters.com/wp-content/uploads/2018/12/deep-sea-fishing-charter-1024x1024.jpeg',
	'https://www.sandpiperportaransas.com/wp-content/uploads/2014/09/Gulf-Fishing-at-Night.jpg',
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
let compFishCount = 0;

// Reset button 
// Set fish caught to 0, number of computer fish caught to 0
// Reset current action to null

// Cast button 
// Catch fish at a random interval 
// Catch fish and the counter goes up
// Computer casts and fish counter goes up if caught

// Upgrade button
// When you get catch enough fish, you can upgrade your gear

const smallFish = ['bluegill', 'crappie', 'bass'];
// const bigFish = ['halibut', 'yellowfin', 'swordfish'];




class Fish {
    constructor(weight, length, type, percentage) {
        this.weight = weight;
        this.length = length;
        this.type = type;
        this.percentage = percentage;
    }
}


// class Gear {
//     constructor(cost, usp){
//         this.cost = cost;
//         this.usp = usp;
//     }
// }
// const deepSeaFish = ['halibut', 'yellowfin', 'swordfish'];

//  class Boat extends Gear {
//      constructor(cost, usp) {
//          super(cost, usp)
//      }
//      deepSeaCast(){s

//      }
//  }
 class Comp {
    constructor(weight, length, type, percentage) {
        this.weight = weight;
        this.length = length;
        this.type = type;
        this.percentage = percentage;
    }
 }
 let newComp = new Comp(8, 10, 6, 15);
 
 const checkWin = () => {
    if (myFish.innerText == '10') {
        catchFishModal.innerHTML = `
        <h1>You Win!</h1>
        `
        console.log('won');
        } else if (compFish.innerText == '10') {
        catchFishModal.innerHTML = `
        <h1>The Computer Won!</h1>
        `
    }
 }
 const compCast = () => {
    
    const randomWeight = Math.floor(Math.random()* 10);
    const randomLength = Math.floor(Math.random()* 10);
    const randomType = smallFish[Math.floor(Math.random()* 3)];
    const randomPercentage = Math.floor(Math.random()* 7);
        let newFish = new Fish(randomWeight, randomLength, randomType, randomPercentage);
        console.log(newFish);
         let random = Math.floor(Math.random()* 10);
         if (random <= newFish.percentage) {
           catchFishModal.innerHTML = `
                <h1>The Computer Caught Dinner</h1> 
                <p>${newFish.type} weight:${newFish.weight}lb length:${newFish.length}in</p>
            `
            
                compFishCount+=1;
                console.log(myFish);
            compFish.innerText = compFishCount;
         } else {
             catchFishModal.innerHTML = `<h1>Yes! The Computer's line broke</h1>`
           
             console.log('nope');
         }
}
const cast = () => {
   
catchFishModal.classList.remove('open');
const randomWeight = Math.floor(Math.random()* 10);
const randomLength = Math.floor(Math.random()* 10);
const randomType = smallFish[Math.floor(Math.random()* 3)];
const randomPercentage = Math.floor(Math.random()* 10);
    let newFish = new Fish(randomWeight, randomLength, randomType, randomPercentage);
    console.log(newFish);
     let random = Math.floor(Math.random()* 7);
     if (random <= newFish.percentage) {
       catchFishModal.innerHTML = `
            <h1>You Caught Dinner</h1> 
            <p>${newFish.type} weight:${newFish.weight}lb length:${newFish.length}in</p>
        `
        
            totalFish+=1;
            console.log(myFish);
        myFish.innerText = totalFish;
     } else {
         catchFishModal.innerHTML = `<h1>No Good, you lost your lure!</h1>`
       
         console.log('nope');
     }
     catchFishModal.classList.toggle('open');
    setTimeout(() => {
        compCast(); 
        checkWin(castButton.removeEventListener);
    },  2200);
  
 }


 
 beginButton.addEventListener('click', toggleModal);
 carouselNext.addEventListener('click', changeSlideNext);
 carouselPrevious.addEventListener('click', changeSlidePrevious);
 carouselSelect.addEventListener('click', updateBackground);
 getStarted.addEventListener('click', openCarousel);
 // resetButton.addEventListener('click' , resetGame);
 // upgradeButton.addEventListener('click', upgrade);
 castButton.addEventListener('click', cast);
 