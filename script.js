function redirectToLink() {
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;
  
    switch (selectedLanguage) {
      case "english":
        window.location.href = "english.html";
        break;
      case "Marathi":
        window.location.href = "marathi.html";

        break;
        case "hindi":
          window.location.href = "hindi.html";
        
  
    
        // Default redirect or error handling
        break;
    }
  }
  