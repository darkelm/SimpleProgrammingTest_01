// Optionally, set an id or class
const sectionChangeButton = document.getElementById("sectionChangerButton");

// Add an event listener (optional)
sectionChangeButton.addEventListener("click", () => {
  alert("Button clicked!");
  const mainSection = document.getElementById("mainSection");
  mainSection.style.backgroundColor = "red";
});
