# NYC by Mood

NYC by Mood helps a young adult choose one thoughtful Manhattan destination
without sorting through a long list of results. The user selects a mood, a type
of place, and an area, then receives one recommendation and can open a detailed
place view.

## Assignment 5: HTML Structure

This repository translates the existing Assignment 4 high-fidelity mockups
into semantic HTML and applies the project's basic Style Tile. The pages remain
in normal document flow for this assignment; responsive layout systems will be
added later.

### Section inventory

Each page contains four to six main content sections. The shared site header/navigation and footer sit outside that page-specific count.

`index.html`

1. Hero and entry action
2. Mood selection
3. Place-type selection
4. Manhattan-area selection
5. Selection summary and primary action

`recommendation.html`

1. Recommendation introduction and active choices
2. Recommendation illustration placeholder
3. Place summary
4. Recommendation actions

`detail.html`

1. Place heading and tags
2. Place story and illustration placeholder
3. Visit information
4. Visit actions

### Style Tile applied

- Heading font: EB Garamond
- Body and control font: Lato
- Primary: `#245C4B`
- Accent: `#EEC06F`
- Text: `#202B26`
- Background: `#FFFDF9`
- Border: `#D4D8D1`
- Base spacing unit: 8px

Illustrations are represented by labeled placeholders because Assignment 5
specifically leaves images and media for a later stage.

## AI use acknowledgement

I wrote an initial version, then used OpenAI Codex to help revise the code. Afterward, I compared the revised version with my original code and the assignment requirements.

## Assignment 6: Repeating HTML elements with JavaScript

### Data and rendering

The `moods` array in `script.js` contains six objects corresponding to the six
existing mood choices: Quiet, Creative, Social, Romantic, Productive, and
Adventurous. Each object has a stable `value` identifier and a visible `label`.
These fields support the existing task of selecting a mood without adding a
list of destination cards to the one-recommendation flow.

`index.html` supplies the `mood-options` container inside the mood fieldset and
loads `script.js` at the end of the body, after the container exists. `forEach()`
visits every mood object. On each iteration, `document.createElement()` creates
a button, `textContent` sets its label, and `appendChild()` inserts it into the
container. Existing `.choice` styles apply automatically. Quiet retains the
initial selected appearance and `aria-pressed` state from the mockup.

This increment demonstrates data-driven rendering. Preference controls and
recommendation/detail pages are still static mockup behavior; filtering and
working selection interactions are future steps.

### Mockup reference

[Current high-fidelity mockups — Assignment 4 (PDF)](NateChen_Assignment4_Mockups.pdf)

The PDF includes the Style Tile and mobile/desktop views of the selection,
recommendation, and place-detail screens. Assignment 6 keeps the existing mood
labels and visual styling. This update changes how the mood buttons are built,
so the mockup remains the visual reference.

### Weekly update — October 26, 2026

**Key changes.** The six mood buttons are now generated from JavaScript data
instead of repeated HTML. The existing project repository, page sections, and
Style Tile are retained. `script.js` is linked from `index.html`, and the README
now documents the data structure and rendering process.

**Implementation challenges and checks.** The implementation needs the HTML
container to exist before JavaScript accesses it, so the script is loaded at
the end of the body. The loop also preserves Quiet as the initial selection,
including its CSS class and `aria-pressed` attribute. Automated checks run by
Codex confirmed six generated buttons, the expected labels, exactly one
initially selected mood, and the script/container connection. These checks do
not establish that recommendation filtering works; that behavior is not yet
implemented. They also do not replace a visual browser review.

**Open question.** What is the clearest way to carry the selected mood, place
type, and area from the selection page to the recommendation and detail pages?
This will guide the next interaction update.

**Next-week plan.** Connect the preference controls to selection state, update
the summary when a choice changes, and use the selected values to determine a
recommendation. Continue developing responsive layout and final media in later
iterations.

### Assignment 6 AI use acknowledgement

OpenAI Codex was used to inspect the existing project, generate the Assignment 6
JavaScript implementation, update the HTML container and script reference, and
write this README update. Codex reused the six mood choices, Quiet default,
and styles already present in the project and suggested using those choices
as the repeated data for this assignment. Codex also ran automated checks of
the generated buttons and HTML integration.

The Assignment 6 code and written explanation were generated with AI assistance;
they are not represented as independently written code or as work already
reviewed and revised by the student. The original project concept and mockups
predate this update. The student should be able to explain the array fields,
loop, element creation, and rendering before submitting this work.

### Run locally

From the repository folder, run `python3 -m http.server 4173`, then open
`http://localhost:4173/index.html` in a browser. The mood options should appear
in their original order, with Quiet initially selected.

### Submission

Commit and push the updated files, including `script.js` and the mockup PDF,
then submit the repository URL in the Assignment 6 Brightspace text box:

https://github.com/hc4720-dotcom/f26-nyu-project-chen-nate

Submit the repository URL rather than a Codespaces URL. Brightspace already
contains this repository URL; updates pushed to this repository are available
through the same submitted link.
