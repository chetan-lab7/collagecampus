const background = document.getElementById("background");

// Function to change the background when a college is selected
function changeCollege(college) {
    let bgImage = "./assets/default_bg.jpg"; // Default background

    if (college === "cmr") {
        bgImage = "./assets/cmr_bg.jpg";
    } else if (college === "ramaiah") {
        bgImage = "./assets/ramaiah_bg.jpg";
    } else if (college === "rv") {
        bgImage = "./assets/rv_bg.jpg";
    }

    // Change background image dynamically
    background.style.background = `url('${bgImage}') no-repeat center center/cover`;
}
