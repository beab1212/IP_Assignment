const navLinks = document.querySelector(".nav-links");

function navToggler() {
    if(navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }    
}


function submitHandler(e) {
    // e.preventDefault();
    
    alert("Thanks, Our team will let you know...")
}


/**
 * the JavaScript intersection observer API is a tool that
 * lets you know when an element on a webpage is visible on the screen.
 */
const video = document.getElementById("bg-video");
const videoContainer = document.querySelector(".video-container");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (video.currentTime <= 22.3) {
                video.play();
            }
        } else {
            video.pause();
        }
    });
});

observer.observe(videoContainer);

/**
 * stops the video at 22 seconds.
 */
const videoOverlay = document.querySelector(".video-overlay");

video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 22.3) {
        videoOverlay.style.display = "block";
        video.pause();
    }
});

/**
 *
 */
const inputChecker = document.querySelector(".checker");
const fileInput = document.querySelector(".file-input");

function checkerHandler() {
    console.log();
    if (inputChecker.checked) {
        fileInput.style.display = "block";
    } else {
        fileInput.style.display = "none";
    }
}

console.log("JS integrated successfully");
