function show() {
    document.getElementById("sidemenu").classList.toggle("active");
  }
  
  function changebackground() {
    // Choose a random background image index
    var background = [
        "url('images/background.jpg')",
        "url('images/background2.jpg')",
        "url('images/background3.jpg')",
        "url('images/background4.jpg')",
        "url('images/background5.jpg')",
        "url('images/background6.jpg')",
        "url('images/background7.jpg')"
      ];
      
    var randomIndex = Math.floor(Math.random() * background.length);
    var currentBackground = background[randomIndex];
  
    // Set the CSS variable for the final background image
    document.documentElement.style.setProperty('--current-background', currentBackground);
  
    // Add the background-transition class to the main element (assuming it's #main)
    document.getElementById("main").classList.add("background-transition");
  
    // Remove the class after the animation duration (adjust as desired)
    setTimeout(function() {
      document.getElementById("main").classList.remove("background-transition");
      // Call changebackground again to choose and set a new random background
      changebackground();
    }, 8000); // Adjust the interval (milliseconds) for background change
  }
  
  // Call the function to change the background initially
  changebackground();
  
  // Replace 'background' with your actual array containing background image URLs (7 in this case)


// function changebackground(){
//     var a=document.getElementById("main");

//     var background=[
//         "url('images/background.jpg')",
//         "url('images/background2.jpg')",
//         "url('images/background3.jpg')",
//         "url('images/background4.jpg')",
//         "url('images/background5.jpg')",
//         "url('images/background6.jpg')",
//         "url('images/background7.jpg')",
//     ];

//     // Get a random index from the backgrounds array
//     var randomIndex = Math.floor(Math.random() * background.length);

//     // Set the background image with linear gradient
//     a.style.backgroundImage = "linear-gradient(rgba(0, 0, 0,.4), rgba(0, 0, 0,.4)), " + background[randomIndex];
// }


// // Call the function to change the background initially
// changebackground();

// // Set an interval to change the background every 5000 milliseconds (5 seconds)
// setInterval(changebackground, 3000);



function openpic(pic){
    var Img = document.getElementById("fullimg");
    var box = document.getElementById("fullimgbox");
    Img.src = pic;
    box.style.display = "flex";
}

function closepic(){
    fullimgbox.style.display="none";
}