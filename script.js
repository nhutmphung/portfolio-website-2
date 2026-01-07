const left = document.getElementById("left-card");
const right = document.getElementById("right-card");
const container = document.getElementById("content");

/* CONTENT DEFINITIONS */
const views = {
  home: {
left: `
      <div class="profile-header">
        <div class="social-links">
          <a href="https://github.com/nhutmphung" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="https://linkedin.com/in/nhut-phung/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <p class="greeting">Hey, I'm</p>
        <h2 class="name">Nhut Phung</h2>
        <p class="role">Electrical Engineering Student & Creator</p>
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
    left: `
      <h3>Projects</h3>
      <ul>
        <li>ESP32 Web Server</li>
        <li>Arduino Air Purifier</li>
        <li>Wireless RC Car</li>
      </ul>
    `,
    right: `
      <p>
        My projects focus on bridging software and hardware through embedded
        systems and practical engineering solutions.
      </p>
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


/* VIEW SWITCHING */
function switchView(view) {
  container.classList.add("hidden");

  setTimeout(() => {
    left.innerHTML = views[view].left;
    right.innerHTML = views[view].right;
    container.classList.remove("hidden");

    /* Trigger header typing */
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


