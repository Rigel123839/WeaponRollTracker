document.addEventListener("DOMContentLoaded", () => {
    // finding buttons
    const kineticButton = document.querySelector(".kinetic-slot");
    const energyButton = document.querySelector(".energy-slot");
    const heavyButton = document.querySelector(".heavy-slot");

    // finding weapon types
    const kineticSection = document.querySelector(".weapon-type-kinetic");
    const energySection = document.querySelector(".weapon-type-energy");
    const heavySection = document.querySelector(".weapon-type-heavy");

    // hide weapon types
    const hideAllSections = () => {
        kineticSection.style.display = "none";
        energySection.style.display = "none";
        heavySection.style.display = "none";
    };

    // toggleable weapon popups
    const toggleVisibility = (section) => {
        if (section.style.display === "none" || section.style.display === "") {
            hideAllSections(); // hide other weapon types when press button
            section.style.display = "block"; // show cicked button
        } else {
            section.style.display = "none"; // hide weapon type when different one is pressed
        }
    };

    // buttons can be clickedandfucklikethat
    kineticButton.addEventListener("click", () => toggleVisibility(kineticSection));
    energyButton.addEventListener("click", () => toggleVisibility(energySection));
    heavyButton.addEventListener("click", () => toggleVisibility(heavySection));

    hideAllSections();
});
