      function isValidUrl(url) {
        try {
          new URL(url);
          return true;
        } catch (err) {
          return false;
        }
      }
      
	  function showTextBox() {
        var checkbox = document.getElementById("ipCheckbox");
        var textBox = document.getElementById("ipTextBox");
        
        if (checkbox.checked == true) {
          textBox.style.display = "block";
        } else {
          textBox.style.display = "none";
        }
      }
