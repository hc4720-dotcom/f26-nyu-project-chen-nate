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

function render() {
  // Clear the previous buttons before rebuilding the view from state.
  moodContainer.replaceChildren();

  // Each array object becomes one button. Its appearance comes from state.
  moods.forEach((mood) => {
    const button = document.createElement("button");
    const isSelected = mood.value === selectedMood;

    button.type = "button";
    button.className = "choice";
    button.classList.toggle("is-selected", isSelected);
    button.dataset.mood = mood.value;
    button.setAttribute("aria-pressed", String(isSelected));
    button.textContent = mood.label;

    button.addEventListener("click", () => {
      selectedMood = mood.value;
      render();
    });

    moodContainer.appendChild(button);
  });

  const activeMood = moods.find((mood) => mood.value === selectedMood);
  selectionLine.textContent = `${activeMood.label} / Cafe / Midtown`;

  if (selectedMood === "quiet") {
    moodFeedback.textContent = "We'll prioritize calm, low-noise spots.";
  } else {
    moodFeedback.textContent = `We'll prioritize places that feel ${activeMood.label.toLowerCase()}.`;
  }

  console.log("rendered selectedMood:", selectedMood);
}

// Draw the starting state when the page first loads.
render();
