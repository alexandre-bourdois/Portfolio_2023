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
    // Get the element containing experiences
    const experienceContainer = document.getElementById("experience-container");
  
    // Load JSON data
    fetch("../Ressources/json/experiences.json")
      .then(response => response.json())
      .then(data => {
        // Sort experiences by date (most recent first)
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
  
        // Generate HTML for each experience
        data.forEach(experiencejson => {
          const experienceHTML = `
            <div class="experience_content">
              <h3>${experiencejson.position} - ${experiencejson.company}</h3>
              <p>${experiencejson.date} | ${experiencejson.location}</p>
              <p>${experiencejson.description}</p>
            </div>
          `;
          // Add experience to the page
          experienceContainer.innerHTML += experienceHTML;
        });
      })
      .catch(error => console.error("Error loading data:", error));
  });
