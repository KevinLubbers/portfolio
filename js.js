var darkMode = false;
function toggleDarkMode(){
    let icon = document.getElementById("navUIDark");
    let translate = document.getElementById("navUIMenu");
    if(darkMode){
        icon.src = "imgs/sun.png";
        translate.src = "imgs/translate-day.png";
        darkMode = false;
    }else{
        icon.src = "imgs/moon.png";
        translate.src = "imgs/translate-night.png";
        darkMode = true;
    }
    
    let tagNames = ['body','div', 'nav', 'article', 'p', 'aside',
    'ul', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'figure',
    'figcaption', 'section', 'hr', 'a'];
    
    // Function to add the "dark" class to elements by tag names
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

        dropdown.style.display = "flex";

        let calc = icon.getBoundingClientRect();
        dropdown.style.top = calc.bottom + "px";
        dropdown.style.left = calc.left + "px";
        dropdown.style.width = calc.width + "px";

        event.preventDefault();
        event.stopPropagation();

        dropdown.addEventListener("mouseleave", function(event){
            dropdown.style.display = "none";
        });
    });

    
