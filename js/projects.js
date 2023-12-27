document.addEventListener('DOMContentLoaded', function () {
  loadProject();
});

function loadProject() {
    const projectContainer = document.getElementById("projects-container");

    // Load JSON data
    load_json("../Ressources/jsons/projects.json")
      .then(data => {
        // Generate HTML for each project
        data.forEach((project, index) => {
          const hasImage = project.image && project.image !== "none";
          const hasVideo = project.video && project.video !== "none";
  
          // Determine alignment based on index
          const alignment = index % 2 === 0 ? "left" : "right";
          const marginRightValue = alignment === "left" ? "-100px" : "0";
          const marginLeftValue = alignment === "right" ? "-100px" : "0";
          const projectTextHTML = `
            <div class="project-text">
              <h3>${project.project} (${project.date})</h3>
              <div class="box-project-text style="margin-right: ${marginRightValue}; margin-left: ${marginLeftValue};">
                <p>${project.description}</p>
              </div>
              <a href="${project.link}" target="_blank">View on GitHub</a>
            </div>
          `;
          const projectImageHTML = `
            <div class="project-image">
              ${hasImage ? `<img src="${project.image}" alt="Project Image" width="500px" height="400px">` : ""}
              ${hasVideo ? `<video src="${project.video}" controls></video>` : ""}
            </div>
          `;
        
          const projectHTML = `
            <div class="projects_content" style="text-align: ${alignment};">
              ${alignment === "left" ? projectTextHTML + projectImageHTML : projectImageHTML + projectTextHTML}
            </div>
          `;
  
          projectContainer.innerHTML += projectHTML;
        });
      })
      .catch(error => console.error("Error loading data:", error));
  };