var darkMode = false;
function checkDarkMode(){
    if(localStorage.getItem("darkMode") == "true"){
        toggleDarkMode();
    }
}
checkDarkMode();
function toggleDarkMode(){
    let icon = document.getElementById("navUIDark");
    let translate = document.getElementById("navUIMenu");

    if(darkMode){
        icon.src = "imgs/sun.png";
        translate.src = "imgs/translate-day.png";
        darkMode = false;
        localStorage.setItem("darkMode", darkMode);
    }else{
        icon.src = "imgs/moon.png";
        translate.src = "imgs/translate-night.png";
        darkMode = true;
        localStorage.setItem("darkMode", darkMode);
    }
    
    //loop through all listed tags and add dark class to each element
    let tagNames = ['body','div', 'nav', 'article', 'p', 'aside',
    'ul', 'li', 'h1', 'h2', 'h3', 'figure',
    'figcaption', 'section', 'hr', 'a'];
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



    
