
const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 },
    { title: 'Web Development', category: 'Programming', price: 25 }
];


function renderSkills(skillsToRender) {
    const container = document.getElementById('skills-container');
    if (!container) return;

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


function calculateCost() {
    const rate = Number(document.getElementById("rateInput").value);
    const hours = Number(document.getElementById("hoursInput").value);

    const total = calculateTotalCost(rate, hours);

    document.getElementById("totalResult").textContent =
        "Total Cost: $" + total;
}

function findMatches() {
    const category = document.getElementById("matchCategory").value;
    const maxPrice = Number(document.getElementById("maxPriceInput").value);

    const userNeeds = {
        category: category,
        maxPrice: maxPrice
    };

    const matchedSkills = matchSkillsToUser(userNeeds, skills);

    const resultsDiv = document.getElementById("matchResults");
    resultsDiv.innerHTML = "";

    if (matchedSkills.length === 0) {
        resultsDiv.textContent = "No matching skills found.";
        return;
    }

    matchedSkills.forEach(skill => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${skill.title}</h3>
            <p>Category: ${skill.category}</p>
            <p>Price: $${skill.price}</p>
        `;
        resultsDiv.appendChild(card);
    });
}

