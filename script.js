// These are the six mood choices already established in the project mockups.
// value is a stable identifier; label is the text visitors see.
const moods = [
  { value: "quiet", label: "Quiet" },
  { value: "creative", label: "Creative" },
  { value: "social", label: "Social" },
  { value: "romantic", label: "Romantic" },
  { value: "productive", label: "Productive" },
  { value: "adventurous", label: "Adventurous" }
];

const moodContainer = document.getElementById("mood-options");

// Each object becomes one button inside the existing mood fieldset.
moods.forEach((mood) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "choice";
  button.dataset.mood = mood.value;
  button.textContent = mood.label;

  // Preserve the mockup's initial Quiet selection.
  const isSelected = mood.value === "quiet";
  button.classList.toggle("is-selected", isSelected);
  button.setAttribute("aria-pressed", String(isSelected));
  moodContainer.appendChild(button);
});
