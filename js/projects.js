document.addEventListener('DOMContentLoaded', function () {
  loadProject();
});

function loadProject() {
    const projectContainer = document.getElementById("projects-container");
    projectContainer.innerHTML = "";

    // Load JSON data
    load_json("../Ressources/jsons/projects.json")
      .then(data => {
        data.forEach((project, index) => {
          const hasImage = project.image && project.image !== "none";
          const hasVideo = project.video && project.video !== "none";
  
          
          const alignment = index % 2 === 0 ? "left" : "right";
          const marginRightValue = alignment === "left" ? "-50px" : "0";
          const marginLeftValue = alignment === "right" ? "-50px" : "0";

          if (window.innerWidth > 780)
          {
          const projectTextHTML = `
            <div class="project-text">
              <div class="project-label">
                <h3>${project.project} (${project.date})</h3>
                <div class="box-project-text" style="margin-right: ${marginRightValue}; margin-left: ${marginLeftValue};">
                  <p>${project.description}</p>
                </div>
              </div>
                <a class="github_logo" href="${project.link}" target="_blank">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="50" height="50"
                     <g><path d="M7.26 16.34c-4.11 1.23-4.11-2.06-5.76-2.47M13 18.81V15.62a2.78 2.78 0 0 0-.77-2.15c2.59-.28 5.3-1.26 5.3-5.76a4.46 4.46 0 0 0-1.23-3.08 4.18 4.18 0 0 0-.08-3.11s-1-.29-3.22 1.22a11 11 0 0 0-5.76 0C5 1.23 4 1.52 4 1.52A4.18 4.18 0 0 0 4 4.63 4.48 4.48 0 0 0 2.73 7.74c0 4.46 2.72 5.44 5.31 5.76a2.8 2.8 0 0 0-.78 2.12v3.19"/></g>
                   </svg>
                </a>
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

          }
          else{
            const projectCONTENT = `
            <div class="project_background" style="background-image: url(${project.image});">
              <div class="project-text">
                <h3>${project.project} (${project.date})</h3>
                <div class="box-project-text style="margin-right: ${marginRightValue}; margin-left: ${marginLeftValue};">
                  <p>${project.description}</p>
                </div>
                <a class="github_logo" href="${project.link}" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"<g><path d="M7.26 16.34c-4.11 1.23-4.11-2.06-5.76-2.47M13 18.81V15.62a2.78 2.78 0 0 0-.77-2.15c2.59-.28 5.3-1.26 5.3-5.76a4.46 4.46 0 0 0-1.23-3.08 4.18 4.18 0 0 0-.08-3.11s-1-.29-3.22 1.22a11 11 0 0 0-5.76 0C5 1.23 4 1.52 4 1.52A4.18 4.18 0 0 0 4 4.63 4.48 4.48 0 0 0 2.73 7.74c0 4.46 2.72 5.44 5.31 5.76a2.8 2.8 0 0 0-.78 2.12v3.19"/></g></svg>
                </a>
              
              </div>
            </div>
          `;
           // <a href="${project.link}" target="_blank">View on GitHub</a>
          projectContainer.innerHTML += projectCONTENT;

          }
        });
      })
      .catch(error => console.error("Error loading data:", error));
      projectCONTENT= "";
      projectTextHTML= "";
      projectImageHTML= "";
      projectHTML= "";
  };