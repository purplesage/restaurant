import mockElement from './home.js';
import './styles/index.scss';



// this type of object will be imported from the other JS files in SRC.
/* const mockObject = {element1: "someHtmlstuff", element2: "someOtherStuff"}; */



//here an event listener will inject the DOM elements into 'index.html' depending on what 'tab' button was pressed.



const rootDiv = document.getElementById('root');

rootDiv.appendChild(mockElement);

