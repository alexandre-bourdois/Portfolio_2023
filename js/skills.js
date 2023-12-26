// projects.js (ou le nom de votre fichier JavaScript)

document.addEventListener('DOMContentLoaded', function () {
    // Initial display
    loadCategories();
});

function loadCategories() {
    const skillsContainer = document.getElementById("skills-container");
    fetch("../Ressources/jsons/skills.json")
        .then(response => response.json())
        .then(data => {

            const table = document.createElement('table');
            table.className = 'categories-table';

            data.forEach(category => {
                const categoryRow = document.createElement('tr');
                const categoryCell = document.createElement('td');
                categoryCell.textContent = category['skill-category'];
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