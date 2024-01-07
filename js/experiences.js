document.addEventListener('DOMContentLoaded', function () {
  loadExperiences();
  
});

function loadExperiences() {
  const experienceContainer = document.getElementById("experiences-container");
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
        const marginRightValue_exp = alignment === "left" ? "-100px" : "0";
        const marginLeftValue_exp = alignment === "right" ? "-100px" : "0";
        
        if (window.innerWidth > 780)
        {
        const positionTextHTML = `
          <div class="position-text">
            <h3>${experiencejson.position}</h3>
            <h4 class="company_name"><a href="${experiencejson.link}" target="_blank">${experiencejson.company}</a> | ${experiencejson.location}</h4>
            <p>${experiencejson.date} </p>
            <div class="box-text" style="margin-right: ${marginRightValue_exp}; margin-left: ${marginLeftValue_exp};">
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
          const positionContent = `
          <div class="position_background" style="background-image: url(${experiencejson.image});">
            <div class="position-text" >
              <h3>${experiencejson.position}</h3>
              <h4 class="company_name"><a href="${experiencejson.link}" target="_blank">${experiencejson.company}</a> | ${experiencejson.location}</h4>
              <p>${experiencejson.date} </p>
              <div class="box-text">
                <p>${experiencejson.description}</p>
              </div>
            </div>
          </div>
        `;
        experienceContainer.innerHTML += positionContent;

        }
      });
    })
    .catch(error => console.error("Error loading data:", error));
    positionTextHTML= "";
    positionImageHTML= "";
    experienceHTML= "";
    positionContent= "";
};

let prev_width = window.innerWidth;
window.addEventListener('resize', function () {
  if ((prev_width >= 780 && window.innerWidth <= 780) || (prev_width <= 780 && window.innerWidth >= 780)){
    loadExperiences();
    loadProject();

  }})

  document.addEventListener('fullscreenchange', function () {
  if ((prev_width >= 780 && window.innerWidth <= 780) || (prev_width <= 780 && window.innerWidth >= 780)){
    loadExperiences();
    loadProject();

  }})

  
  