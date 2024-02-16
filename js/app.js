
//days bangla contents
const translateButtons = document.getElementsByClassName('btn-primary');

for (let i = 0; i < translateButtons.length; i++) {
    translateButtons[i].addEventListener('click', function(e) {
        const banglaTranslate = document.getElementsByClassName('bangla-translate')[i];
        banglaTranslate.classList.remove('hidden');

        // Add CSS styles
        // banglaTranslate.style.color = 'blue';
        // banglaTranslate.style.backgroundColor = 'lightgray';
        // translateButtons[i].style.color = 'green';
    });
}

 //day 1 - 7// day contents
const dayButtons = document.getElementsByClassName('btn-secondary');
for (let i = 0; i < dayButtons.length; i++) {
    dayButtons[i].addEventListener('click', function(e) {
        const dayContainer = document.getElementsByClassName('day-container')[i]; // Assuming there's only one .day-container
        dayContainer.classList.remove('hidden');
    })
    
}
//week contents
const weekContainerButton = document.getElementsByClassName('week-btn');
for(let i = 0; i < weekContainerButton.length; i++){
    weekContainerButton[i].addEventListener('click', function(e){
        const weekContainer = document.getElementsByClassName('week-container')[i];
        weekContainer.classList.remove('hidden');
    })
    
}

