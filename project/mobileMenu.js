document.addEventListener("DOMContentLoaded", () => {
    const sidemenu = document.getElementById("sidemenu");
    const hamburger = document.querySelector(".fa-bars");
    const xmark = document.querySelector(".fa-xmark");

    hamburger.addEventListener("click", () => {
        sidemenu.style.right = "0";
    });

    xmark.addEventListener("click", () => {
        sidemenu.style.right = "-300px";
    });
});