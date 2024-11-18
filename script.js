// Script File

// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends
 

// About Section Starts
$('.testimonials-slider').owlCarousel({
    loop:false,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
// About Section Ends

// Logout Section Starts

document.getElementById('logoutButton').addEventListener('click', function() {
    // Clear session storage or local storage, depending on how the user session is stored
    sessionStorage.clear();
    localStorage.clear();

    // Optionally, send a request to the server to log out (useful if you have an active session on the server side)
    // Example (this requires a backend endpoint):
    // fetch('/logout', { method: 'POST', credentials: 'include' })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Logged out:', data);
    //   });

    // Redirect to login or homepage
    window.location.href = 'index.html';  // Replace with the path to your login or homepage
  });

// Logout Section Ends

// Status Section Starts

 // Select all buttons with the class 'statusButton'
 const buttons = document.querySelectorAll('.statusButton');

 // Loop through each button and add an event listener
 buttons.forEach((button) => {
   button.addEventListener('click', function() {
     const statusDiv = this.nextElementSibling; // Get the associated status div

     // Check current status to toggle color and text
     if (this.textContent === 'Start Course') {
       // Change button text and update status message
       this.textContent = 'Drop Course';
       this.classList.add('started'); // Add class for started color
       statusDiv.textContent = 'Started';
     } else {
       // Toggle back to original state
       this.textContent = 'Start Course';
       this.classList.remove('started'); // Remove started color
       statusDiv.textContent = 'Not Yet Started';
     }
   });
 });

// Status Section Ends