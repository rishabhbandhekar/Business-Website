// You can later add scroll or interaction-based animations here
console.log("Website loaded successfully.");

// Prevent form refresh on submit
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
  });
  
  const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  // Save theme preference
  const theme = body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", theme);
});

// Particle JS
particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80 },
      "color": { "value": "#00f6ff" },
      "shape": {
        "type": "circle",
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00f6ff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "bounce": false
      }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "repulse": { "distance": 100, "duration": 0.4 },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });

  
  // Show/hide password
document.querySelectorAll(".toggle-password").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = btn.parentElement.querySelector("input");
      input.type = input.type === "password" ? "text" : "password";
    });
  });
  
  // Optional: Fake redirect to dashboard
  document.querySelectorAll("form.auth-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  });



// Particle JS
particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80 },
      "color": { "value": "#00f6ff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3, "random": true },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00f6ff",
        "opacity": 0.4,
        "width": 1
      },
      "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "repulse": { "distance": 100, "duration": 0.4 },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });
  
  // Toggle password
  document.querySelectorAll(".toggle-password").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = btn.parentElement.querySelector("input");
      input.type = input.type === "password" ? "text" : "password";
    });
  });
  
  // Fake submit
  document.querySelectorAll("form.auth-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Login Successful!");
      window.location.href = "dashboard.html";
    });
  });
  
  // Particle JS
if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80 },
        color: { value: "#00f6ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00f6ff",
          opacity: 0.4,
          width: 1
        },
        move: { enable: true, speed: 2 }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }


  // Chart.js - User Activity Chart
const ctx = document.getElementById('activityChart');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
        label: 'Active Users',
        data: [120, 190, 300, 250, 270, 400, 460],
        borderColor: '#00f6ff',
        backgroundColor: 'rgba(0, 246, 255, 0.2)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#00f6ff'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: '#fff' }
        }
      },
      scales: {
        x: { ticks: { color: '#fff' }, grid: { color: '#333' } },
        y: { ticks: { color: '#fff' }, grid: { color: '#333' } }
      }
    }
  });
}



// Smooth scroll for Explore Services
document.querySelectorAll('.explore-btn').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Optional click pulse animation
document.querySelectorAll('.explore-btn').forEach(btn => {
  btn.addEventListener('mousedown', function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

  