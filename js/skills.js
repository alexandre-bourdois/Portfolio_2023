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

            // Display categories in a table
            const table = document.createElement('table');
            table.className = 'categories-table';

            // Data rows
            data.forEach(category => {
                const categoryRow = document.createElement('tr');
                const categoryCell = document.createElement('td');
                categoryCell.textContent = category['skill-category'];
                categoryRow.appendChild(categoryCell);
                table.appendChild(categoryRow);
            });

            skillsContainer.appendChild(table);
        })
        .catch(error => console.error('Error loading categories:', error));
}