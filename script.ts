// Toggle function to hide or show a section
const showSectionVisibility = (sectionClass: string) => {
    const section = document.querySelector(`.${sectionClass}`) as HTMLElement;
    if (section.style.display === "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  };
  
  // Add event listeners to the buttons
    const showFunction = () => {
    const showSkillsButton = document.getElementById("showSkills");
    const showExperienceButton = document.getElementById("showExperience");
    const showEducationButton = document.getElementById("showEducation");
    const showLanguagesButton = document.getElementById("showLanguages");
    
    showSkillsButton?.addEventListener("click", () => {
      showSectionVisibility("skills");
    });
  
    showExperienceButton?.addEventListener("click", () => {
      showSectionVisibility("work-experience");
    });
  
    showEducationButton?.addEventListener("click", () => {
      showSectionVisibility("education");
    });

    showLanguagesButton?.addEventListener("click", () => {
      showSectionVisibility("languages");
    });
    

    // showLanguagesButton?.addEventListener("click", () =>{
    //   showSectionVisibility("languages")
    // })
  };
  
  showFunction();
  