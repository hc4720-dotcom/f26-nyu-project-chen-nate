# NYC by Mood

**Latest mockups:** [Assignment 4 high-fidelity mockups](NateChen_Assignment4_Mockups.pdf)

**Live site:** Not published yet

## Project Log

### Week 8 — November 8, 2026

**State Plan**

- **User story:** As a young adult who wants a Manhattan suggestion quickly, I want my mood choice to appear immediately so that I know the page understood me before I continue.
- **What does the page remember?** The mood the user most recently selected.
- **What does it start at?** `quiet`, matching the Quiet button and the summary shown when the page first opens.
- **What changes it?** Clicking one of the six mood buttons.
- **What does the user see?** The selected button changes, the mood in the summary changes, and a short confirmation explains what the choice will prioritize.
- **What does the `if/else` decide?** It decides whether to show the calm, low-noise confirmation for Quiet or a confirmation using the selected mood for every other choice.

**What changed:** The mood buttons now change a `selectedMood` variable. The selected style and `aria-pressed` value move to the button the user clicked, and the summary and confirmation text update immediately. The starting screen still shows Quiet so the HTML and JavaScript begin in the same state.

**What was hard, and what I tried:** The buttons are created by the Assignment 6 loop, so I needed one value to control the generated buttons and the summary instead of changing only the button that was clicked. I used each button's `data-mood` value to compare every button with `selectedMood`, then updated its class and `aria-pressed` value from that comparison.

**What happened when I tried to break it:** I clicked Adventurous ten times and then switched quickly through Social, Quiet, Productive, Romantic, and Quiet. The page still showed exactly one selected mood, returned to the correct Quiet summary and confirmation, and produced no Console errors or warnings. I also checked the starting state and a normal Creative selection. At 375px, the new feedback stayed inside the viewport with no horizontal scrolling.

**What I learned or changed my mind about:** Changing a variable does not automatically change the page. The click handler has to update the visible text, selected class, and accessibility state separately. I also learned that one clear state value makes repeated clicks easier to keep consistent.

**Question for Joey:** Is updating the current summary enough feedback for this step, or should a future version also carry the selected mood to the recommendation page?

**Next week's goal:** Carry the completed preference choices into the recommendation view.

**AI use:** I chose this interaction from the project user story and the next step already recorded in Week 7. After writing the State Plan, I used OpenAI Codex to help implement the JavaScript pattern, check repeated clicks, and revise this log. I reviewed the state name, the `if/else`, and the visible text so they match the interaction described above.

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

## Structure Audit — October 26, 2026

**Fixed today:**

- Added a complete top-to-bottom section inventory at the top of `index.html`.
- Compared the selection, recommendation, and detail pages with the Assignment 4 desktop mockups. All required sections are present and in the intended content order.
- Kept useful section headings for screen readers but visually hid the three headings that do not appear in the mockups.
- Removed a redundant hero background declaration from the CSS.
- Verified that each page has one `h1`, section headings use `h2`, the Google fonts and `:root` color variables are connected, and internal navigation targets exist.
- Verified that `script.js` is loaded only on the page containing `#mood-options`, so it does not create a missing-element error on the other pages.

**Still missing (building before the layout assignment):**

- [ ] Replace the labeled illustration placeholders with the final project illustrations when media is added.
- [x] Build the responsive desktop and mobile arrangements shown in the mockups.
- [ ] Connect the choice buttons to the summary and carry the selected values to the recommendation page.

**One thing I couldn't figure out:**

- I still need to choose the simplest way to preserve the user's mood, place type, and area across separate HTML pages without adding unnecessary complexity.

## Assignment 7: Layout with CSS Grid

### Mockup and layout evidence

[Current high-fidelity mockups - Assignment 4 (PDF)](NateChen_Assignment4_Mockups.pdf)

[Side-by-side 1440 px comparison](assignment7-submission/assignment7-layout-comparison.png)

The page shell now uses CSS Grid. The hero and preference controls on the
selection page, the recommendation view, and the place-detail view also use
Grid to reproduce the arrangements established in Assignment 4. Flexbox is
reserved for one-dimensional rows such as navigation, tags, and paired action
buttons.

### Layout note

I used CSS Grid for the page shell and the main content groups because the
mockup has clear rows and columns. On the selection page, the hero becomes two
columns on desktop, and the mood, place, and area sections sit side by side.
The recommendation page places the illustration next to the place information,
while the detail page places the visit panel beside the story. At widths below
800px, those larger sections return to one column. The mood and area choices
stay in two columns, and the place choices stay in three, matching my Assignment
4 notes. Flexbox handles only single rows such as navigation, tags, and action
buttons. I also used `minmax(0, 1fr)` and tested at 375px and 1440px to prevent
horizontal scrolling.

### Weekly update - November 2, 2026

**Key changes.** Added the planned Grid page shell, gridded the hero and choice
groups, and created desktop two-column layouts for recommendation and detail.
The 800px media query switches between the mobile stack and the desktop
arrangements documented in Assignment 4. Mobile navigation now uses a compact
48px-or-larger menu control.

**Checks.** Browser tests covered all three pages at 375px and 1440px. Each page
kept one `h1`, none produced horizontal scrolling, and the six JavaScript mood
buttons still rendered with one initial selection.

**Next step.** Replace the illustration placeholders with final media and then
connect the selection controls to the summary and recommendation state.

### Assignment 7 AI use acknowledgement

OpenAI Codex was used to inspect the Assignment 4 PDF, implement the CSS Grid
and responsive CSS, update the semantic HTML classes, run browser checks at the
two mockup widths, and prepare the side-by-side comparison. The layout
decisions came from my existing Assignment 4 annotations: mobile stacking,
desktop side-by-side content, three desktop preference columns, and the stated
two- and three-column choice groups.
