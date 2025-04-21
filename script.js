document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector("header nav");
  const darkModeToggle = document.getElementById("darkmode-icon");
  const darkModeIcon = document.getElementById("darkmode-icon");

  function handleScroll() {
    const top = window.scrollY;

    sections.forEach((section) => {
      const offset = section.offsetTop - 150;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active", "color-change");
        });
        document
          .querySelector(`header nav a[href="#${id}"]`)
          .classList.add("active", "color-change");
      }
    });

    if (top === 0) {
      navLinks.forEach((link) => {
        link.classList.remove("active", "color-change");
      });
      document
        .querySelector('header nav a[href="#home"]')
        .classList.add("active", "color-change");
    }

    const header = document.querySelector(".header");
    header.classList.toggle("sticky", top > 100);
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    darkModeIcon.classList.toggle("bx-moon");
    darkModeIcon.classList.toggle("bx-sun");
  }

  function toggleMenu() {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
    document.body.classList.toggle("mobile-nav-active");
  }

  window.onscroll = () => {
    handleScroll();
  };

  menuIcon.onclick = () => {
    toggleMenu();
  };

  darkModeToggle.onchange = () => {
    toggleDarkMode();
  };

  darkModeIcon.onclick = () => {
    toggleDarkMode();
  };

  navLinks.forEach((link) => {
    link.onclick = () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    };
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);
  });

  handleScroll(); // Initial scroll check

  // Initialize ScrollReveal
  ScrollReveal().reveal(".home-content, .heading", {
    origin: "top",
    reset: true,
    distance: "80px",
    duration: 1500,
    delay: 100,
  });
  ScrollReveal().reveal(
    ".home-img img, .services-container, .portfolio-box, contact form",
    {
      origin: "bottom",
      reset: true,
      distance: "80px",
      duration: 1500,
      delay: 100,
    }
  );
  ScrollReveal().reveal(".home-content h1, .about-img img", {
    origin: "left",
    reset: true,
    distance: "80px",
    duration: 1500,
    delay: 100,
  });
  ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
    origin: "right",
    reset: true,
    distance: "80px",
    duration: 1500,
    delay: 100,
  });

  const typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "UI/UX Designer", "Content Writer", "Crickter"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  // Create custom thank you modal
  const modalHTML = `
    <div id="thank-you-modal" class="thank-you-modal">
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <div class="modal-icon">
          <i class='bx bx-check-circle'></i>
        </div>
        <h3>Thank You!</h3>
        <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
        <button class="btn btn-primary modal-btn">Great!</button>
      </div>
    </div>
  `;

  // Append modal to body
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modal = document.getElementById("thank-you-modal");
  const closeBtn = document.querySelector(".close-modal");
  const modalBtn = document.querySelector(".modal-btn");

  // Close modal functions
  function closeModal() {
    modal.classList.remove("show-modal");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }

  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }

  if (modalBtn) {
    modalBtn.onclick = closeModal;
  }

  // Close on outside click
  window.onclick = function (e) {
    if (e.target === modal) {
      closeModal();
    }
  };

  // Form submission with custom modal
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      modal.style.display = "flex";
      modal.classList.add("show-modal");

      setTimeout(() => {
        contactForm.submit();
      }, 2000);
    });
  }
});
