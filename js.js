const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const sizeForStars = Math.round(windowWidth * windowHeight * 0.00025);
function createStars(numStars) {
    const body = document.body;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.classList.add("hide");

        const top = Math.random() * 100; 
        const left = Math.random() * 100; 
        
        star.style.top = `${top}%`;
        star.style.left = `${left}%`;
        
        const size = Math.random() * 3 + 1; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        body.appendChild(star);
    }
}
function randomizeTwinkle() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const randomDuration = (Math.random() * 2 + 3).toFixed(2);
        const randomDelay = (Math.random() * 3).toFixed(2); 
        star.style.animationDuration = `${randomDuration}s`;
        star.style.animationDelay = `${randomDelay}s`;
    });
}
createStars(sizeForStars);
randomizeTwinkle();

let darkMode = false;
function checkDarkMode(){
    if(localStorage.getItem("darkMode") == "true"){
        toggleDarkMode();
    }
}
checkDarkMode();
function toggleDarkMode(){
    let icon = document.getElementById("navUIDark");
    let translate = document.getElementById("navUIMenu");
    let git_icon = document.getElementsByClassName("gitUI");
    let stars = document.getElementsByClassName("star");

    icon.classList.remove('icon-animate');
    void icon.offsetWidth;
    icon.classList.add('icon-animate');
    if(darkMode){
        icon.src = "imgs/sun.png";
        translate.src = "imgs/translate-day.png";
        for (let i = 0; i < git_icon.length; i++) {
            git_icon[i].src = "imgs/github_day.svg";
        }
        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.add("hide");
        }
        darkMode = false;
        localStorage.setItem("darkMode", darkMode);
    }else{
        icon.src = "imgs/moon.png";
        translate.src = "imgs/translate-night.png";
        for (let i = 0; i < git_icon.length; i++) {
            git_icon[i].src = "imgs/github_night.svg";
        }
        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.remove("hide");
        }
        darkMode = true;
        localStorage.setItem("darkMode", darkMode);
    }
    
    //loop through all listed tags and add dark class to each element
    let tagNames = ['body','div','section', 'h1', 'h2', 'nav', 'article', 'p', 'aside',
    'ul', 'li', 'h3', 'figure',
    'figcaption', 'hr', 'a'];
    function addDarkClassByTagNames(tagNames) {
        tagNames.forEach(tagName => {
            var elements = document.getElementsByTagName(tagName);
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.toggle("dark");
            }
        });
    }
    addDarkClassByTagNames(tagNames);
}
    
let icon = document.getElementById("navUIMenu");
let dropdown = document.getElementById("dropdownContent");

icon.addEventListener("click", function(event){
    event.stopPropagation();
    icon.classList.remove('icon-animate');
    void icon.offsetWidth;
    icon.classList.add('icon-animate');

    if (dropdown.style.display === "flex") {
        dropdown.style.display = "none"; 
    } else {
        //positions dropdown relative to icon - lined up with header bottom
        let calc = icon.getBoundingClientRect();
        dropdown.style.display = "flex";
        dropdown.style.top = (calc.bottom + 21) + "px";
        dropdown.style.left= (calc.left - 105) +"px";
        dropdown.style.width = calc.width + "px";
    }
});

//close dropdown if user clicks outside menu or on icon
document.addEventListener("click", function(event) {
    if (!icon.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});




    