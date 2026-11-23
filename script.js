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

const areas = [
  { value: "downtown", label: "Downtown" },
  { value: "midtown", label: "Midtown" },
  { value: "uptown", label: "Uptown" },
  { value: "anywhere", label: "Anywhere" }
];

console.log("script.js is connected");

const moodContainer = document.getElementById("mood-options");
const selectionLine = document.getElementById("selection-line");
const moodFeedback = document.getElementById("mood-feedback");
const areaSelect = document.getElementById("area-select");

// selectedMood: visitors need the summary to reflect how they feel right now.
let selectedMood = "quiet";
// selectedArea: visitors need the recommendation to reflect where they will go.
let selectedArea = "midtown";

// Does this area match the visitor's current choice? Returns true or false.
function isSelectedArea(area) {
  return area.value === selectedArea;
}

areaSelect.addEventListener("change", (event) => {
  selectedArea = event.target.value;
  render();
});

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

  // Rebuild the select options so the visible area always agrees with state.
  areaSelect.replaceChildren();
  areas.forEach((area) => {
    const option = document.createElement("option");

    option.value = area.value;
    option.textContent = area.label;
    option.selected = isSelectedArea(area);

    areaSelect.appendChild(option);
  });

  const activeMood = moods.find((mood) => mood.value === selectedMood);
  const activeArea = areas.find((area) => isSelectedArea(area));
  selectionLine.textContent = `${activeMood.label} / Cafe / ${activeArea.label}`;

  if (selectedMood === "quiet") {
    moodFeedback.textContent = "We'll prioritize calm, low-noise spots.";
  } else {
    moodFeedback.textContent = `We'll prioritize places that feel ${activeMood.label.toLowerCase()}.`;
  }

  console.log("rendered state:", { selectedMood, selectedArea });
}

// Draw the starting state when the page first loads.
render();
