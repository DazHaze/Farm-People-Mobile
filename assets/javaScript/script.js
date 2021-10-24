window.addEventListener('DOMContentLoaded', (event) => {
    ClickAboutButtons();
});

function ClickAboutButtons(){
    let buttons = document.getElementsByClassName('about-button');
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.innerHTML = i;
        button.setAttribute('data-type', i);
        button.addEventListener('click', function ButtonClicked() {
            console.log(button.getAttribute('data-type'));
        })
        
    }
}