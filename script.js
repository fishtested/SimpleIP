// AI Disclosure: I used ChatGPT to help me troubleshoot errors with the copy function.

document.addEventListener("DOMContentLoaded", function() {
    // Fetch the IP address from the ipify API
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("IPaddress").textContent = data.ip; // Adds IP address to HTML
            console.log(data.ip); // Logs IP address in browser console log
        })
        .catch(error => {
            console.error("Error:", error);
        });
});

function copy() {
    // Get the IP address from the content of the <div> element
    var ip = document.getElementById("IPaddress").textContent;
    
    // Copy the IP address to the clipboard
    navigator.clipboard.writeText(ip);
    console.log("Copied IP address", ip)
    
    // Alert
    alert("Copied!");
  }
  
  
