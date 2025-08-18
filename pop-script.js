const form = document.getElementById("forms");
const popup = document.getElementById("popup");

form.addEventListener("submit",function(event){
    event.preventDefault(); // Prevent the default form submission
    popup.classList.add("show"); // Show the popup
});

function closepopup(){
    popup.classList.remove("show"); // Hide the popup
    form.reset(); // Reset the form fields
}