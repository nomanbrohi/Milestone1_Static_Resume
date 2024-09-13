// Toggle function to hide or show a section
var showSectionVisibility = function (sectionClass) {
    var section = document.querySelector(".".concat(sectionClass));
    if (section.style.display === "none") {
        section.style.display = "block";
    }
    else {
        section.style.display = "none";
    }
};
// Add event listeners to the buttons
var showFunction = function () {
    var showSkillsButton = document.getElementById("showSkills");
    var showExperienceButton = document.getElementById("showExperience");
    var showEducationButton = document.getElementById("showEducation");
    var showLanguagesButton = document.getElementById("showLanguages");
    showSkillsButton === null || showSkillsButton === void 0 ? void 0 : showSkillsButton.addEventListener("click", function () {
        showSectionVisibility("skills");
    });
    showExperienceButton === null || showExperienceButton === void 0 ? void 0 : showExperienceButton.addEventListener("click", function () {
        showSectionVisibility("work-experience");
    });
    showEducationButton === null || showEducationButton === void 0 ? void 0 : showEducationButton.addEventListener("click", function () {
        showSectionVisibility("education");
    });
    showLanguagesButton === null || showLanguagesButton === void 0 ? void 0 : showLanguagesButton.addEventListener("click", function () {
        showSectionVisibility("languages");
    });
    // showLanguagesButton?.addEventListener("click", () =>{
    //   showSectionVisibility("languages")
    // })
};
showFunction();
