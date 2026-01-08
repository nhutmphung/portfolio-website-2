const left = document.getElementById("left-card");
const right = document.getElementById("right-card");
const container = document.getElementById("content");

/* CONTENT DEFINITIONS */
const views = {
home: {
  left: `
    <div class="profile-top">
      <div class="social-links">
        <a href="https://github.com/nhutmphung" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://linkedin.com/in/nhut-phung" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      </div>
      <div class="headshot-container">
        <img src="images/avatar.png" alt="Nhut Phung">
      </div>
    </div>
    
    <div class="profile-info">
      <p class="greeting">Hey, I'm</p>
      <h2 class="name">Nhut Phung</h2>
      <p class="role">Electrical Engineering Student</p>
      <p class="location">
        <i class="fa-solid fa-location-dot"></i> Texas, United States
      </p>
    </div>
  `,
  right: `
    <h3>Slice of Me</h3>
    <p>
      I'm an electrical engineering student interested in embedded systems,
      hardware, and building cool and fun projects!
    </p>
  `
},

experience: {
  left: `
    <div class="section-label">
      <h3>Experience</h3>
      <p>My professional journey in engineering and system design.</p>
    </div>
  `,
  right: `
    <div class="exp-grid">
      <div class="exp-card">
        <img src="images/siemens-logo.png" alt="Siemens" class="company-logo">
        <h4 class="company-name">Siemens</h4>
        <h5 class="job-role">Manufacturing Intern</h5>
        <span class="date-range">Jan 2026 - Present</span>
        <div class="tag-container">
          <span class="exp-tag">Automation</span>
          <span class="exp-tag">PLC</span>
          <span class="exp-tag">Systems</span>
        </div>
        <p class="exp-description">Description of your impact and role at Siemens.</p>
      </div>

      <div class="exp-card">
        <img src="images/BellFlightLogo.png" alt="Bell Flight" class="company-logo">
        <h4 class="company-name">Bell Flight</h4>
        <h5 class="job-role">Avionics Intern</h5>
        <span class="date-range">Feb 2025 - Dec 2025</span>
        <div class="tag-container">
          <span class="exp-tag">Avionics</span>
          <span class="exp-tag">Hardware</span>
          <span class="exp-tag">Testing</span>
        </div>
        <p class="exp-description">Description of your work with flight systems and hardware.</p>
      </div>
    </div>
  `
},

projects: {
  left: "", // Keeping this empty as per your current logic
  right: `
    <div class="project-grid"> 
      <div class="exp-card project-card">
        <div class="project-img-container">
          <img src="images/NandPCB.png" alt="PCB Visualizer" class="project-thumbnail">
        </div>
        <h4 class="company-name">Nand2Tetris</h4>
        <h5 class="job-role">Digital Logic PCB</h5>
        <div class="tag-container">
          <span class="exp-tag">Altium</span>
          <span class="exp-tag">KiCad 8.0</span>
          <span class="exp-tag">HDL</span>
        </div>
        <p class="exp-description">Visualized digital logic gates onto PCB.</p>
        <button class="project-btn">See Project</button>
      </div>

      <div class="exp-card project-card">
        <div class="project-img-container">
          <img src="images/discordJobBot.png" alt="Jobright Bot Tracker" class="project-thumbnail">
        </div>
        <h4 class="company-name">Jobright.Ai</h4>
        <h5 class="job-role">Discord job bot</h5>
        <div class="tag-container">
          <span class="exp-tag">Python</span>
          <span class="exp-tag">Raspian</span>
          <span class="exp-tag">Raspberry Pi</span>
        </div>
        <p class="exp-description">Created job bot alert.</p>
        <button class="project-btn">See Project</button>
      </div>

      <div class="exp-card project-card">
        <div class="project-img-container">
          <img src="images/discordJobBot.png" alt="Jobright Bot Tracker" class="project-thumbnail">
        </div>
        <h4 class="company-name">Jobright.Ai</h4>
        <h5 class="job-role">Discord job bot</h5>
        <div class="tag-container">
          <span class="exp-tag">Python</span>
          <span class="exp-tag">Raspian</span>
          <span class="exp-tag">Raspberry Pi</span>
        </div>
        <p class="exp-description">Created job bot alert.</p>
        <button class="project-btn">See Project</button>
      </div>       


      <div class="exp-card project-card">
        <div class="project-img-container">
          <img src="images/plantStudyBuddy.png" alt="Plant AI" class="project-thumbnail">
        </div>
        <h4 class="company-name">Plant AI</h4>
        <h5 class="job-role">Study Buddy</h5>
        <div class="tag-container">
          <span class="exp-tag">ESP32-S3</span>
          <span class="exp-tag">Python</span>
          <span class="exp-tag">RESTful API</span>
          <span class="exp-tag">C++</span>
        </div>
        <p class="exp-description">Developed an AI assistant using ESP32-S3.</p>
        <button class="project-btn">See Project</button>
      </div>
    </div>
  `
}
};

/* TOP TERMINAL TYPING */
const topEl = document.getElementById("top-typing");
let typingTimeout;

/* Map views to titles */
const viewTitles = {
  home: "About Me",
  experience: "Work Experience",
  projects: "Projects"
};

function typeHeader(text) {
  clearTimeout(typingTimeout);
  topEl.textContent = "";

  let i = 0;

  function typeChar() {
    if (i < text.length) {
      topEl.textContent += text.charAt(i);
      i++;
      typingTimeout = setTimeout(typeChar, 50);
    }
  }

  typeChar();
}


function switchView(view) {
  container.classList.add("hidden");

  setTimeout(() => {
    // Check if projects view is selected
    if (view === 'projects') {
      container.classList.add("project-view");
    } else {
      container.classList.remove("project-view");
    }

    // Fix: Only set innerHTML if the property exists, otherwise set to empty string
    left.innerHTML = views[view].left || ""; 
    right.innerHTML = views[view].right || "";

    // Fix: Hide the left card entirely if there is no content for it
    left.style.display = views[view].left ? "block" : "none";

    container.classList.remove("hidden");
    typeHeader(viewTitles[view]);
  }, 300);
}
/* NAV BUTTONS */
document.querySelectorAll("[data-view]").forEach(btn => {
  btn.addEventListener("click", () => {
    switchView(btn.dataset.view);
  });
});

/* THEME TOGGLE */
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});



/* INITIAL LOAD */
switchView("home");


