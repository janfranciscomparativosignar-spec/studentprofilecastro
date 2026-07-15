const profile = {
  welcomeMessage: "Hello, I'm Princess Jane G. Castro",
  motto: "Turning curiosity into knowledge and knowledge into innovation.",
  fullName: "Princess Jane G. Castro",
  age: 19,
  location: "Purok 5 Castillo Village, Mangagoy, Bislig City",
  address: "Purok 5 Castillo Village, Mangagoy, Bislig City",
  courseYear: "Bachelor of Science in Information Technology · First Year",
  summary: "A driven student with a growing interest in web development, design, and practical problem-solving.",
  bio: "My name is Princess Jane G. Castro. I am a dedicated and hardworking Information Technology student with a passion for technology and continuous learning. I enjoy exploring new tools, building user-friendly web experiences, and turning ideas into polished digital products.",
  careerGoals: "My career goal is to become a skilled and successful Information Technology professional. I aim to strengthen my programming, design, and system development abilities while contributing to solutions that create value for people and communities.",
  personalInfo: [
    { label: "Full Name", value: "Princess Jane G. Castro" },
    { label: "Age", value: "19" },
    { label: "Birthday", value: "March 6, 2006" },
    { label: "Gender", value: "Female" },
    { label: "Address", value: "Purok 5 Castillo Village, Mangagoy, Bislig City" },
    { label: "Email", value: "castroprincessjane067@gmail.com" },
    { label: "Contact Number", value: "09850400472" }
  ],
  aboutBadges: ["Dedicated Learner", "Problem Solver", "Team Player", "Creative Thinker"],
  stats: [
    { label: "Projects", value: "3+" },
    { label: "Certificates", value: "3" },
    { label: "Skills", value: "10+" },
    { label: "Experience", value: "2" }
  ],
  education: [
    { level: "Elementary", school: "Mangagoy Central Elementary School", year: "Completed", icon: "✦" },
    { level: "Junior High", school: "Tabon Maximino Estrella National High School", year: "Completed", icon: "✦" },
    { level: "Senior High", school: "Tabon Maximino Estrella National High School", year: "Completed", icon: "✦" },
    { level: "College", school: "De La Salle John Bosco College", year: "Current", icon: "✦" }
  ],
  skills: {
    technical: [
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "Basic PHP", level: 70 },
      { name: "Basic Database Management (MySQL)", level: 74 }
    ],
    programming: ["CSS", "JavaScript", "Basic PHP", "MySQL"],
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
    { title: "SmartSpend: Personal Budget Tracker System", description: "A web-based budgeting and expense management platform designed to help users stay organized and grow better financial habits.", tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL", "JavaScript"], icon: "💰", demo: "", github: "" }
  ],
  certificates: [
    { title: "NSTP Completion Certificate", org: "School Program", date: "2025", icon: "🏅" },
    { title: "Academic Excellence Award", org: "Academic Office", date: "2024", icon: "🎖️" },
    { title: "Digital Skills Workshop", org: "School Seminar", date: "2024", icon: "💡" }
  ],
  gallery: [
    { title: "Personal Photo", category: "Personal", image: "uploads/personal%20photo.jpg" },
    { title: "Organizational Activity", category: "Organization", image: "uploads/organizational%20activities.jpg" },
    { title: "School Activity", category: "School", image: "uploads/school%20activities.jpg" },
    { title: "Community Involvement", category: "Community", image: "uploads/community%20involvement.jpg" }
  ],
  experience: ["Yogo Assistant Worker — assisted in daily store operations and customer interactions.", "STL Teller — handled transaction accuracy and routine service tasks."],
  references: ["Available upon request", "Can be provided for formal opportunities."]
};

const state = {
  projectQuery: "",
  certificateQuery: "",
  galleryFilter: "All"
};

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

function isValidExternalLink(value) {
  if (!value) return false;
  const trimmed = value.trim();
  if (!trimmed || trimmed === "#" || trimmed === "https://github.com/" || trimmed === "https://github.com") return false;
  return /^https?:\/\//i.test(trimmed);
}

function renderProjects() {
  const search = state.projectQuery.toLowerCase();
  const filtered = profile.projects.filter((project) => {
    const haystack = `${project.title} ${project.description} ${project.tech.join(" ")}`.toLowerCase();
    return haystack.includes(search);
  });

  document.getElementById("project-grid").innerHTML = filtered.map((project) => `
    <article class="portfolio-card">
      <div class="portfolio-media">${escapeHtml(project.icon)}</div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <div class="tag-row">${project.tech.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
      <div class="project-actions">
        ${isValidExternalLink(project.demo) ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>` : ""}
        ${isValidExternalLink(project.github) ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderCertificates() {
  const search = state.certificateQuery.toLowerCase();
  const filtered = profile.certificates.filter((item) => {
    const haystack = `${item.title} ${item.org} ${item.date}`.toLowerCase();
    return haystack.includes(search);
  });

  document.getElementById("certificate-grid").innerHTML = filtered.map((item) => `
    <article class="portfolio-card">
      <div class="portfolio-media">${escapeHtml(item.icon)}</div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.org)}</p>
      <p>${escapeHtml(item.date)}</p>
      <div class="project-actions">
        <a href="#contact">View</a>
        <a href="assets/resume.pdf" target="_blank" rel="noreferrer">Download</a>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  const filtered = state.galleryFilter === "All"
    ? profile.gallery
    : profile.gallery.filter((item) => item.category === state.galleryFilter);

  document.getElementById("gallery-grid").innerHTML = filtered.map((item) => `
    <article class="gallery-item" data-image="${item.image}" data-title="${escapeHtml(item.title)}">
      <img src="${item.image}" alt="${escapeHtml(item.title)}" />
      <div class="gallery-info">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.category)}</p>
      </div>
    </article>
  `).join("");
}

function populateProfile() {
  document.getElementById("welcome-message").textContent = "";
  document.getElementById("motto").textContent = profile.motto;
  document.getElementById("profile-summary").textContent = profile.summary;
  document.getElementById("bio").textContent = profile.bio;
  document.getElementById("career-goals").textContent = profile.careerGoals;
  document.getElementById("resume-summary").textContent = profile.bio;
  document.getElementById("about-badges").innerHTML = profile.aboutBadges.map((item) => `<span>${escapeHtml(item)}</span>`).join("");

  document.getElementById("hero-stats").innerHTML = profile.stats.map((item) => `
    <div class="stat-card">
      <strong>${escapeHtml(item.value)}</strong>
      <span>${escapeHtml(item.label)}</span>
    </div>
  `).join("");

  document.getElementById("personal-info-summary").innerHTML = profile.personalInfo.map((item) => `
    <div class="info-row"><span>${escapeHtml(item.label)}</span><span>${escapeHtml(item.value)}</span></div>
  `).join("");
  document.getElementById("personal-info-detailed").innerHTML = profile.personalInfo.map((item) => `
    <div class="info-row"><span>${escapeHtml(item.label)}</span><span>${escapeHtml(item.value)}</span></div>
  `).join("");

  document.getElementById("education-list").innerHTML = profile.education.map((item) => `
    <article class="timeline-card">
      <div class="timeline-badge">${escapeHtml(item.icon)}</div>
      <div>
        <div class="timeline-year">${escapeHtml(item.year)}</div>
        <h3>${escapeHtml(item.level)}</h3>
        <p>${escapeHtml(item.school)}</p>
      </div>
    </article>
  `).join("");

  document.getElementById("technical-skills-list").innerHTML = profile.skills.technical.map((skill) => `
    <div class="skill-item">
      <div class="skill-top"><span>${escapeHtml(skill.name)}</span><strong>${skill.level}%</strong></div>
      <div class="progress-bar"><span style="--value:${skill.level}%"></span></div>
    </div>
  `).join("");

  document.getElementById("soft-skills-list").innerHTML = profile.skills.soft.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  document.getElementById("programming-languages-list").innerHTML = profile.skills.programming.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  document.getElementById("software-applications-list").innerHTML = profile.skills.software.map((item) => `
    <div class="app-card">
      <div class="app-icon">${escapeHtml(item.icon)}</div>
      <strong>${escapeHtml(item.name)}</strong>
    </div>
  `).join("");

  document.getElementById("resume-education").innerHTML = profile.education.map((item) => `<li>${escapeHtml(item.level)} — ${escapeHtml(item.school)}</li>`).join("");
  document.getElementById("resume-skills").innerHTML = profile.skills.programming.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  document.getElementById("experience-list").innerHTML = profile.experience.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  document.getElementById("references-list").innerHTML = profile.references.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  renderProjects();
  renderCertificates();
  renderGallery();
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

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  const toggle = document.getElementById("theme-toggle");
  if (toggle) toggle.textContent = theme === "dark" ? "☾" : "☀️";
  localStorage.setItem("portfolio-theme", theme);
}

function initEffects() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const navLinks = document.querySelectorAll(".nav-link");
  const progressBar = document.querySelector(".scroll-progress");
  const contactForm = document.getElementById("contact-form");
  const formResponse = document.getElementById("form-response");
  const backToTop = document.getElementById("back-to-top");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
  const settingsLink = document.getElementById("settings-link");

  const savedTheme = localStorage.getItem("portfolio-theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  setTheme(savedTheme || preferredTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  if (settingsLink) {
    settingsLink.addEventListener("click", (event) => {
      event.preventDefault();
      const nextTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (sidebar) sidebar.classList.remove("open");
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const updateProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    if (progressBar) progressBar.style.transform = `scaleX(${ratio})`;
  };

  const updateBackToTop = () => {
    if (backToTop) {
      backToTop.classList.toggle("show", window.scrollY > 320);
    }
  };

  window.addEventListener("scroll", () => {
    updateProgress();
    updateBackToTop();
  }, { passive: true });
  updateProgress();
  updateBackToTop();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest("button, a, .gallery-item");
    if (!target) return;
    if (target.classList.contains("gallery-item")) {
      const imageSrc = target.getAttribute("data-image");
      const title = target.getAttribute("data-title");
      if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightboxImage.alt = title;
        lightbox.classList.add("open");
      }
      return;
    }
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", () => {
      if (lightbox) lightbox.classList.remove("open");
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) lightbox.classList.remove("open");
    });
  }

  const projectSearch = document.getElementById("project-search");
  if (projectSearch) {
    projectSearch.addEventListener("input", (event) => {
      state.projectQuery = event.target.value;
      renderProjects();
    });
  }

  const certificateSearch = document.getElementById("certificate-search");
  if (certificateSearch) {
    certificateSearch.addEventListener("input", (event) => {
      state.certificateQuery = event.target.value;
      renderCertificates();
    });
  }

  const filterChips = document.getElementById("gallery-filters");
  if (filterChips) {
    const categories = ["All", "Personal", "Organization", "School", "Community"];
    filterChips.innerHTML = categories.map((category) => `
      <button class="filter-chip ${category === state.galleryFilter ? "active" : ""}" type="button" data-filter="${category}">${category}</button>
    `).join("");

    filterChips.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        state.galleryFilter = chip.getAttribute("data-filter");
        renderGallery();
        filterChips.querySelectorAll(".filter-chip").forEach((item) => item.classList.toggle("active", item.getAttribute("data-filter") === state.galleryFilter));
      });
    });
  }

  if (contactForm && formResponse) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name") || "there";
      formResponse.textContent = `Thank you, ${name}! Your message has been received.`;
      contactForm.reset();
    });
  }

  const sections = document.querySelectorAll("section[id]");
  const setActiveNavLink = () => {
    const scrollPosition = window.scrollY + 150;
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

  setTimeout(() => body.classList.add("loaded"), 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  populateProfile();
  initEffects();
});
