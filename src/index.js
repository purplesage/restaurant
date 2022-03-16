import {homeContent} from './home.js';
import {contactContent} from './contact.js';
import {menuContent} from './menu.js';
import './styles/index.scss';


//*Navigation DOM elements:----------


const rootElement = (() => {

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

    return {rootDiv};

})();

//*footer

const defaultFooter = (() => {
    let footer = document.createElement('footer');
    let footerContent = document.createElement('p');
    footerContent.textContent = "sage made this lmao";
    footer.appendChild(footerContent);
    rootElement.rootDiv.appendChild(footer);
    
})();



//*content capsule-----------------

const contentCapsule = () =>{ //?this will be useful for the 'todo' project
    let home = homeContent();
    let menu = menuContent();  //todo: change this when content is done
    let contact = contactContent();

    return [home, menu, contact];
};


//*Tab changing logic:--------------------------

const tabChangingLogic = (() => {  //?this will be useful for the 'todo' project

    /* const contentCheck = [false, false, false]; //home, menu, contact. active check. */
    rootElement.rootDiv.appendChild(contentCapsule()[0]); //default content on page load
    const navTabItems = document.querySelector(".nav-ul").getElementsByTagName('li');

    for (let i = 0; i < navTabItems.length; i++) {

        navTabItems[i].addEventListener('click', () => {
            
            let content = document.getElementById('content');
                rootElement.rootDiv.removeChild(content);
                rootElement.rootDiv.appendChild(contentCapsule()[i]);
                content = document.getElementById('content');
        });
    }
})();





















