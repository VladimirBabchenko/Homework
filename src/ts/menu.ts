const mainNav = document.querySelectorAll("ul > li > a");

[].forEach.call(mainNav, function(elem) {
    let dropDownElem = elem.nextElementSibling;
    dropDownElem && dropDownElem.tagName === "UL" 
    && elem.addEventListener("mouseover", function(event) {
        let target = event.currentTarget;
        let parent = target.closest("li");
        dropDownElem.classList.add("show");

        elem.addEventListener("mouseout", function(event) {
            if (!parent.contains(event.relatedTarget)) {
                dropDownElem.classList.remove("show");
            }
        })
    });
});
console.log(mainNav);