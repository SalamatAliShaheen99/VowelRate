
// ya agree trrm and conditon ka agree wla popups ka system hain
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("termsBanner");
  const acceptBtn = document.getElementById("acceptTermsBtn");

  // Check karein ke kya user pehle agree kar chuka hai
  if (localStorage.getItem("userAgreedToTerms") === "true") {
    banner.classList.add("hide-banner");
  }

  // Jab user button par click kare
  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("userAgreedToTerms", "true"); // Browser memory mein save karein
    banner.classList.add("hide-banner"); // Banner ko chupa dein
  });
});