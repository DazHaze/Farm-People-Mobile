window.addEventListener('DOMContentLoaded', (event) => {
    LoadSetup();
    ClickAboutButtons();
});

function LoadSetup() {
    let buttons = document.getElementsByClassName('about-button');
    UpdateAboutCard(cards[0]);
    ActiveButtonStyle(buttons[0]);
}

function ClickAboutButtons() {
    let buttons = document.getElementsByClassName('about-button');
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        // button.innerHTML = i;
        button.setAttribute('data-type', i);
        button.addEventListener('click', function ButtonClicked() {
            ActiveButtonStyle(button);
            UpdateAboutCard(cards[i]);
            return button.getAttribute('data-type');
        })
    }
}

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