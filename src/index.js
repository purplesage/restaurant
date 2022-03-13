import homeContent from './home.js';
import './styles/index.scss';


//*Navigation DOM elements:----------


const topNavigation = (() => {

    const rootDiv = document.getElementById('root');
    const navDiv = document.createElement('nav');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Random Restaurant';
    const navUl = document.createElement('ul');
    const ulItems = ["Home", "Menu", "Contact"];

    // <li> elements

    for (let i = 0; i <= ulItems.length; i++) {
        let tabItem = document.createElement('li');
        tabItem.textContent = ulItems[i];
        navUl.appendChild(tabItem);
    }

    navDiv.appendChild(restaurantName);
    navDiv.appendChild(navUl);
    rootDiv.appendChild(navDiv);

    //Adding classes to DOM elements:

    navDiv.classList = "navigation";
    restaurantName.classList = "res-name";
    navUl.classList = 'nav-ul';

    return {rootDiv, };

})();


//*Tab changing logic (factory function):--------------------------





















