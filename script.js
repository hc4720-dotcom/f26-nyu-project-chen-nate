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

console.log("script.js is connected");

const moodContainer = document.getElementById("mood-options");
const selectionLine = document.getElementById("selection-line");
const moodFeedback = document.getElementById("mood-feedback");

// selectedMood: visitors need the summary to reflect how they feel right now.
let selectedMood = "quiet";

// Each object becomes one button inside the existing mood fieldset.
moods.forEach((mood) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "choice";
  button.dataset.mood = mood.value;
  button.textContent = mood.label;

  // Preserve the mockup's initial Quiet selection.
  const isSelected = mood.value === selectedMood;
  button.classList.toggle("is-selected", isSelected);
  button.setAttribute("aria-pressed", String(isSelected));

  button.addEventListener("click", () => {
    selectedMood = mood.value;
    console.log("selectedMood:", selectedMood);

    moodContainer.querySelectorAll(".choice").forEach((choice) => {
      const choiceIsSelected = choice.dataset.mood === selectedMood;
      choice.classList.toggle("is-selected", choiceIsSelected);
      choice.setAttribute("aria-pressed", String(choiceIsSelected));
    });

    selectionLine.textContent = `${mood.label} / Cafe / Midtown`;

    if (selectedMood === "quiet") {
      moodFeedback.textContent = "We'll prioritize calm, low-noise spots.";
    } else {
      moodFeedback.textContent = `We'll prioritize places that feel ${mood.label.toLowerCase()}.`;
    }
  });

  moodContainer.appendChild(button);
});
