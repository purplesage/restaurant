import homeImage from './assets/images/ashe.png'; //this will be changed.
let theImage = new Image();
theImage.src = homeImage;

const homeContent = () => {

let contentDiv = document.createElement('div');

let introString = document.createElement('p');
introString.textContent = "intro string";

let introString2 = document.createElement('p');
introString2.textContent = "intro string(2)";

let orderString = document.createElement('p');
orderString.textContent = "order string";

let theImage = new Image();
theImage.src = homeImage;

contentDiv.appendChild(introString);
contentDiv.appendChild(introString2);
contentDiv.appendChild(theImage);
contentDiv.appendChild(orderString);
contentDiv.classList = 'content';

return contentDiv

};



export {homeContent};