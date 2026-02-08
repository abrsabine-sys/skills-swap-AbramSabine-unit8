console.log("Skill Swap homepage loaded.");

function showInfo(skill) {
    alert("You clicked on: " + skill);
}


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const skillTitle = card.querySelector('h3').textContent;
        showInfo(skillTitle);
    });
});

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#f0f0f0';
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '';
    });
});