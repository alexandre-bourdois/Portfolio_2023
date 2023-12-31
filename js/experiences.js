document.addEventListener('DOMContentLoaded', function () {
  loadExperiences();
  
});

function loadExperiences() {
  const experienceContainer = document.getElementById("experiences-container");
  // Effacez le contenu existant
  experienceContainer.innerHTML = "";

  // Load JSON data
  load_json("../Ressources/jsons/experiences.json")
    .then(data => {
      // Sort experiences by date (most recent first)
      data.sort((a, b) => new Date(b.date) - new Date(a.date));

      data.forEach((experiencejson, index) => {
        const hasImage = experiencejson.image && experiencejson.image !== "none";
        const hasVideo = experiencejson.video && experiencejson.video !== "none";

        // Determine alignment based on index
        const alignment = index % 2 === 0 ? "left" : "right";
        const marginRightValue = alignment === "left" ? "-100px" : "0";
        const marginLeftValue = alignment === "right" ? "-100px" : "0";
        
        if (window.innerWidth > 780)
        {
        const positionTextHTML = `
          <div class="position-text">
            <h3>${experiencejson.position}</h3>
            <h4>${experiencejson.company} | ${experiencejson.location}</h4>
            <p>${experiencejson.date} </p>
            <div class="box-text" style="margin-right: ${marginRightValue}; margin-left: ${marginLeftValue};">
              <p>${experiencejson.description}</p>
            </div>
          </div>
        `;
        const positionImageHTML = `
          <div class="position-image">
            ${hasImage ? `<img src="${experiencejson.image}" alt="Company Logo" image" width="500px" height="400px">` : ""}
            ${hasVideo ? `<video src="${experiencejson.video}" controls></video>` : ""}
          </div>
        `;

        const experienceHTML = `
          <div class="experiences_content" style="text-align: ${alignment};">
            ${alignment === "left" ? positionTextHTML + positionImageHTML : positionImageHTML + positionTextHTML}
          </div>
        `;

        experienceContainer.innerHTML += experienceHTML;
        }
        else
        {
          const positionTextHTML = `
          <div class="position_background" style="background-image: url(${experiencejson.image});">
            <div class="position-text" >
              <h3>${experiencejson.position}</h3>
              <h4>${experiencejson.company} | ${experiencejson.location}</h4>
              <p>${experiencejson.date} </p>
              <div class="box-text" style="margin-right: ${marginRightValue}; margin-left: ${marginLeftValue};">
                <p>${experiencejson.description}</p>
              </div>
            </div>
          </div>
        `;
        experienceContainer.innerHTML += positionTextHTML;
        }
      });
    })
    .catch(error => console.error("Error loading data:", error));
};

let prev_width = window.innerWidth;
window.addEventListener('resize', function () {
  // Rafraîchissez les données si la taille de l'écran est réduite
  if ((prev_width >= 780 && window.innerWidth <= 780) || (prev_width <= 780 && window.innerWidth >= 780)){
    loadExperiences();
  }})

  
  