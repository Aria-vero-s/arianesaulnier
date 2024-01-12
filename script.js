document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });  
});


document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the visibility of a specific case study section
    function toggleCaseStudy(caseStudyId) {
      const selectedCaseStudy = document.getElementById(caseStudyId);
  
      if (!selectedCaseStudy.classList.contains('visible')) {
        selectedCaseStudy.style.display = 'block';
        selectedCaseStudy.style.maxHeight = selectedCaseStudy.scrollHeight + 'px';
        selectedCaseStudy.classList.add('visible');
      } else {
        selectedCaseStudy.style.maxHeight = '0';
        selectedCaseStudy.classList.remove('visible');
        selectedCaseStudy.addEventListener('transitionend', function() {
          // Hide the case study section after the transition
          if (!selectedCaseStudy.classList.contains('visible')) {
            selectedCaseStudy.style.display = 'none';
          }
        });
      }
    }
  
    // Add event listeners to the "Case Study" buttons
    document.getElementById('case-study-button1').addEventListener('click', function() {
      toggleCaseStudy('case-study1');
    });
  
    document.getElementById('case-study-button2').addEventListener('click', function() {
      toggleCaseStudy('case-study2');
    });

    document.getElementById('case-study-button3').addEventListener('click', function() {
      toggleCaseStudy('case-study3');
    });

    document.getElementById('case-study-button4').addEventListener('click', function() {
      toggleCaseStudy('case-study4');
    });

    document.getElementById('case-study-button5').addEventListener('click', function() {
      toggleCaseStudy('case-study5');
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const emailIcon = document.getElementById('email-icon');
    const emailAddress = document.getElementById('email-address');
  
    // Function to toggle the visibility of the email address
    function toggleEmail() {
      emailAddress.classList.toggle('hidden');
    }
  
    // Add a click event listener to the email icon
    emailIcon.addEventListener('click', toggleEmail);
  });
  

// Email configuration

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("BRInTh0xHPku6Lr0u");

  console.log("DOMContentLoaded event fired");
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  // Add a submit event listener to the form
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

      // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form submitted");

    // Use the emailjs.sendForm method to send the form
    emailjs
      .sendForm("service_djf8d02", "template_lv5j9eq", contactForm)
      .then(
        function(response) {
          console.log("Email sent successfully", response);
          successMessage.style.display = "block";
        },
        function(error) {
          console.log("Email sending failed", error);
          console.error(error);

          // Additional debugging information:
          if (error.response) {
            console.log("Response data:", error.response.data);
            console.log("HTTP status:", error.response.status);
            console.log("Headers:", error.response.headers);
          }
          errorMessage.style.display = "block";
        }
      );
  });
});