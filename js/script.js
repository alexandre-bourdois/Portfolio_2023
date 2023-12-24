var typed = new Typed(".home-job",{
    strings: ["Software Engineer.", "Hardware Engineer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    })

VANTA.NET({
    el: "body",
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x35353b,
    backgroundColor: 0x0,
    points: 20.00,
    maxDistance: 19.00
})

document.addEventListener("DOMContentLoaded", function () {
  const experienceContainer = document.getElementById("experiences-container");

  // Load JSON data
  fetch("../Ressources/jsons/experiences.json")
    .then(response => response.json())
    .then(data => {
      // Sort experiences by date (most recent first)
      data.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Generate HTML for each experience
      data.forEach((experiencejson, index) => {
        const hasImage = experiencejson.image && experiencejson.image !== "none";
        const hasVideo = experiencejson.video && experiencejson.video !== "none";

        // Determine alignment based on index
        const alignment = index % 2 === 0 ? "left" : "right";
        const marginRightValue = alignment === "left" ? "-100px" : "0";
        const marginLeftValue = alignment === "right" ? "-100px" : "0";
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
      });
    })
    .catch(error => console.error("Error loading data:", error));
});