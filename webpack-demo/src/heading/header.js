import './header.css';

function displayHeading(){
    const h1 = document.createElement('h1');
    //h1.classList.add('highlight');
    h1.innerText = 'React App Heading';
    document.body.appendChild(h1);
}

export default displayHeading;