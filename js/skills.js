document.addEventListener('DOMContentLoaded', function () {
    loadSkills();
});

function loadSkills() {
    const skillsContainer = document.getElementById("skills-container");
    load_json("../Ressources/jsons/skills.json")
        .then(data => {

            data.forEach(category=>{
                const skillTitle =`<div class="category_title">${category['skill-category']}</div>`;
                const skillNames = category.skills.map(skill => `<li>${skill.name}</li>`).join('');

                skillsContainer.innerHTML+= `<div class="category_content">${skillTitle}<ul class="category_skills">${skillNames}</ul></div>`;
            })

        })
        .catch(error => console.error('Error loading categories:', error));
}