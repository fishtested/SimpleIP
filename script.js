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