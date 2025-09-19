document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu ---
  const menu = document.querySelector('#menu-icon');
  const navlist = document.querySelector('.navlist');
  const navLinks = document.querySelectorAll('.navlist a');

  if (menu && navlist) {
    menu.addEventListener("click", () => {
      const expanded = menu.classList.toggle('bx-x');
      navlist.classList.toggle('open');
      menu.setAttribute("aria-expanded", expanded);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Booking Form Validation ---
  const bookingForm = document.getElementById("bookingForm");
  const bookingEmail = document.getElementById("booking-email");

  if (bookingForm && bookingEmail) {
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email.toLowerCase());
    }

    bookingForm.addEventListener("submit", (e) => {
      const email = bookingEmail.value.trim();
      const dateRange = document.getElementById("check-in").value;

      if (!dateRange) {
        e.preventDefault();
        alert("Please select a booking date range.");
        return;
      }
      if (!isValidEmail(email)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
        bookingEmail.focus();
        return;
      }
      alert("Booking request submitted for: " + dateRange);
    });

    // Initialize Flatpickr only if the field exists
    if (document.getElementById("check-in")) {
      flatpickr("#check-in", {
        mode: "range",
        dateFormat: "Y-m-d",
        minDate: "today"
      });
    }
  }

  // --- Header Scroll Effect ---
  const header = document.querySelector('header');
  if (header) {
    function handleScroll() {
      if (window.scrollY > 0) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
  }

  // --- Auto Update Year ---
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
