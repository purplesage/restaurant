const contactContent = () => {

    let contentDiv = document.createElement('div');
    let mock = document.createElement('p');
    mock.textContent = "mock content";

    contentDiv.appendChild(mock);
    contentDiv.classList = 'content';
    contentDiv.setAttribute('id', 'content');
    
    return contentDiv
    
    };

    export {contactContent};