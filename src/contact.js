import theMap from './assets/images/ashe.png'; //this will be changed.
const contactContent = () => {

    let contentDiv = document.createElement('div');
    
    let telephone = document.createElement('p');
    telephone.textContent = "(0212) 271 70 85";

    let adress = document.createElement('p');
    adress.textContent = "some random adress";

    let map = new Image();
    map.src = theMap;

    contentDiv.appendChild(telephone);
    contentDiv.appendChild(adress);
    contentDiv.appendChild(map);

    contentDiv.classList = 'contact-content';
    contentDiv.setAttribute('id', 'content');
    
    return contentDiv
    
    };

    export {contactContent};