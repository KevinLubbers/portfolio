var darkMode = false;
function createStars(numStars) {
            const body = document.body;
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.classList.add('star');

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
createStars(200);
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
        let calc = icon.getBoundingClientRect();
        dropdown.style.display = "flex";
        dropdown.style.top = calc.bottom + "px";
        dropdown.style.left = calc.left + "px";
        dropdown.style.width = calc.width + "px";

        event.preventDefault();
        event.stopPropagation();

        dropdown.addEventListener("mouseleave", function(event){
            dropdown.style.display = "none";
        });
    });



    