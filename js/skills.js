// skills.js

document.addEventListener('DOMContentLoaded', function () {
    // Initial display: Hardware Development
    showSkills('Hardware');
});

function showSkills(category) {
    const skillsContainer = document.getElementById('skills-container');
    fetch('../Ressources/jsons/projects.json')
        .then(response => response.json())
        .then(data => {
            // Display section title
            const skillsTitle = document.createElement('h2');
            skillsTitle.className = 'skills-title';
            skillsTitle.textContent = 'Skills - ' + category;
            skillsContainer.appendChild(skillsTitle);

            // Display skills for the selected category
            const skillsData = getDataForCategory(category, data);
            skillsData.forEach(skill => {
                const skillSetDiv = document.createElement('div');
                skillSetDiv.className = 'skill-set';

                const skillSetTitle = document.createElement('h3');
                skillSetTitle.textContent = skill.name;

                skillSetDiv.appendChild(skillSetTitle);
                skillsContainer.appendChild(skillSetDiv);
            });
        })
        .catch(error => console.error('Error loading skills:', error));
}

function getDataForCategory(category, allCategories) {
    const selectedCategory = allCategories.find(cat => cat.name === category);
    return selectedCategory ? selectedCategory.skills : [];
}