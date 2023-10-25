function navBar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

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
  