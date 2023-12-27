document.addEventListener('DOMContentLoaded', function () {
    loadSkills();
});

function loadSkills() {
    const skillsContainer = document.getElementById("skills-container");
    load_json("../Ressources/jsons/skills.json")
        .then(data => {
            data.forEach(category => {
                const skillTitle = `<div class="category_title">${category['skill-category']}</div>`;
                let skillContent = '';

                category.skills.forEach(skill => {
                    skillContent += `<a class="skill" href="${skill.link}" target="blank">
                        <img src="${skill.logo}" alt="${skill.name}" width="140px" height="130px"/>
                        <p>${skill.name}</p></a>`;
                }); 

                skillsContainer.innerHTML += `<div class="category_content">${skillTitle}<div class="category_skills">${skillContent}</div></div>`;
            })
        })
        .catch(error => console.error('Error loading categories:', error));
}