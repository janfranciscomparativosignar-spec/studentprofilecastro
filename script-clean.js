const profile = {
  welcomeMessage: "Hello, I’m Princess Jane G. Castro",
  motto: "Turning curiosity into knowledge and knowledge into innovation.",
  fullName: "Princess Jane G. Castro",
  age: 19,
  location: "Purok 5 Castillo Village, Mangagoy, Bislig City",
  address: "Purok 5 Castillo Village, Mangagoy, Bislig City",
  courseYear: "Bachelor of Science in Information Technology, First Year",
  summary: "Princess Jane G. Castro • BSIT 1st Year",
  bio: "My name is Princess Jane G. Castro. I am a dedicated and hardworking Information Technology student with a passion for technology and continuous learning. I am developing my knowledge and skills in computer systems, programming, and information technology to prepare for a successful career in the IT field. I enjoy exploring new technologies, solving problems, and working on projects that help improve people's daily lives. Through my education and practical experiences, I aim to become a skilled IT professional who can contribute to the growth and innovation of the technology industry.",
  careerGoals: "My career goal is to become a skilled and successful Information Technology professional. I aim to continuously improve my knowledge and technical skills in programming, system development, and emerging technologies. I hope to gain valuable experience through internships and real-world projects that will help me grow both professionally and personally. In the future, I aspire to contribute to innovative technology solutions that can help businesses and communities while building a stable and rewarding career in the IT industry.",
  aboutBadges: ["Dedicated Learner", "Problem Solver", "Team Player"],
  education: [
    { level: "Elementary", school: "Mangagoy Central Elementary School", year: "Completed", icon: "🏫" },
    { level: "Junior High", school: "Tabon Maximino Estrella National High School", year: "Completed", icon: "📚" },
    { level: "Senior High", school: "Tabon Maximino Estrella National High School", year: "Completed", icon: "🎓" },
    { level: "College", school: "De La Salle John Bosco College", year: "Current", icon: "💡" }
  ],
  skills: {
    technical: [
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "Basic PHP", level: 70 },
      { name: "Basic Database Management (MySQL)", level: 74 }
    ],
    programming: ["CSS", "JavaScript", "Basic PHP"],
    software: [
      { name: "Visual Studio Code", icon: "💻" },
      { name: "Microsoft Word", icon: "📝" },
      { name: "Microsoft Excel", icon: "📊" },
      { name: "Microsoft PowerPoint", icon: "📽️" },
      { name: "Google Workspace", icon: "☁️" },
      { name: "Canva", icon: "🎨" }
    ],
    soft: ["Communication Skills", "Time Management", "Teamwork", "Adaptability", "Critical Thinking", "Willingness to Learn", "Responsibility"]
  },
  projects: [
    { title: "SmartSpend: Personal Budget Tracker System", description: "A web-based budgeting system designed to help users manage their income and expenses, monitor financial activities, and improve budgeting habits through organized financial tracking.", tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL", "JavaScript"], icon: "💸", demo: "", github: "" },
    { title: "Dreamy Student Dashboard", description: "A personal portfolio concept that blends calm pastel visuals with modular sections for education, projects, and contact.", tech: ["HTML", "CSS", "JavaScript"], icon: "🪄", demo: "", github: "" },
    { title: "Cloud Notes App", description: "A minimal note-taking web app designed to keep ideas, schedules, and reminders in one sweet, organized space.", tech: ["JavaScript", "CSS", "LocalStorage"], icon: "☁️", demo: "", github: "" }
  ],
  achievements: [
    { title: "NSTP Training", detail: "Completed training in community service and civic responsibility." },
    { title: "School Seminar", detail: "Attended a school seminar on digital skills and growth." },
    { title: "NSTP Completion Certificate", detail: "Certificate earned after finishing the training program." },
    { title: "Academic Excellence Award", detail: "Recognized for academic effort and consistency." }
  ],
  certificates: [
    { title: "NSTP Completion Certificate", org: "School Program", date: "2025", icon: "🏅" },
    { title: "Academic Excellence Award", org: "Academic Office", date: "2024", icon: "🌟" },
    { title: "Digital Skills Workshop", org: "School Seminar", date: "2024", icon: "💻" }
  ],
  experience: ["Yogo Assistant Worker — Assisted in customer service and daily store operations.", "STL Teller — Processed customer transactions accurately."],
  references: ["Available upon request", "Can be provided for formal opportunities."]
};

function isValidExternalLink(value) {
  if (!value) return false;
  const trimmed = value.trim();
  if (!trimmed || trimmed === "#" || trimmed === "https://github.com/" || trimmed === "https://github.com") return false;
  return /^https?:\/\//i.test(trimmed);
}

function renderProjectActions(project) {
  const actions = [];
  if (isValidExternalLink(project.demo)) {
    actions.push(`<a href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>`);
  }
  if (isValidExternalLink(project.github)) {
    actions.push(`<a class="secondary" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>`);
  }
  return actions.length ? `<div class="project-actions">${actions.join("")}</div>` : "";
}

function populateProfile() {
  document.getElementById("welcome-message").textContent = "";
  document.getElementById("motto").textContent = profile.motto;
  document.getElementById("profile-summary").textContent = profile.summary;
  document.getElementById("age").textContent = profile.age;
  document.getElementById("location").textContent = profile.location;
  document.getElementById("course-year").textContent = profile.courseYear;
  document.getElementById("bio").textContent = profile.bio;
  document.getElementById("career-goals").textContent = profile.careerGoals;
  document.getElementById("about-badges").innerHTML = profile.aboutBadges.map((item) => `<span>${item}</span>`).join("");

  document.getElementById("education-list").innerHTML = profile.education.map((item) => `
    <article class="timeline-item">
      <div class="timeline-icon">${item.icon}</div>
      <div class="timeline-content">
        <div class="timeline-year">${item.year}</div>
        <h3>${item.level}</h3>
        <p>${item.school}</p>
      </div>
    </article>
  `).join("");

  document.getElementById("technical-skills").innerHTML = profile.skills.technical.map((skill) => `
    <div class="skill-item">
      <div class="skill-top"><span>${skill.name}</span><strong>${skill.level}%</strong></div>
      <div class="progress-bar"><span style="--value:${skill.level}%"></span></div>
    </div>
  `).join("");

  document.getElementById("programming-languages").innerHTML = profile.skills.programming.map((item) => `<span>${item}</span>`).join("");
  document.getElementById("software-applications").innerHTML = profile.skills.software.map((item) => `
    <div class="app-card">
      <div class="app-icon">${item.icon}</div>
      <strong>${item.name}</strong>
    </div>
  `).join("");
  document.getElementById("soft-skills").innerHTML = profile.skills.soft.map((item) => `<span>${item}</span>`).join("");

  document.getElementById("project-grid").innerHTML = profile.projects.map((project) => `
    <article class="project-card">
      <div class="project-media">${project.icon}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">${project.tech.map((item) => `<span>${item}</span>`).join("")}</div>
      ${renderProjectActions(project)}
    </article>
  `).join("");

  document.getElementById("achievement-list").innerHTML = profile.achievements.map((item) => `
    <div class="achievement-item">
      <span>✨</span>
      <div>
        <strong>${item.title}</strong>
        <div>${item.detail}</div>
      </div>
    </div>
  `).join("");

  document.getElementById("certificate-grid").innerHTML = profile.certificates.map((item) => `
    <article class="certificate-card">
      <div class="project-media">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.org}</p>
      <p>${item.date}</p>
      <div class="certificate-actions"><a href="#contact">View</a></div>
    </article>
  `).join("");

  document.getElementById("experience-list").innerHTML = profile.experience.map((item) => `<li>${item}</li>`).join("");
  document.getElementById("references-list").innerHTML = profile.references.map((item) => `<li>${item}</li>`).join("");
}

function typeHeroTitle(text) {
  const title = document.getElementById("welcome-message");
  if (!title) return;
  title.textContent = "";
  let index = 0;
  const interval = setInterval(() => {
    title.textContent += text[index];
    index += 1;
    if (index >= text.length) {
      clearInterval(interval);
    }
  }, 70);
}

function initEffects() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinksContainer = document.getElementById("nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");
  const progressBar = document.querySelector(".scroll-progress");
  const contactForm = document.getElementById("contact-form");
  const formResponse = document.getElementById("form-response");

  const savedTheme = localStorage.getItem("portfolio-theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const activeTheme = savedTheme || preferredTheme;
  setTheme(activeTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener("click", () => {
      navLinksContainer.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinksContainer) navLinksContainer.classList.remove("open");
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const updateProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    if (progressBar) progressBar.style.transform = `scaleX(${ratio})`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 8;
    const y = (event.clientY / window.innerHeight - 0.5) * 8;
    document.documentElement.style.setProperty("--hero-shift-x", `${x}px`);
    document.documentElement.style.setProperty("--hero-shift-y", `${y}px`);
  });

  document.addEventListener("click", (event) => {
    const target = event.target.closest("button, a");
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });

  if (contactForm && formResponse) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      formResponse.textContent = `Thank you, ${name || "there"}! Your message has been received.`;
      contactForm.reset();
    });
  }

  const sections = document.querySelectorAll("section[id]");
  const setActiveNavLink = () => {
    const scrollPosition = window.scrollY + 140;
    let currentId = "home";
    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        currentId = section.id;
      }
    });
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`));
  };

  window.addEventListener("scroll", setActiveNavLink, { passive: true });
  setActiveNavLink();
  typeHeroTitle(profile.welcomeMessage);

  setTimeout(() => body.classList.add("loaded"), 1100);
}

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  const toggle = document.getElementById("theme-toggle");
  if (toggle) toggle.textContent = theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("portfolio-theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  populateProfile();
  initEffects();
});
