import mockImage from './assets/images/ashe.png';

const menuContent = () => {

    let contentDiv = document.createElement('div');

    const imageList = [
        mockImage,
        mockImage,
        mockImage,
        mockImage,
        mockImage,
        mockImage,
        mockImage,
        mockImage,
     ]; //todo: database.
    const dishNameList = [
        "SOME NAME",
        "SOME NAME",
        "SOME NAME",
        "SOME NAME",
        "SOME NAME",
        "SOME NAME",
        "SOME NAME",
        "SOME NAME",
    ];
    const descriptionList = [
        "dish description",
        "dish description",
        "dish description",
        "dish description",
        "dish description",
        "dish description",
        "dish description",
        "dish description"
    ];

    let menuUl = document.createElement('ul');
    menuUl.classList = "menu-ul";
    
    //menu items creation
    for (let i = 0; i <= 7; i++) {

        let menuItem = document.createElement('li');
        
        let theImage = new Image();
        theImage.src = imageList[i];
        menuItem.appendChild(theImage);

        let dishName = document.createElement('h3');
        dishName.textContent = dishNameList[i];
        menuItem.appendChild(dishName);

        let description = document.createElement('p'); 
        description.textContent = descriptionList[i];
        menuItem.appendChild(description);
        
        menuUl.appendChild(menuItem);
    }

    contentDiv.appendChild(menuUl);
    contentDiv.classList = "menu-content";
    contentDiv.setAttribute('id', 'content');
    
    return contentDiv
    
    };

    export {menuContent};