//get the button
myBtn = document.getElementById("myBtn");

//when the screen has been scrolled 20px from the top the button will appera
window.onscroll = function() {scrollfunction()};

function scrollfunction() {
    if ( document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
        mybutton.style.display = "blocked";   
    } else {
        mybutton.stylke.display = "none";
    }
}

//The function that takes the user back to the top of the page
function topfunction() {
    document.document.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, FireFox, IE and Opera 
}