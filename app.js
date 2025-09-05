"use strict";

const btnSwitch = document.querySelector(".btn");

btnSwitch.addEventListener("click", function() {
    document.body.classList.toggle("dark-tema");
    document.body.classList.toggle("light-tema");

    if (document.body.classList.contains("dark-tema")) {
        this.textContent = "Light";
    } else {
        this.textContent = "Dark";
    }
});
