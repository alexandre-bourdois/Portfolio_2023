document.addEventListener('DOMContentLoaded', function () {
    loadSkills();
});

function loadSkills() {
    const skillsContainer = document.getElementById("skills-container");
    load_json("../Ressources/jsons/skills.json")
        .then(data => {

            const table = document.createElement('table');
            table.className = 'categories-table';

            data.forEach(category => {
                const categoryRow = document.createElement('th');
                const categoryCell = document.createElement('tr');
                categoryRow.textContent = category['skill-category'];
                categoryRow.appendChild(categoryCell);
                table.appendChild(categoryRow);

                const subcategoryCell = document.createElement('td');
                const subcategoriesList = document.createElement('ul');
                category.skills.forEach(subcategory => {
                    const subcategoryItem = document.createElement('li');
                    subcategoryItem.textContent = subcategory.name;
                    subcategoriesList.appendChild(subcategoryItem);
                });
                subcategoryCell.appendChild(subcategoriesList);
                categoryRow.appendChild(subcategoryCell);

                table.appendChild(categoryRow);
            });

            skillsContainer.appendChild(table);
        })
        .catch(error => console.error('Error loading categories:', error));
}