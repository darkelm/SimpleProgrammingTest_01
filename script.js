// Optionally, set an id or class
const sectionChangeButton = document.getElementById("sectionChangerButton");
let isRed = false;
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
  if (section && isRed === false) {
    section.style.backgroundColor = color; // make it red
    isRed = true; // state now is red
  } else if (section) {
    section.style.backgroundColor = "rgb(35, 35, 35)"; // back to default
    isRed = false; // state now is not red
  } else {
    console.warn(`${sectionID} not found!`);
  }
}
