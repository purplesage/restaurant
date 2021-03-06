import clock from './assets/images/clock.jpg';
import quote from './assets/images/quote.jpg';
import delivery from './assets/images/delivery.jpg';

const homeContent = () => {

let contentDiv = document.createElement('div');

let clockImage = new Image();
clockImage.src = clock;

let quoteImage = new Image();
quoteImage.src = quote;

let deliveryImage = new Image();
deliveryImage.src = delivery;



let redDiv = document.createElement('div');
redDiv.innerHTML = `<h4>Hours</h4> <p>Mon-thursday: 8:00am - 8:00pm<br>Fri-Sunday: 8:00am - 11:00pm</p>`;
redDiv.appendChild(clockImage);
redDiv.classList = "red-div"

let whiteDiv = document.createElement('div');
whiteDiv.innerHTML = `<p>This is, by far, the best restaurant i've ever been to. It just feels like home.The food is awsome, the personal is awsome, this place is awsome.<br><span>-Andrea Smiles</span></p>`;
whiteDiv.appendChild(quoteImage);
whiteDiv.classList = "white-div";


let yellowDiv = document.createElement('div');
yellowDiv.innerHTML = `<h4>Delivery</h4><p>Use our delivery service and get delicious food wherever you are!</p>`;
yellowDiv.appendChild(deliveryImage);
yellowDiv.classList = "yellow-div";


contentDiv.appendChild(redDiv);
contentDiv.appendChild(whiteDiv);
contentDiv.appendChild(yellowDiv);
contentDiv.classList = 'home-content';
contentDiv.setAttribute('id', 'content');

return contentDiv

};



export {homeContent};