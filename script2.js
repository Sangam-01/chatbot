function redirectToLink() {
  // Get the selected language value from the dropdown
  var selectedLanguage = document.getElementById("languageSelect").value;

  // Define the URLs for each language
  var languageUrls = {
    "english": "english.html",
    "Marathi": "marathi.html",
    "Hindi": "hindi.html"
  };

  // Redirect the user to the corresponding language page
  var selectedUrl = languageUrls[selectedLanguage];
  if (selectedUrl) {
    window.location.href = selectedUrl;
  }
}
function redirectToMainPage() {
  window.location.href = "index.html"; // Replace "index.html" with the filename of your main page
}
