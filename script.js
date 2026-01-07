const left = document.getElementById("left-card");
const right = document.getElementById("right-card");
const container = document.getElementById("content");

/* CONTENT DEFINITIONS */
const views = {
  home: {
    left: `
      <h2>Nhut Phung</h2>
      <p>EE Student & Creator</p>
      <p>Texas, United States</p>
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
      <h3>Experience</h3>
      <ul>
        <li>Embedded Systems Intern</li>
        <li>Power Systems Research</li>
      </ul>
    `,
    right: `
      <p>
        I've worked on hardware-focused projects involving microcontrollers,
        power distribution, and real-world system design.
      </p>
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


