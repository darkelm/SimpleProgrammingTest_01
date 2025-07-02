// Optionally, set an id or class
const sectionChangeButton = document.getElementById("sectionChangerButton");

if (sectionChangeButton) {
  // Add an event listener (optional)
  sectionChangeButton.addEventListener("click", () => {
    alert("Button clicked!");
    changeSectionColor("mainSection", "red");
  });
} else {
  console.warn("Button is missing!");
}

function changeSectionColor(sectionID, color) {
  let section = document.getElementById(sectionID);
  if (section) {
    section.style.backgroundColor = color;
  } else {
    console.warn(`${sectionID} not found!`);
  }
}
