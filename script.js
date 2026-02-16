
const { filterSkillsByCategory } = require('./skillswap-functions');

const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 },
    { title: 'Web Development', category: 'Programming', price: 25 }
];

function renderSkills(skillsToRender) {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';

    skillsToRender.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${skill.title}</h3>
            <p>Category: ${skill.category}</p>
            <p>Price: $${skill.price}</p>
        `;
        container.appendChild(card);
    });
}


function filterSkills(category) {
    const filteredSkills = filterSkillsByCategory(skills, category);
    renderSkills(filteredSkills);
}

renderSkills(skills);
