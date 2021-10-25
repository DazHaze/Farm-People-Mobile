/**
 * Run functions after the DOM has completed loading.
 */
window.addEventListener('DOMContentLoaded', (event) => {
    LoadSetup();
    ClickAboutButtons();
});

let cards = [{
    'heading': 'About us',
    'image': 'assets/images/coupleDrawing-tp4.png',
    'description': `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore perspiciatis
    quisquam quod dolor, culpa ea excepturi soluta dicta cumque,
    quo corrupti optio praesentium ipsa suscipit.Ratione nisi eligendi quasi
    fuga ?`
},
{
    'heading': 'What we do',
    'image': 'assets/images/greenhouse-photo2.png',
    'description': `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore perspiciatis
    quisquam quod dolor, culpa ea excepturi soluta dicta cumque,
    quo corrupti optio praesentium ipsa suscipit.Ratione nisi eligendi quasi
    fuga ?`
},
{
    'heading': 'What we have',
    'image': 'assets/images/chicken_eggs2.png',
    'description': `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore perspiciatis
    quisquam quod dolor, culpa ea excepturi soluta dicta cumque,
    quo corrupti optio praesentium ipsa suscipit.Ratione nisi eligendi quasi
    fuga ?`
}
]

/**
 * Populate about section with first element of card list.
 */
function LoadSetup() {
    let buttons = document.getElementsByClassName('about-button');
    UpdateAboutCard(cards[0]);
    ActiveButtonStyle(buttons[0]);
}


/** 
 * Adds click function to about section buttons.
 * Returns button number.
 */
function ClickAboutButtons() {
    let buttons = document.getElementsByClassName('about-button');
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.setAttribute('data-type', i);
        button.addEventListener('click', function ButtonClicked() {
            ActiveButtonStyle(button);
            UpdateAboutCard(cards[i]);
            return button.getAttribute('data-type');
        })
    }
}

/**
 * Updates the active about card button to have the active style.
 * Removes active style from buttons that are not active.
 */
function ActiveButtonStyle(button) {
    let buttons = document.getElementsByClassName('about-button');
    button.classList.add('active-button');
    for (let i = 0; i < buttons.length; i++) {
        const arrayButton = buttons[i];
        if (arrayButton !== button) {
            arrayButton.classList.remove('active-button');
        }
    }
}

/** 
 * Updates about card information with card object information.
 * Creates a placeholder if no card object exists.
 */
function UpdateAboutCard(card) {
    if (card === undefined) {
        document.getElementById('about-heading').innerHTML = "Placeholder";
        let imageDisplay = document.getElementById('about-image');

        imageDisplay.classList.remove('image-animation');
        void imageDisplay.offsetWidth;
        imageDisplay.classList.add('image-animation');
        imageDisplay.src = 'assets/images/chicken_eggs2.png';

        document.getElementById('about-description').innerHTML = "Placeholder description";

        throw "No card object found";
    } else {
        document.getElementById('about-heading').innerHTML = card.heading;
        let imageDisplay = document.getElementById('about-image');

        imageDisplay.classList.remove('image-animation');
        void imageDisplay.offsetWidth;
        imageDisplay.classList.add('image-animation');
        imageDisplay.src = card.image;

        document.getElementById('about-description').innerHTML = card.description;
    }
}