// scripts.js

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {

  /**
   * Highlight Active Nav Link
   * Highlights the current page link in the navbar for better navigation.
   */
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (href === 'index.html' && currentPath === '')) {
      link.classList.add("active");
    }
  });

  /**
   * Handle Contact Form Submission via Formcarry
   * Submits the form using fetch() and shows a Bootstrap toast message on success.
   */
  const form = document.getElementById("contactForm");
  const toastEl = document.getElementById("formToast");

  if (form && toastEl) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default HTML form submission

      const formData = new FormData(form); // Get form data

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json" // Expect JSON response from Formcarry
        }
      })
      .then(response => {
        if (response.ok) {
          const toast = new bootstrap.Toast(toastEl);
          toast.show(); // Show toast success message
          form.reset(); // Reset form fields
        } else {
          alert("There was a problem submitting the form. Please try again.");
        }
      })
      .catch(error => {
        alert("An error occurred. Please try again later.");
      });
    });
  }

  /**
   * Dark Mode Toggle (Optional Feature)
   * Toggle dark mode when a button with ID 'toggleDarkMode' is clicked.
   */
  const toggleBtn = document.getElementById("toggleDarkMode");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  }
});
