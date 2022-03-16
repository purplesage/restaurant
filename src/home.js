const homeContent = () => {

let contentDiv = document.createElement('div');

let redDiv = document.createElement('div');
let redDivContent = document.createElement('p');
redDivContent.textContent = "mock content";
redDiv.appendChild(redDivContent);
redDiv.classList = "red-div"

let whiteDiv = document.createElement('div');
let whiteDivContent = document.createElement('p');
whiteDivContent.textContent = "mock content";
whiteDiv.appendChild(whiteDivContent);
whiteDiv.classList = "white-div"


let yellowDiv = document.createElement('div');
let yellowDivContent = document.createElement('p');
yellowDivContent.textContent = "mock content";
yellowDiv.appendChild(yellowDivContent);
yellowDiv.classList = "yellow-div"


contentDiv.appendChild(redDiv);
contentDiv.appendChild(whiteDiv);
contentDiv.appendChild(yellowDiv);
contentDiv.classList = 'home-content';
contentDiv.setAttribute('id', 'content');

return contentDiv

};



export {homeContent};