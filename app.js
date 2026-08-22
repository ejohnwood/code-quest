const levels = [
  {
    id: "starter",
    number: "Starter Quest",
    title: "Explorer Training",
    description: "Learn the three habits every coder needs.",
    color: "purple",
    badge: { icon: "🧭", name: "Code Explorer", skills: ["Exact instructions", "Mistakes as clues", "Checking AI answers"] },
    reflection: {
      question: "Which explorer habit will help you most?",
      choices: ["Give exact instructions", "Use mistakes as clues", "Check AI answers"]
    },
    missions: [
      {
        id: "robot-instructions",
        title: "Robot Instructions",
        summary: "Discover why computers need clear, exact steps.",
        skill: "Sequence · precision",
        goal: "Put instructions in an order a very literal robot can follow.",
        prompt: "Put the plant-watering steps in the most logical order.",
        type: "sequence",
        items: ["Pour a little water into the soil.", "Pick up the watering can.", "Stop when the soil feels damp.", "Walk to the plant."],
        answer: ["Pick up the watering can.", "Walk to the plant.", "Pour a little water into the soil.", "Stop when the soil feels damp."],
        hint: "The robot cannot pour water before it has the watering can. Find the first thing it needs.",
        success: "You gave the robot a clear sequence."
      },
      {
        id: "debugging-detective",
        title: "Debugging Detective",
        summary: "Find a tiny bug and use evidence to repair it.",
        skill: "Testing · debugging",
        goal: "Read a program, predict its result, and locate the mistake.",
        prompt: "Byte should move 3 spaces, but moves 4. Find the buggy line.",
        type: "choice",
        demo: true,
        code: "MOVE 1\nMOVE 1\nMOVE 2\nSAY I made it!",
        choices: ["Line 1: MOVE 1", "Line 2: MOVE 1", "Line 3: MOVE 2", "Line 4: SAY I made it!"],
        answer: 2,
        hint: "Add the numbers inside the move commands. Which command makes the total too large?",
        success: "You used evidence to find the bug."
      },
      {
        id: "ai-said-what",
        title: "AI Said What?",
        summary: "Practice checking an AI answer before trusting it.",
        skill: "AI literacy · verification",
        goal: "Check whether an AI program says “Blast off!” exactly 3 times.",
        prompt: "Run the AI program, compare its output with the goal, repair one thing, and test again.",
        type: "aiVerifier",
        code: "REPEAT 3 TIMES\n    SAY Blast of!\nEND",
        hint: "Good coders test answers. Look closely: is every word spelled the way you asked?",
        solution: "Run the program, identify the spelling bug, change SAY Blast of! to SAY Blast off!, and test the repaired program.",
        success: "You stayed in charge by running, inspecting, repairing, and retesting the AI answer."
      }
    ]
  },
  {
    id: "level-1",
    number: "Level 1",
    title: "Clear Instructions",
    description: "Plan, repair, and create step-by-step algorithms.",
    color: "mint",
    completion: "You can now plan, repair, and create an algorithm of your own.",
    badge: { icon: "📋", name: "Algorithm Architect", skills: ["Planning routes", "Finding missing steps", "Writing algorithms"] },
    reflection: {
      question: "What made your instructions easier for Byte to follow?",
      choices: ["Clear action words", "The correct order", "Testing each step"]
    },
    requires: ["robot-instructions", "debugging-detective", "ai-said-what"],
    missions: [
      {
        id: "lost-robot",
        title: "Lost Robot",
        summary: "Guide Byte through the garden to reach the battery.",
        skill: "Commands · planning",
        goal: "Build a route from simple commands and predict where it ends.",
        prompt: "Get Byte to the battery in exactly 5 commands. Avoid the center rock.",
        type: "robot",
        answer: ["MOVE 1", "MOVE 1", "TURN LEFT", "MOVE 1", "MOVE 1"],
        hint: "First travel along the bottom row. Turn only when Byte is below the battery.",
        hints: [
          "Byte starts in the highlighted bottom-left square, facing right. First travel along the bottom row.",
          "Use two MOVE commands to reach the bottom-right. Then Byte needs to face upward."
        ],
        solution: "MOVE 1 → MOVE 1 → TURN LEFT → MOVE 1 → MOVE 1",
        success: "You broke one big goal into five exact commands."
      },
      {
        id: "missing-step",
        title: "The Missing Step",
        summary: "Repair an algorithm with one important gap.",
        skill: "Reading · finding gaps",
        goal: "Find where a missing instruction belongs.",
        prompt: "Put the missing lunchbox step in the correct place.",
        type: "insert",
        items: ["Open the backpack.", "Zip the backpack.", "Carry it to the door."],
        missing: "Put the lunchbox in the bag.",
        answer: 1,
        hint: "The lunchbox cannot go inside after the backpack has been zipped.",
        success: "You found the gap by thinking about what must be true first."
      },
      {
        id: "task-designer",
        title: "Robot Task Designer",
        summary: "Write an original algorithm for Byte to follow.",
        skill: "Create · explain",
        goal: "Turn your own everyday task into clear, ordered steps.",
        prompt: "Name a small task and give Byte at least 4 clear steps.",
        type: "designer",
        hint: "Try a task like brushing teeth, feeding a pet, or making toast. Ask: could Byte follow each step without guessing?",
        success: "You created an original algorithm—the same kind of plan programmers make before coding."
      }
    ]
  },
  {
    id: "level-2",
    number: "Level 2",
    title: "Debugging Detective",
    description: "Observe, explain, and repair programs using evidence.",
    color: "coral",
    completion: "You can now name bugs, test one change at a time, and explain why a fix works.",
    badge: { icon: "🔎", name: "Bug Detective", skills: ["Comparing evidence", "Testing repairs", "Explaining fixes"] },
    reflection: {
      question: "What should a coder do first when something goes wrong?",
      choices: ["Compare expected and actual", "Change one thing", "Read the evidence"]
    },
    requires: ["lost-robot", "missing-step", "task-designer"],
    missions: [
      {
        id: "bug-museum",
        title: "Bug Museum",
        summary: "Investigate three strange programs and classify their bugs.",
        skill: "Observe · classify",
        goal: "Use the result of a test to name different kinds of bugs.",
        prompt: "Compare the evidence and classify each bug.",
        type: "bugSort",
        cases: [
          {
            name: "The Dizzy Robot",
            expected: "Byte turns one time.",
            actual: "Byte turns three times.",
            code: "TURN RIGHT\nTURN RIGHT\nTURN RIGHT",
            reason: "The same TURN command appears three times. Two extra copies make Byte turn too many times."
          },
          {
            name: "The Silent Greeter",
            expected: "Byte says “Hello!”",
            actual: "Byte says nothing.",
            code: "START\nSTOP",
            reason: "The program has no SAY command, so the greeting action is missing."
          },
          {
            name: "The Confused Painter",
            expected: "Byte paints the square blue.",
            actual: "Byte stops because “PAENT” is unknown.",
            code: "PAENT BLUE",
            reason: "PAENT is not a command Byte knows. Changing the spelling to PAINT repairs the command."
          }
        ],
        labels: ["Repeated step", "Missing step", "Misspelled command"],
        answer: [0, 1, 2],
        hint: "Compare the expected result with the actual result. Is something repeated, missing, or spelled incorrectly?",
        success: "You identified three bug types by looking at evidence."
      },
      {
        id: "change-one-thing",
        title: "Change One Thing",
        summary: "Choose the smallest repair and test your prediction.",
        skill: "Predict · repair",
        goal: "Fix a program with one careful change instead of guessing.",
        prompt: "Byte moves 5 spaces instead of 3. Choose and test one repair.",
        type: "choice",
        code: "MOVE 1\nMOVE 1\nMOVE 3\nWAVE",
        choices: ["Delete the first MOVE 1 line", "Change MOVE 3 to MOVE 1", "Change WAVE to MOVE 1", "Add another MOVE 3"],
        testResults: [
          { distance: 4, waved: true, note: "Still travels one space too far." },
          { distance: 3, waved: true, note: "Matches both expected results." },
          { distance: 6, waved: false, note: "Travels too far and never waves." },
          { distance: 8, waved: true, note: "Travels even farther than before." }
        ],
        answer: 1,
        hint: "Add the move numbers. Look for one change that makes the total equal 3 without removing the wave.",
        success: "You repaired the program by changing only the line supported by the evidence."
      },
      {
        id: "bug-challenge",
        title: "Sneaky Bug Lab",
        summary: "Release a bug, study the chaos, and build the repair.",
        skill: "Create · test · explain",
        goal: "Create a debugging case and prove why one repair works.",
        prompt: "Choose, release, and repair a sneaky bug.",
        type: "debugDesigner",
        hint: "First choose one adventure card and one bug power. Then release the bug to reveal the evidence.",
        success: "You created, tested, and repaired your own debugging case."
      }
    ]
  },
  {
    id: "level-3",
    number: "Level 3",
    title: "Pattern Power",
    description: "Recognize patterns, build loops, and control repetition.",
    color: "yellow",
    completion: "You can now find repeated patterns, build efficient loops, and stop repetition safely.",
    badge: { icon: "🔁", name: "Loop Builder", skills: ["Finding patterns", "Building loops", "Controlling repetition"] },
    reflection: {
      question: "When is a loop most useful?",
      choices: ["When steps repeat", "When I know the repeat count", "When I want code to be easier to change"]
    },
    requires: ["bug-museum", "change-one-thing", "bug-challenge"],
    missions: [
      {
        id: "pattern-party",
        title: "Pattern Party",
        summary: "Find the smallest command group that repeats.",
        skill: "Observe · group · explain",
        goal: "Recognize a repeating unit inside a longer command sequence.",
        prompt: "Watch each sequence and select the repeating command group.",
        type: "patternFinder",
        hint: "Compare the beginning of the sequence with what comes next. Where does the same group start again?",
        success: "You found the repeating unit in three different command sequences."
      },
      {
        id: "loop-lab",
        title: "Loop Lab",
        summary: "Build shorter programs that repeat a command pattern.",
        skill: "Build · run · verify",
        goal: "Choose a repeat count and loop body that match the expected result.",
        prompt: "Build and run loops that do the same work as longer programs.",
        type: "loopBuilder",
        hint: "The loop body contains the commands that repeat. The count tells Byte how many times to run them.",
        success: "You built a loop and corrected an AI-generated repeat count."
      },
      {
        id: "runaway-robot",
        title: "Runaway Robot",
        summary: "Stop endless repetition, then create an original loop.",
        skill: "Stop · create · explain",
        goal: "Control a runaway loop and design a safe loop of your own.",
        prompt: "Stop the cookie machine, repair its loop, then create your own animation.",
        type: "loopStudio",
        hint: "A safe loop needs a sensible repeat count. Six teammates need exactly six cookies.",
        success: "You stopped a runaway loop and created an original repeating animation."
      }
    ]
  },
  {
    id: "level-4",
    number: "Level 4",
    title: "Command Creator",
    description: "Use compass directions and functions to write reusable navigation code.",
    color: "blue",
    completion: "You can now create, call, and reuse functions with parameters.",
    badge: { icon: "🧭", name: "Function Navigator", skills: ["Absolute directions", "Reusable functions", "Parameters"] },
    reflection: {
      question: "Why are functions useful?",
      choices: ["They name a useful job", "They can be reused", "Parameters let one function do more"]
    },
    requires: ["pattern-party", "loop-lab", "runaway-robot"],
    missions: [
      {
        id: "compass-commands",
        title: "Compass Commander",
        summary: "Compare relative turns with clear compass directions.",
        skill: "Compare · reason",
        goal: "Choose the program that works clearly no matter which way Byte starts facing.",
        prompt: "Run both programs from different starting directions. Then decide which one always sends Byte north.",
        type: "compassExperiment",
        code: "PROGRAM A\nTURN LEFT\nMOVE 4\n\nPROGRAM B\nFACE NORTH\nMOVE 4",
        choices: [
          "Program A, because TURN LEFT always means north",
          "Program B, because FACE NORTH names the exact direction",
          "Both programs always do the same thing",
          "Neither program can move Byte north"
        ],
        answer: 1,
        hint: "TURN LEFT depends on Byte's starting direction. FACE NORTH names the final direction.",
        success: "You chose an absolute direction that makes the programmer's intention clear."
      },
      {
        id: "build-navigation-function",
        title: "Build a Navigation Function",
        summary: "Create GO_NORTH(steps) from reusable parts.",
        skill: "Define · parameterize",
        goal: "Build a function that can move north by any number of steps.",
        prompt: "Build GO_NORTH, then prove its parameter works by testing two different distances.",
        type: "functionBuilder",
        hint: "A reusable function should FACE NORTH and MOVE steps—not a fixed number.",
        solution: "FUNCTION GO_NORTH(steps): FACE NORTH, MOVE steps, END. Then call GO_NORTH(4).",
        success: "You built a reusable function with a steps parameter."
      },
      {
        id: "function-route",
        title: "Function Delivery",
        summary: "Combine navigation functions to collect energy and reach a delivery beacon.",
        skill: "Call · reuse · debug",
        goal: "Use direction functions to guide Byte to the beacon.",
        prompt: "Collect the energy star and reach the beacon in exactly 3 function calls.",
        type: "functionRoute",
        hint: "The rock blocks the bottom row. Move east 1 to line up with the star, north 5, then east 4.",
        solution: "GO_EAST(1), GO_NORTH(5), then GO_EAST(4).",
        success: "You reused two navigation functions to solve a larger route."
      }
    ]
  }
];

const missions = levels.flatMap((level, levelIndex) =>
  level.missions.map((mission, missionIndex) => ({ ...mission, levelIndex, missionIndex }))
);

function readStoredText(key, fallback = "") {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch (error) {
    console.warn(`Code Quest could not read saved value “${key}”.`, error);
    return fallback;
  }
}

function readStoredJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const value = JSON.parse(raw);
    const expectedArray = Array.isArray(fallback);
    const validShape = expectedArray
      ? Array.isArray(value)
      : value !== null && typeof value === "object" && !Array.isArray(value);
    if (!validShape) throw new TypeError("Saved value has the wrong shape.");
    return value;
  } catch (error) {
    console.warn(`Code Quest repaired damaged saved value “${key}”.`, error);
    try { localStorage.removeItem(key); } catch (_) { /* Storage may be unavailable. */ }
    return fallback;
  }
}

function writeStoredValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn(`Code Quest could not save value “${key}”.`, error);
  }
}

const oldCompleted = readStoredJson("codeQuestCompleted", []);
const migrated = oldCompleted.map(value => typeof value === "number" ? missions[value]?.id : value).filter(Boolean);
const savedDesigner = readStoredJson("codeQuestDesigner", {});

function emptyDesigner() {
  return { goal: "", steps: ["", "", "", ""], checks: { actions: false, noGuess: false }, tested: false };
}

const state = {
  completed: [...new Set(migrated)],
  currentId: null,
  selection: null,
  answerChecked: false,
  demoRun: false,
  sequence: [],
  sequenceDemoRun: false,
  commands: [],
  robotPrediction: "",
  robotHasRun: false,
  hintStep: 0,
  bugAnswers: [null, null, null],
  bugChecked: false,
  repairPrediction: "",
  repairTested: false,
  replayingFresh: false,
  restartConfirmation: false,
  showFullMap: readStoredText("codeQuestFullMap") === "true",
  labCode: readStoredText("codeQuestLabCode", "SAY Hello, explorer!\nMOVE 2\nTURN LEFT\nMOVE 1\nPAINT MINT"),
  designer: {
    ...emptyDesigner(),
    ...savedDesigner,
    checks: { actions: false, noGuess: false, ...(savedDesigner.checks || {}) }
  },
  debugDesigner: {
    scenario: "",
    type: "",
    released: false,
    repair: null,
    note: "",
    reportFiled: false,
    ...readStoredJson("codeQuestDebugDesigner", {})
  },
  reflections: readStoredJson("codeQuestReflections", {}),
  starter: {
    aiRan: false,
    aiIssue: "",
    aiRepair: "",
    aiFixedRun: false,
    ...readStoredJson("codeQuestStarter", {})
  },
  level3: {
    patternRound: 0,
    patternSelection: [],
    patternRun: false,
    patternSolved: false,
    loopStage: 0,
    loopCount: 3,
    loopCommands: [],
    loopPrediction: "",
    loopHasRun: false,
    studioStage: 0,
    runawayStopped: false,
    runawayCookies: 0,
    runawayManualStop: false,
    runawayReason: "",
    repairStarted: false,
    repairCount: null,
    repairRun: false,
    creation: { title: "", count: 3, commands: [], hasRun: false, safetyCheck: "" },
    ...readStoredJson("codeQuestLevel3", {})
  },
  level4: {
    compassStart: "EAST",
    compassProgram: "A",
    compassTrials: [],
    builderDirection: "",
    builderMovement: "",
    builderCall: "",
    builderRan: false,
    builderTestSteps: 2,
    builderResults: [],
    routeFunction: "GO_EAST",
    routeSteps: 5,
    routeCalls: [],
    routeRan: false,
    routeResult: null,
    routeReason: "",
    ...readStoredJson("codeQuestLevel4", {})
  }
};

state.level3.creation = { title: "", count: 3, commands: [], hasRun: false, safetyCheck: "", ...(state.level3.creation || {}) };

const homeView = document.querySelector("#home-view");
const lessonView = document.querySelector("#lesson-view");
const labView = document.querySelector("#lab-view");
const courseMap = document.querySelector("#course-map");
const feedback = document.querySelector("#feedback");
let soundOn = readStoredText("codeQuestSound") === "on";

function updateSoundButton() {
  const button = document.querySelector("#sound-toggle");
  button.setAttribute("aria-pressed", String(soundOn));
  button.title = soundOn ? "Turn sound effects off" : "Turn sound effects on";
  document.querySelector("#sound-icon").textContent = soundOn ? "🔊" : "🔇";
  document.querySelector("#sound-label").textContent = soundOn ? "Sound on" : "Sound off";
}

function playFeedbackSound(success) {
  if (!soundOn) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const notes = success ? [523, 659, 784] : [240, 210];
  notes.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + index * .09;
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(.08, start + .015);
    gain.gain.exponentialRampToValueAtTime(.0001, start + .12);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + .13);
  });
  setTimeout(() => context.close(), 600);
}
const runawayControl = { active: false, stop: false };

function currentMission() {
  return missions.find(mission => mission.id === state.currentId);
}

function isLevelUnlocked(level) {
  return !level.requires || level.requires.every(id => state.completed.includes(id));
}

function recommendedNextMission(currentMissionItem = null) {
  if (currentMissionItem) {
    const sameLevel = missions.find(mission =>
      mission.levelIndex === currentMissionItem.levelIndex &&
      !state.completed.includes(mission.id)
    );
    if (sameLevel) return sameLevel;
  }
  return missions.find(mission =>
    !state.completed.includes(mission.id) && isLevelUnlocked(levels[mission.levelIndex])
  ) || null;
}

function save() {
  writeStoredValue("codeQuestCompleted", JSON.stringify(state.completed));
  writeStoredValue("codeQuestDesigner", JSON.stringify(state.designer));
  writeStoredValue("codeQuestDebugDesigner", JSON.stringify(state.debugDesigner));
  writeStoredValue("codeQuestReflections", JSON.stringify(state.reflections));
  writeStoredValue("codeQuestStarter", JSON.stringify(state.starter));
  writeStoredValue("codeQuestLevel3", JSON.stringify(state.level3));
  writeStoredValue("codeQuestLevel4", JSON.stringify(state.level4));
  writeStoredValue("codeQuestLabCode", state.labCode);
  writeStoredValue("codeQuestFullMap", String(state.showFullMap));
}

function isLabUnlocked() {
  return levels[0].missions.every(mission => state.completed.includes(mission.id));
}

function isLabFeatureUnlocked(feature) {
  const requirements = {
    repeat: ["loop-lab"],
    face: ["compass-commands"],
    function: ["compass-commands", "build-navigation-function"]
  };
  return !requirements[feature] || requirements[feature].every(id => state.completed.includes(id));
}

function renderLabFeatures() {
  document.querySelectorAll("[data-lab-feature]").forEach(element => {
    element.classList.toggle("hidden", !isLabFeatureUnlocked(element.dataset.labFeature));
  });
  const unlocked = [
    "MOVE · TURN · SAY · PAINT",
    isLabFeatureUnlocked("repeat") ? "REPEAT" : "",
    isLabFeatureUnlocked("face") ? "FACE" : "",
    isLabFeatureUnlocked("function") ? "FUNCTION" : ""
  ].filter(Boolean);
  const next = !isLabFeatureUnlocked("repeat") ? "Complete Loop Lab to unlock REPEAT."
    : !isLabFeatureUnlocked("face") ? "Complete Compass Commander to unlock FACE."
    : !isLabFeatureUnlocked("function") ? "Build a Navigation Function to unlock FUNCTION."
    : "Every Code Lab tool is unlocked!";
  const status = document.querySelector("#lab-skill-status");
  if (status) status.innerHTML = `<strong>Your tools</strong><span>${unlocked.join(" · ")}</span><small>${next}</small>`;
}

function renderLabAccess() {
  const button = document.querySelector("#code-lab-button");
  const unlocked = isLabUnlocked();
  button.disabled = !unlocked;
  button.title = unlocked ? "Open Code Lab" : "Complete Explorer Training to unlock Code Lab";
  document.querySelector("#code-lab-label").textContent = unlocked ? "Code Lab" : "Code Lab locked";
  renderLabFeatures();
}

function renderProgress() {
  const count = state.completed.length;
  document.querySelector("#progress-label").textContent = `${count} of ${missions.length} missions`;
  document.querySelector("#progress-bar").style.width = `${(count / missions.length) * 100}%`;
  const phase = count < 3 ? "Thinking in steps" : count < 6 ? "Building algorithms" : count < 9 ? "Testing and debugging" : count < 12 ? "Patterns and loops" : "Functions and navigation";
  document.querySelector("#path-label").textContent = count === missions.length ? "Quest complete · Coder toolkit unlocked" : `${phase} → Functions and navigation`;
  const next = recommendedNextMission();
  document.querySelector("[data-start]").innerHTML = !state.completed.length
    ? `Start mission 1 <span aria-hidden="true">→</span>`
    : next ? `Continue quest <span aria-hidden="true">→</span>`
    : `Quest complete <span aria-hidden="true">✓</span>`;
  const resume = document.querySelector("#journey-resume");
  if (!state.completed.length) {
    resume.classList.add("hidden");
  } else {
    resume.classList.remove("hidden");
    resume.innerHTML = next
      ? `<span aria-hidden="true">↗</span><div><small>Welcome back · ${count}/${missions.length} complete</small><strong>Next: ${next.title}</strong><p>${next.summary}</p></div>`
      : `<span aria-hidden="true">★</span><div><small>Welcome back · Quest complete</small><strong>Your badges and certificate are ready</strong><p>Replay a favorite mission or open My Badges.</p></div>`;
  }
  renderLabAccess();
  renderToolkit();
}

function renderToolkit() {
  const earnedLevels = levels.filter(level => level.missions.every(mission => state.completed.includes(mission.id)));
  document.querySelector("#toolkit-progress-label").textContent = `${earnedLevels.length} of ${levels.length} skill badges earned`;
  document.querySelector("#toolkit-progress-bar").style.width = `${(earnedLevels.length / levels.length) * 100}%`;
  const badgeCards = levels.map(level => {
    const earned = earnedLevels.includes(level);
    return `<article class="toolkit-badge ${earned ? "earned" : "locked"}">
      <div class="toolkit-badge-icon">${earned ? level.badge.icon : "?"}</div>
      <div><small>${earned ? "Earned" : "Locked"}</small><h3>${earned ? level.badge.name : level.title}</h3>
      <p>${earned ? level.badge.skills.join(" · ") : `Complete ${level.number} to reveal this badge.`}</p></div>
    </article>`;
  }).join("");
  const creation = state.level3?.creation;
  const creationCard = state.completed.includes("runaway-robot") && creation?.title ? `
    <article class="toolkit-creation">
      <div class="toolkit-badge-icon">✨</div><div><small>Loop Studio creation</small><h3>${escapeHtml(creation.title)}</h3>
      <p>Repeat ${creation.count} times: ${creation.commands.join(" · ")}</p></div>
    </article>` : "";
  const certificateCard = state.completed.length === missions.length
    ? `<button class="certificate-card" data-open-certificate><span aria-hidden="true">🏆</span><strong>Print my Code Quest certificate</strong></button>` : "";
  document.querySelector("#toolkit-badges").innerHTML = badgeCards + creationCard + certificateCard;
  document.querySelector("[data-open-certificate]")?.addEventListener("click", openCertificate);
}

function openToolkit() {
  renderToolkit();
  document.querySelector("#toolkit").classList.remove("hidden");
  document.querySelector("#close-toolkit").focus();
}

function closeToolkit() {
  document.querySelector("#toolkit").classList.add("hidden");
  document.querySelector("#toolkit-button").focus();
}

function renderMap() {
  const recommended = recommendedNextMission();
  const recommendedId = recommended?.id;
  const activeLevel = recommended ? levels[recommended.levelIndex] : levels.at(-1);
  const visibleLevels = state.showFullMap ? levels : [activeLevel];
  const mapHtml = visibleLevels.map(level => {
    const unlocked = isLevelUnlocked(level);
    const levelDone = level.missions.filter(m => state.completed.includes(m.id)).length;
    const earned = levelDone === level.missions.length;
    return `<section class="course-level ${unlocked ? "" : "locked"}">
      <div class="level-heading">
        <div class="level-badge ${level.color}">${unlocked ? level.number : "Locked"}</div>
        <div><p class="eyebrow">${level.number} · ${levelDone}/${level.missions.length} complete</p>
        <h3>${level.title}</h3><p>${unlocked ? level.description : "Finish the earlier level to unlock this one."}</p>
        ${earned ? `<span class="earned-badge">${level.badge.icon} ${level.badge.name}</span>` : ""}</div>
      </div>
      <div class="mission-grid">${level.missions.map(mission => {
        const globalIndex = missions.findIndex(m => m.id === mission.id);
        const done = state.completed.includes(mission.id);
        const recommended = mission.id === recommendedId;
        return `<button class="mission-card ${done ? "done" : ""} ${recommended ? "recommended" : ""}" data-mission="${mission.id}" ${unlocked ? "" : "disabled"}>
          <span class="card-top"><span class="mission-number">${String(globalIndex + 1).padStart(2, "0")}</span>
          <span class="status-pill">${done ? "Completed ✓" : recommended ? "Next up" : unlocked ? "Ready" : "Locked"}</span></span>
          <h3>${mission.title}</h3><p>${mission.summary}</p><span class="mission-skill">${mission.skill}</span>
        </button>`;
      }).join("")}</div>
    </section>`;
  }).join("");
  const teaser = !state.showFullMap && activeLevel && activeLevel.id !== levels.at(-1).id
    ? `<aside class="next-level-teaser"><span aria-hidden="true">🔒</span><div><small>Later on your quest</small><strong>${levels[levels.indexOf(activeLevel) + 1].number}: ${levels[levels.indexOf(activeLevel) + 1].title}</strong><p>Complete your current quest to unlock the next adventure.</p></div></aside>`
    : "";
  courseMap.innerHTML = mapHtml + teaser;
  const toggle = document.querySelector("#course-view-toggle");
  toggle.setAttribute("aria-expanded", String(state.showFullMap));
  toggle.textContent = state.showFullMap ? "Show current quest only" : "Show full course map";
  document.querySelectorAll("[data-mission]").forEach(button => {
    button.addEventListener("click", () => openMission(button.dataset.mission));
  });
}

function openMission(id) {
  const mission = missions.find(item => item.id === id);
  if (!mission || !isLevelUnlocked(levels[mission.levelIndex])) return;
  state.currentId = id;
  state.selection = null;
  state.answerChecked = false;
  state.demoRun = false;
  state.sequence = [...(mission.items || [])];
  state.sequenceDemoRun = false;
  state.commands = [];
  state.robotPrediction = "";
  state.robotHasRun = false;
  state.hintStep = 0;
  state.bugAnswers = [null, null, null];
  state.bugChecked = false;
  state.repairPrediction = "";
  state.repairTested = false;
  state.replayingFresh = false;
  state.restartConfirmation = false;
  homeView.classList.add("hidden");
  lessonView.classList.remove("hidden");
  document.querySelector("#lesson-kicker").textContent = `${levels[mission.levelIndex].number} · Mission ${mission.missionIndex + 1}${state.completed.includes(id) ? " · Replay" : ""}`;
  document.querySelector("#lesson-title").textContent = mission.title;
  document.querySelector("#lesson-goal").textContent = mission.goal;
  document.querySelector("#mini-map").innerHTML = levels[mission.levelIndex].missions.map(m =>
    `<span class="mini-dot ${state.completed.includes(m.id) ? "done" : ""} ${m.id === id ? "active" : ""}"></span>`
  ).join("");
  renderActivity();
  updateHintButton();
  feedback.className = "feedback hidden";
  stopReading();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderActivity() {
  const mission = currentMission();
  const guidedLevel3 = ["patternFinder", "loopBuilder", "loopStudio"].includes(mission.type);
  let activity = "";
  if (mission.type === "sequence") activity = renderSequence();
  if (mission.type === "choice") activity = renderChoices(mission);
  if (mission.type === "aiVerifier") activity = renderAiVerifier(mission);
  if (mission.type === "insert") activity = renderInsert(mission);
  if (mission.type === "robot") activity = renderRobot();
  if (mission.type === "designer") activity = renderDesigner();
  if (mission.type === "bugSort") activity = renderBugSort(mission);
  if (mission.type === "debugDesigner") activity = renderDebugDesigner();
  if (mission.type === "patternFinder") activity = renderPatternFinder();
  if (mission.type === "loopBuilder") activity = renderLoopBuilder();
  if (mission.type === "loopStudio") activity = renderLoopStudio();
  if (mission.type === "compassExperiment") activity = renderCompassExperiment(mission);
  if (mission.type === "functionBuilder") activity = renderFunctionBuilder();
  if (mission.type === "functionRoute") activity = renderFunctionRoute();
  document.querySelector("#lesson-content").innerHTML = `
    ${renderReplayBanner(mission)}
    <h3>Today's challenge</h3><p class="intro">${mission.prompt}</p>
    <div class="activity"><span class="activity-label">${activityLabel(mission.type)}</span>${activity}</div>`;
  document.querySelector("#check-button").classList.toggle("hidden", guidedLevel3);
  document.querySelector("#check-button").textContent = mission.type === "bugSort" && state.bugChecked && JSON.stringify(state.bugAnswers) === JSON.stringify(mission.answer)
    ? "Finish the museum"
    : "Check my thinking";
  document.querySelector(".lesson-actions").classList.toggle("guided-actions", guidedLevel3);
  bindActivity();
}

function hasSavedActivity(mission) {
  return ["aiVerifier", "designer", "debugDesigner", "patternFinder", "loopBuilder", "loopStudio", "compassExperiment", "functionBuilder", "functionRoute"].includes(mission.type);
}

function renderReplayBanner(mission) {
  if (!state.completed.includes(mission.id) || !hasSavedActivity(mission)) return "";
  if (state.replayingFresh) return `<section class="replay-banner fresh"><span aria-hidden="true">↻</span><div><strong>Fresh replay in progress</strong><small>Your new activity choices will become the saved version.</small></div></section>`;
  if (state.restartConfirmation) return `<section class="replay-banner confirm"><span aria-hidden="true">?</span><div><strong>Restart this activity?</strong><small>This clears its saved choices or creation. Your completed mission and badge stay safe.</small><div><button data-cancel-restart>Keep saved work</button><button class="confirm-restart" data-confirm-restart>Yes, start fresh</button></div></div></section>`;
  return `<section class="replay-banner"><span aria-hidden="true">✓</span><div><strong>You are viewing your saved work</strong><small>You can keep exploring it or begin again with an empty activity.</small><button data-request-restart>Replay from the beginning</button></div></section>`;
}

function resetSavedActivity(mission) {
  if (mission.type === "aiVerifier") state.starter = { aiRan: false, aiIssue: "", aiRepair: "", aiFixedRun: false };
  if (mission.type === "designer") state.designer = emptyDesigner();
  if (mission.type === "debugDesigner") state.debugDesigner = { scenario: "", type: "", released: false, repair: null, note: "", reportFiled: false };
  if (mission.type === "patternFinder") Object.assign(state.level3, { patternRound: 0, patternSelection: [], patternRun: false, patternSolved: false });
  if (mission.type === "loopBuilder") Object.assign(state.level3, { loopStage: 0, loopCount: 3, loopCommands: [], loopPrediction: "", loopHasRun: false });
  if (mission.type === "loopStudio") Object.assign(state.level3, {
    studioStage: 0, runawayStopped: false, runawayCookies: 0, runawayManualStop: false, runawayReason: "",
    repairStarted: false, repairCount: null, repairRun: false,
    creation: { title: "", count: 3, commands: [], hasRun: false, safetyCheck: "" }
  });
  if (mission.type === "compassExperiment") Object.assign(state.level4, {
    compassStart: "EAST", compassProgram: "A", compassTrials: []
  });
  if (mission.type === "functionBuilder") Object.assign(state.level4, {
    builderDirection: "", builderMovement: "", builderCall: "", builderRan: false,
    builderTestSteps: 2, builderResults: []
  });
  if (mission.type === "functionRoute") Object.assign(state.level4, {
    routeFunction: "GO_EAST", routeSteps: 5, routeCalls: [], routeRan: false, routeResult: null, routeReason: ""
  });
  state.replayingFresh = true;
  state.restartConfirmation = false;
  feedback.className = "feedback hidden";
  save();
  renderActivity();
}

function activityLabel(type) {
  const labels = {
    sequence: "Put the steps in order",
    choice: "Choose your answer",
    aiVerifier: "Run, inspect, repair, and retest",
    insert: "Place the missing step",
    robot: "Build your route",
    designer: "Create your algorithm",
    bugSort: "Classify each bug",
    debugDesigner: "Create your challenge",
    patternFinder: "Find the repeating unit",
    loopBuilder: "Build and run a loop",
    loopStudio: "Control and create loops",
    compassExperiment: "Experiment with compass directions",
    functionBuilder: "Build a reusable function",
    functionRoute: "Call functions to make a route"
  };
  return labels[type] || "Your activity";
}

function renderAiVerifier(mission) {
  const data = state.starter;
  const fixedText = data.aiRepair === "SPELLING" ? "Blast off!" : "Blast of!";
  const fixedRepeats = data.aiRepair === "COUNT" ? 4 : 3;
  return `<div class="ai-verifier">
    <div class="ai-goal-card"><span aria-hidden="true">🎯</span><div><small>Goal</small><strong>Say “Blast off!” exactly 3 times.</strong></div></div>
    <section class="ai-test-stage"><div class="ai-stage-heading"><span>1</span><div><strong>Run the AI's program</strong><small>Never guess what code does—test it.</small></div></div><div class="code-box">${mission.code}</div>
      <button class="run-loop" data-run-ai-original>${data.aiRan ? "↻ Run it again" : "▶ Run the AI program"}</button>
      ${data.aiRan ? `<div class="ai-output"><small>Actual output</small>${Array.from({ length: 3 }, () => `<span>Blast of!</span>`).join("")}<strong>Compare this with the goal above.</strong></div>` : ""}
    </section>
    <section class="ai-test-stage ${data.aiRan ? "" : "locked-stage"}"><div class="ai-stage-heading"><span>2</span><div><strong>Inspect the evidence</strong><small>What needs to change?</small></div></div><div class="ai-choice-row">
      ${[["SPELLING", "“of” should be “off”"], ["COUNT", "It should repeat 4 times"], ["TRUST", "Nothing—AI must be right"]].map(([value, label]) => `<button data-ai-issue="${value}" class="${data.aiIssue === value ? "selected" : ""}" ${data.aiRan ? "" : "disabled"}>${label}</button>`).join("")}
    </div></section>
    <section class="ai-test-stage ${data.aiIssue ? "" : "locked-stage"}"><div class="ai-stage-heading"><span>3</span><div><strong>Choose one repair</strong><small>Change only what the evidence supports.</small></div></div><div class="ai-choice-row repairs">
      ${[["SPELLING", "SAY Blast off!"], ["COUNT", "REPEAT 4 TIMES"], ["DELETE", "Delete the program"]].map(([value, label]) => `<button data-ai-repair="${value}" class="${data.aiRepair === value ? "selected" : ""}" ${data.aiIssue ? "" : "disabled"}><code>${label}</code></button>`).join("")}
    </div></section>
    <section class="ai-test-stage ${data.aiRepair ? "" : "locked-stage"}"><div class="ai-stage-heading"><span>4</span><div><strong>Retest the repaired program</strong><small>A repair is not finished until it is tested.</small></div></div>
      <button class="run-loop" data-run-ai-fixed ${data.aiRepair ? "" : "disabled"}>▶ Test my repair</button>
      ${data.aiFixedRun ? `<div class="ai-output ${data.aiRepair === "SPELLING" ? "passes" : "needs-work"}"><small>New output</small>${Array.from({ length: fixedRepeats }, () => `<span>${fixedText}</span>`).join("")}<strong>${data.aiRepair === "SPELLING" ? "The words and repeat count now match the goal. ✓" : "The output still does not match every part of the goal."}</strong></div>` : ""}
    </section>
  </div>`;
}

function renderSequence() {
  const mission = currentMission();
  const correct = JSON.stringify(state.sequence) === JSON.stringify(mission.answer);
  const icons = { "Pick up": "🫗", "Walk": "👣", "Pour": "💧", "Stop": "🌱" };
  return `<div class="sequence-story"><div class="sequence-before"><span>🤖</span><div><small>Before</small><strong>Byte has a dry plant and four mixed-up instructions.</strong></div><span>🪴</span></div>
    <div class="sequence-list">${state.sequence.map((item, index) =>
    `<div class="sequence-item"><span>${index + 1}</span><span>${item}</span><span class="move-buttons">
    <button data-up="${index}" aria-label="Move step ${index + 1} up" ${index === 0 ? "disabled" : ""}>↑</button>
    <button data-down="${index}" aria-label="Move step ${index + 1} down" ${index === state.sequence.length - 1 ? "disabled" : ""}>↓</button></span></div>`
  ).join("")}</div>
    <button class="run-sequence" data-run-sequence>▶ Test these instructions</button>
    ${state.sequenceDemoRun ? `<section class="sequence-test ${correct ? "passes" : "needs-work"}" aria-live="polite"><div class="sequence-animation">${state.sequence.map((step, index) => {
      const icon = Object.entries(icons).find(([word]) => step.startsWith(word))?.[1] || "•";
      return `<span style="--step-delay:${index * .16}s"><b>${index + 1}</b>${icon}</span>`;
    }).join("")}</div><strong>${correct ? "After: Byte waters the plant successfully! ✓" : "Byte gets confused before the plant is watered."}</strong><p>${correct ? "Every step has what it needs from the step before it." : "The test is evidence. Compare the first step with what Byte has at the beginning."}</p></section>` : ""}
  </div>`;
}

function renderChoices(mission) {
  return `${mission.code ? `<div class="code-box">${mission.code}</div>` : ""}
    ${mission.demo ? renderMoveDemo() : ""}
    <div class="choice-list">${mission.choices.map((choice, index) =>
      `<button class="choice ${state.selection === index ? "selected" : ""} ${choiceStatus(mission, index)}" data-choice="${index}">
      <span class="letter">${String.fromCharCode(65 + index)}</span><span>${choice}</span></button>`
    ).join("")}</div>
    ${mission.testResults && state.selection !== null ? renderRepairTest(mission) : ""}`;
}

function choiceStatus(mission, index) {
  if (!state.answerChecked || state.selection !== index) return "";
  return index === mission.answer ? "answer-correct" : "answer-wrong";
}

function renderMoveDemo() {
  return `<section class="move-demo">
    <div class="demo-track" aria-label="Target is 3 spaces; Byte moved 4">
      ${[1, 2, 3, 4].map(step => `<span class="${state.demoRun ? "filled" : ""}" style="--delay:${step * .15}s">${step === 4 ? "🤖" : "·"}</span>`).join("")}
      <i>Target: 3</i>
    </div>
    <button data-run-demo>${state.demoRun ? "↻ Replay test" : "▶ Run the program"}</button>
    ${state.demoRun ? `<p><strong>Expected:</strong> 3 spaces &nbsp; <strong>Actual:</strong> 4 spaces</p>` : ""}
  </section>`;
}

function renderRepairTest(mission) {
  const predictions = [
    ["MATCH", "The goal will match", "✓"],
    ["STILL", "It will still be wrong", "…"],
    ["NEW", "It will cause a new problem", "!"]
  ];
  if (!state.repairTested) return `<fieldset class="repair-prediction">
    <legend>Before testing, what do you predict?</legend>
    <div>${predictions.map(([value, label, icon]) => `<button type="button" data-repair-prediction="${value}" class="${state.repairPrediction === value ? "selected" : ""}" aria-pressed="${state.repairPrediction === value}"><span>${icon}</span>${label}</button>`).join("")}</div>
    <small>${state.repairPrediction ? "Prediction recorded. Test one change and compare." : "A prediction says what you think the evidence will show."}</small>
    <button class="test-repair" data-test-repair ${state.repairPrediction ? "" : "disabled"}>▶ Test this change</button>
  </fieldset>`;
  const result = mission.testResults[state.selection];
  const outcome = repairOutcome(result);
  const matched = state.repairPrediction === outcome;
  return `<section class="test-result ${outcome === "MATCH" ? "passes" : ""}" aria-live="polite">
    <p class="activity-label">Test results</p>
    <div class="repair-goal-strip"><span>Goal</span><strong>Move 3 spaces + wave</strong></div>
    <div class="result-meters">
      <span><strong>${result.distance}</strong><small>spaces moved</small></span>
      <span><strong>${result.waved ? "Yes ✓" : "No ✕"}</strong><small>waved</small></span>
    </div>
    <p>${result.note}</p>
    <div class="prediction-verdict ${matched ? "matched" : "changed"}"><span>${matched ? "✓" : "↻"}</span><p><strong>${matched ? "Prediction matched" : "Prediction updated"}</strong>${matched ? "Your prediction and the test evidence agree." : `You predicted ${repairOutcomeLabel(state.repairPrediction)}. The test showed ${repairOutcomeLabel(outcome)}. That new evidence helps you decide.`}</p></div>
    <button class="retest-button" data-retest-repair>↻ Replay test</button>
  </section>`;
}

function repairOutcome(result) {
  if (result.distance === 3 && result.waved) return "MATCH";
  if (!result.waved) return "NEW";
  return "STILL";
}

function repairOutcomeLabel(outcome) {
  return { MATCH: "the goal would match", STILL: "the program would still be wrong", NEW: "a new problem would appear" }[outcome] || "a different result";
}

function renderInsert(mission) {
  let rows = "";
  const gapLabels = [
    "Before step 1",
    ...mission.items.slice(0, -1).map((_, index) => `Between steps ${index + 1} and ${index + 2}`),
    `After step ${mission.items.length}`
  ];
  for (let gap = 0; gap <= mission.items.length; gap++) {
    const selected = state.selection === gap;
    const checkedClass = state.answerChecked && selected ? (gap === mission.answer ? "answer-correct" : "answer-wrong") : "";
    rows += `<button class="insert-gap ${selected ? "selected" : ""} ${checkedClass}" data-gap="${gap}">
      <span>${selected ? "✓ Selected" : "+ Put it here"}</span><small>${gapLabels[gap]}</small>
    </button>`;
    if (gap < mission.items.length) rows += `<div class="fixed-step"><span>${gap + 1}</span>${mission.items[gap]}</div>`;
  }
  return `<p class="placement-instruction">Choose exactly where this card belongs:</p>
    <div class="missing-card">${mission.missing}</div><div class="insert-list">${rows}</div>`;
}

function renderRobot() {
  const cells = ["path", "path", "battery", "path", "rock", "path", "start", "path", "path"];
  const predictions = [
    ["BATTERY", "At the battery", "⚡"],
    ["ROCK", "Bumped into the rock", "🪨"],
    ["OUTSIDE", "Outside the garden", "↗"],
    ["SAFE", "Another safe square", "●"]
  ];
  return `<div class="robot-board" aria-label="A three by three garden grid">${cells.map((type, i) =>
    `<div class="grid-cell ${type === "start" ? "start" : ""}" data-grid-cell="${i}" data-cell-type="${type}">
      ${type === "battery" ? "🔋" : type === "rock" ? "🪨" : type === "start" ? robotToken("right") : "·"}
    </div>`).join("")}</div>
    <div class="command-palette">
      ${["MOVE 1", "TURN LEFT", "TURN RIGHT"].map(command => `<button data-command="${command}">${command}</button>`).join("")}
      <button data-undo-command class="undo-command">UNDO</button>
    </div>
    <div class="command-tray">${state.commands.length ? state.commands.map((c, i) => `<span><b>${i + 1}</b>${c}</span>`).join("") : "<em>Your commands will appear here.</em>"}</div>
    <fieldset class="route-prediction">
      <legend>Before you run it, where will Byte finish?</legend>
      <div>${predictions.map(([value, label, icon]) => `<button type="button" data-route-prediction="${value}" class="${state.robotPrediction === value ? "selected" : ""}" aria-pressed="${state.robotPrediction === value}"><span>${icon}</span>${label}</button>`).join("")}</div>
      <small>${state.robotPrediction ? "Prediction locked in. Now test it!" : "Coders predict first, then use the test as evidence."}</small>
    </fieldset>
    <button class="run-route" data-run-robot ${state.commands.length && state.robotPrediction ? "" : "disabled"}>${state.robotHasRun ? "↻ Replay route" : "▶ Test my prediction"}</button>`;
}

function robotToken(direction) {
  const arrows = { up: "↑", right: "→", down: "↓", left: "←" };
  return `<span class="robot-token" aria-label="Byte facing ${direction}">🤖<i>${arrows[direction]}</i></span>`;
}

function renderDesigner() {
  const atLimit = state.designer.steps.length >= 7;
  const filledSteps = state.designer.steps.filter(step => step.trim().length >= 4);
  const readyToTest = state.designer.goal.trim().length >= 3 && filledSteps.length >= 4;
  const checks = state.designer.checks || { actions: false, noGuess: false };
  const reviewItems = [
    ["actions", "Every step begins with an action", checks.actions],
    ["noGuess", "Byte never has to guess", checks.noGuess]
  ];
  return `<div class="designer-form">
    <label>Task name <span class="required-word">(required)</span>
      <input id="designer-goal" maxlength="60" required aria-required="true" value="${escapeHtml(state.designer.goal)}" placeholder="Feed the cat">
    </label>
    <p class="designer-tip">First, name the task. Then write one clear action in each box.</p>
    <div class="starter-words"><span>Action starters:</span>
      ${["Pick up", "Walk to", "Open", "Place", "Check"].map(word => `<button data-action-starter="${word}">${word}…</button>`).join("")}
    </div>
    ${state.designer.steps.map((step, i) => `<label class="designer-step"><span>${i + 1}</span>
      <input data-designer-step="${i}" maxlength="90" value="${escapeHtml(step)}" placeholder="${["Pick up...", "Walk to...", "Place...", "Check..."][i] || "Next..."}"></label>`).join("")}
    ${atLimit ? `<p class="step-limit">Maximum of 7 steps reached.</p>` : `<button class="secondary add-step" data-add-step>+ Add another step</button>`}
    <p class="autosave-note">✓ Your unfinished work saves on this device.</p>
    <section class="designer-review" aria-labelledby="designer-review-title">
      <div class="designer-review-heading"><span aria-hidden="true">🔎</span><div><h4 id="designer-review-title">Coder check</h4><p>Review your instructions like a real programmer.</p></div></div>
      <div class="designer-checklist">
        ${reviewItems.map(([key, label, checked]) => `<button type="button" data-designer-check="${key}" class="${checked ? "checked" : ""}" aria-pressed="${checked}"><span>${checked ? "✓" : "○"}</span>${label}</button>`).join("")}
        <div data-designer-tested class="${state.designer.tested ? "checked" : ""}"><span>${state.designer.tested ? "✓" : "○"}</span>I tested the complete order</div>
      </div>
      <button class="test-designer" type="button" data-test-designer ${readyToTest ? "" : "disabled"}>${state.designer.tested ? "↻ Read it back again" : "▶ Let Byte read it back"}</button>
      <small class="designer-test-help ${readyToTest ? "hidden" : ""}" data-designer-test-help>Add a task name and at least four clear steps to unlock the test.</small>
    </section>
    ${state.designer.tested ? `<section class="designer-readback" data-designer-readback aria-live="polite"><div><span aria-hidden="true">🤖</span><p><small>Byte's plan</small><strong>${escapeHtml(state.designer.goal)}</strong></p></div><ol>${filledSteps.map((step, index) => `<li style="--step-delay: ${index * 90}ms"><span>${index + 1}</span>${escapeHtml(step)}</li>`).join("")}</ol><p class="readback-question">Does each step say exactly what Byte should do?</p></section>` : ""}
  </div>`;
}

function refreshDesignerDraftState() {
  const ready = state.designer.goal.trim().length >= 3 && state.designer.steps.filter(step => step.trim().length >= 4).length >= 4;
  const testButton = document.querySelector("[data-test-designer]");
  if (testButton) {
    testButton.disabled = !ready;
    testButton.textContent = "▶ Let Byte read it back";
  }
  document.querySelector("[data-designer-test-help]")?.classList.toggle("hidden", ready);
  document.querySelector("[data-designer-readback]")?.remove();
  const testedItem = document.querySelector("[data-designer-tested]");
  if (testedItem) {
    testedItem.classList.remove("checked");
    testedItem.querySelector("span").textContent = "○";
  }
}

function renderBugSort(mission) {
  return `<div class="bug-gallery">${mission.cases.map((bugCase, caseIndex) => `
    <section class="bug-case ${bugCaseStatus(mission, caseIndex)}">
      <div class="bug-case-top"><span class="bug-number">${caseIndex + 1}</span><h4>${bugCase.name}</h4></div>
      <p class="program-label">Program</p>
      <div class="code-box">${bugCase.code}</div>
      <div class="evidence-panel">
        <p class="evidence-title">Test evidence</p>
        <div class="evidence-comparison">
          <section class="expected-evidence">
            <span aria-hidden="true">◎</span>
            <div><small>Expected</small><strong>What should happen</strong><p>${bugCase.expected}</p></div>
          </section>
          <span class="evidence-arrow" aria-hidden="true">→</span>
          <section class="actual-evidence">
            <span aria-hidden="true">!</span>
            <div><small>Actual</small><strong>What happened</strong><p>${bugCase.actual}</p></div>
          </section>
        </div>
      </div>
      <p class="diagnosis-label">What kind of bug caused the difference?</p>
      <div class="bug-labels">${mission.labels.map((label, answerIndex) =>
        `<button class="${state.bugAnswers[caseIndex] === answerIndex ? "selected" : ""}"
          data-bug-case="${caseIndex}" data-bug-answer="${answerIndex}">
          ${state.bugAnswers[caseIndex] === answerIndex ? "✓ " : ""}${label}</button>`).join("")}</div>
      ${state.bugChecked ? `<aside class="case-explanation ${state.bugAnswers[caseIndex] === mission.answer[caseIndex] ? "solved" : "clue"}"><span>${state.bugAnswers[caseIndex] === mission.answer[caseIndex] ? "✓" : "🔎"}</span><div><strong>${state.bugAnswers[caseIndex] === mission.answer[caseIndex] ? "Case solved" : "Evidence clue"}</strong><p>${bugCase.reason}</p></div></aside>` : ""}
    </section>`).join("")}</div>`;
}

function bugCaseStatus(mission, caseIndex) {
  if (!state.bugChecked) return "";
  return state.bugAnswers[caseIndex] === mission.answer[caseIndex] ? "case-correct" : "case-wrong";
}

function renderDebugDesigner() {
  const data = state.debugDesigner;
  const scenarios = bugLabScenarios();
  const bugTypes = [
    ["Repeated step", "👯", "Clones a command"],
    ["Missing step", "🫥", "Makes a command vanish"],
    ["Misspelled command", "🌀", "Scrambles a command"]
  ];
  const scenario = scenarios.find(item => item.id === data.scenario);
  return `<div class="bug-lab">
    <section class="lab-stage">
      <div class="lab-step"><span>1</span><div><strong>Pick an adventure</strong><small>What should Byte accomplish?</small></div></div>
      <div class="scenario-picker">${scenarios.map(item => `
        <button data-debug-scenario="${item.id}" class="${data.scenario === item.id ? "selected" : ""}">
          <b>${item.icon}</b><strong>${item.title}</strong><small>${item.expected}</small>
        </button>`).join("")}</div>
    </section>
    <section class="lab-stage">
      <div class="lab-step"><span>2</span><div><strong>Choose a bug power</strong><small>How will the program break?</small></div></div>
      <div class="bug-power-picker">${bugTypes.map(([type, icon, description]) => `
        <button data-debug-type="${type}" class="${data.type === type ? "selected" : ""}">
          <b>${icon}</b><strong>${type}</strong><small>${description}</small>
        </button>`).join("")}</div>
    </section>
    <button class="release-bug" data-release-bug ${data.scenario && data.type ? "" : "disabled"}>
      ${data.released ? "↻ Release it again" : "⚡ Release the bug!"}
    </button>
    ${data.released && scenario ? renderReleasedBug(scenario, data.type) : `
      <div class="lab-waiting"><span>🔬</span><p>Choose both ingredients to activate the lab.</p></div>`}
    <p class="autosave-note">✓ Your lab and detective note save on this device.</p>
  </div>`;
}

function bugLabScenarios() {
  return [
    { id: "moon", icon: "🚀", title: "Moon Delivery", expected: "Move 2 spaces, then wave.", code: ["MOVE 1", "MOVE 1", "WAVE"], typo: "MOOVE 1" },
    { id: "dance", icon: "🎉", title: "Dance Party", expected: "Spin once, then shout “BOOM!”", code: ["SPIN", "SAY \"BOOM!\""], typo: "SPNI" },
    { id: "garden", icon: "🎨", title: "Color Garden", expected: "Paint, move, then paint again.", code: ["PAINT BLUE", "MOVE 1", "PAINT BLUE"], typo: "PANT BLUE" }
  ];
}

function bugLabCase(scenario, type) {
  if (type === "Repeated step") return {
    buggy: [scenario.code[0], ...scenario.code],
    actual: `The first command happens twice. The plan no longer runs exactly as expected.`,
    repairs: ["Delete the whole program", "Remove the extra first command", "Add the first command again"],
    answer: 1
  };
  if (type === "Missing step") return {
    buggy: scenario.code.slice(0, -1),
    actual: `The final action never happens because “${scenario.code.at(-1)}” vanished.`,
    repairs: ["Repeat the first command", "Change every command", `Put “${scenario.code.at(-1)}” back at the end`],
    answer: 2
  };
  return {
    buggy: [scenario.typo, ...scenario.code.slice(1)],
    actual: `Byte stops at “${scenario.typo}” because that command is unknown.`,
    repairs: [`Change “${scenario.typo}” back to “${scenario.code[0]}”`, "Repeat the unknown command", "Delete every command"],
    answer: 0
  };
}

function renderReleasedBug(scenario, type) {
  const labCase = bugLabCase(scenario, type);
  const data = state.debugDesigner;
  return `<section class="bug-reveal">
    <div class="bug-burst" aria-hidden="true">BUG!</div>
    <div class="program-comparison">
      <section><p class="activity-label">Working program</p><div class="code-box">${scenario.code.join("\n")}</div></section>
      <span class="versus">→</span>
      <section class="buggy-program"><p class="activity-label">Buggy program</p><div class="code-box">${labCase.buggy.join("\n")}</div></section>
    </div>
    <div class="lab-evidence"><span>!</span><div><small>Actual result</small><strong>What happened?</strong><p>${labCase.actual}</p></div></div>
    <div class="repair-zone">
      <div class="lab-step"><span>3</span><div><strong>Choose the repair</strong><small>Change only what the evidence supports.</small></div></div>
      <div class="repair-options">${labCase.repairs.map((repair, index) => `
        <button data-debug-repair="${index}" class="${data.repair === index ? "selected" : ""}">
          <b>${String.fromCharCode(65 + index)}</b>${repair}
        </button>`).join("")}</div>
    </div>
    <label class="detective-note"><span>4</span><div><strong>Explain your evidence <small>(required)</small></strong>
      <textarea data-debug-note maxlength="140" placeholder="This repair works because…">${escapeHtml(data.note || "")}</textarea></div></label>
    ${data.repair !== null ? renderLabCaseFile(scenario, type, labCase) : ""}
  </section>`;
}

function renderLabCaseFile(scenario, type, labCase) {
  const data = state.debugDesigner;
  const ready = data.note.trim().length >= 8;
  return `<section class="case-preview lab-case-file ${data.reportFiled ? "filed" : ""}"><p class="activity-label">Detective report</p>
    <div class="case-file-title"><span>${scenario.icon}</span><strong>${scenario.title}</strong><small>${type}</small></div>
    <div class="report-sentence"><b>I expected…</b><p>${scenario.expected}</p></div>
    <div class="report-sentence"><b>I saw…</b><p>${labCase.actual}</p></div>
    <div class="report-sentence"><b>So I changed…</b><p>${labCase.repairs[data.repair]}</p></div>
    <div class="report-sentence"><b>Because…</b><p data-report-reason>${data.note.trim().length ? escapeHtml(data.note) : "Add your evidence explanation above."}</p></div>
    <button type="button" class="file-report" data-file-report ${ready ? "" : "disabled"}>${data.reportFiled ? "✓ Detective report filed" : "📁 File my detective report"}</button>
    <small class="report-help ${ready ? "hidden" : ""}" data-report-help>Write a short “because” explanation to file the report.</small>
  </section>`;
}

function refreshDebugReportDraft() {
  const data = state.debugDesigner;
  const ready = data.note.trim().length >= 8;
  const button = document.querySelector("[data-file-report]");
  if (button) {
    button.disabled = !ready;
    button.textContent = "📁 File my detective report";
  }
  document.querySelector("[data-report-help]")?.classList.toggle("hidden", ready);
  const reason = document.querySelector("[data-report-reason]");
  if (reason) reason.textContent = data.note.trim().length ? data.note : "Add your evidence explanation above.";
  document.querySelector(".lab-case-file")?.classList.remove("filed");
}

function patternChallenges() {
  return [
    { title: "Byte's Dance", sequence: ["CLAP", "JUMP", "CLAP", "JUMP", "CLAP", "JUMP"], unit: ["CLAP", "JUMP"], icon: "🎵",
      choices: [["CLAP"], ["CLAP", "JUMP"], ["CLAP", "JUMP", "CLAP"]] },
    { title: "Corner Course", sequence: ["MOVE", "MOVE", "TURN", "MOVE", "MOVE", "TURN"], unit: ["MOVE", "MOVE", "TURN"], icon: "🛞",
      choices: [["MOVE"], ["MOVE", "MOVE"], ["MOVE", "MOVE", "TURN"]] },
    { title: "Paint Trail", sequence: ["PAINT", "MOVE", "PAINT", "MOVE", "PAINT", "MOVE"], unit: ["PAINT", "MOVE"], icon: "🎨",
      choices: [["PAINT"], ["PAINT", "MOVE"], ["PAINT", "MOVE", "PAINT"]] }
  ];
}

function renderPatternFinder() {
  const data = state.level3;
  const challenge = patternChallenges()[data.patternRound];
  const selectedCommands = data.patternSelection.map(index => challenge.sequence[index]);
  return `<div class="pattern-finder">
    <div class="mission-stepper" aria-label="Mission progress">${patternChallenges().map((_, index) => `
      <span class="${index < data.patternRound ? "done" : index === data.patternRound ? "active" : ""}">
        <b>${index < data.patternRound ? "✓" : index + 1}</b><small>${index === data.patternRound ? "Find this pattern" : index < data.patternRound ? "Found" : "Next"}</small>
      </span>`).join("")}</div>
    <div class="round-meter">${patternChallenges().map((_, index) => `<span class="${index < data.patternRound ? "done" : index === data.patternRound ? "active" : ""}"></span>`).join("")}</div>
    <div class="pattern-heading"><span>${challenge.icon}</span><div><small>Pattern ${data.patternRound + 1} of 3</small><h4>${challenge.title}</h4></div></div>
    <p class="step-instruction"><b>Watch:</b> Byte performs this long sequence.</p>
    <div class="pattern-sequence display-only">${challenge.sequence.map((command, index) => `
      <span class="${data.patternRun ? "played" : ""}" style="--pattern-delay:${index * .12}s"><small>${index + 1}</small>${command}</span>`).join("")}</div>
    <button class="watch-pattern" data-watch-pattern>${data.patternRun ? "↻ Replay the full sequence" : "▶ Watch the full sequence"}</button>
    <fieldset class="pattern-choices"><legend><b>Choose:</b> Which smallest group repeats?</legend>
      ${challenge.choices.map((choice, index) => {
        const choiceIndexes = choice.map((_, choiceIndex) => choiceIndex);
        const selected = JSON.stringify(data.patternSelection) === JSON.stringify(choiceIndexes);
        return `<button type="button" data-pattern-option="${index}" class="${selected ? "selected" : ""}">
          ${choice.map(command => `<span>${command}</span>`).join("")}
        </button>`;
      }).join("")}
    </fieldset>
    ${selectedCommands.length ? `<div class="pattern-preview"><b>Your choice repeated:</b>
      <div>${Array.from({ length: Math.ceil(challenge.sequence.length / selectedCommands.length) }, () =>
        `<span>${selectedCommands.join(" + ")}</span>`).join("")}</div></div>` : ""}
    ${data.patternSolved ? renderPatternLoopBridge(challenge) : ""}
    <button class="guided-primary" data-check-pattern ${selectedCommands.length ? "" : "disabled"}>${data.patternSolved ? (data.patternRound === patternChallenges().length - 1 ? "Finish Pattern Party" : "Next pattern →") : "Check this pattern"}</button>
    <p class="autosave-note">✓ Your Level 3 progress saves on this device.</p>
  </div>`;
}

function renderPatternLoopBridge(challenge) {
  const repeats = challenge.sequence.length / challenge.unit.length;
  return `<section class="pattern-loop-bridge" aria-live="polite">
    <div><span aria-hidden="true">✨</span><p><small>Pattern becomes a loop</small><strong>You found both loop ingredients!</strong></p></div>
    <div class="loop-ingredient-map">
      <span><small>Repeat count</small><b>${repeats} times</b></span>
      <span><small>Loop body</small><b>${challenge.unit.join(" + ")}</b></span>
    </div>
    <pre>REPEAT ${repeats} TIMES\n${challenge.unit.map(command => `    ${command}`).join("\n")}\nEND</pre>
    <p>The long ${challenge.sequence.length}-command program and this shorter loop produce the same result.</p>
  </section>`;
}

function renderLoopBuilder() {
  const data = state.level3;
  const aiStage = data.loopStage === 1;
  const loopCorrect = aiStage
    ? data.loopCount === 4
    : data.loopCount === 3 && JSON.stringify(data.loopCommands) === JSON.stringify(["CLAP", "JUMP"]);
  const counts = [2, 3, 4, 5];
  const available = aiStage ? ["PAINT", "MOVE"] : ["CLAP", "JUMP", "SPIN", "WAVE"];
  const commands = aiStage ? ["PAINT", "MOVE"] : data.loopCommands;
  const predictionOptions = [
    ["MATCH", "It will match the goal", "✓"],
    ["SHORT", "It will stop too soon", "−"],
    ["LONG", "It will repeat too much", "+"],
    ["DIFFERENT", "The actions will differ", "↻"]
  ];
  return `<div class="loop-lab">
    <div class="mission-stepper two-step" aria-label="Mission progress">
      <span class="${aiStage ? "done" : "active"}"><b>${aiStage ? "✓" : "1"}</b><small>Build a loop</small></span>
      <span class="${aiStage ? "active" : ""}"><b>2</b><small>Check the AI</small></span>
    </div>
    <div class="loop-stage-title"><span>${aiStage ? "🤖" : "🎵"}</span><div><small>Challenge ${data.loopStage + 1} of 2</small>
      <h4>${aiStage ? "Check the AI's Fence Loop" : "Make Byte's Dance Shorter"}</h4></div></div>
    ${aiStage ? `<div class="ai-suggestion"><strong>Byte asked AI for help</strong><p>AI says: “Repeat PAINT + MOVE 5 times.”</p>
        <div class="fence-goal"><span>□</span><span>□</span><span>□</span><span>□</span><small>Goal: paint these 4 panels</small></div>
        <small><b>First, run the AI's idea.</b> Then use the evidence to repair it.</small></div>`
      : `<div class="long-program"><p class="activity-label">Target dance</p><code>CLAP · JUMP · CLAP · JUMP · CLAP · JUMP</code>
        <small>Make a shorter loop that performs exactly the same dance.</small></div>`}
    <p class="step-instruction"><b>1. Choose</b> how many times the loop repeats and what goes inside it.</p>
    <div class="visual-loop">
      <div class="loop-count-control"><label>How many times?</label><div>${counts.map(count => `
        <button data-loop-count="${count}" class="${data.loopCount === count ? "selected" : ""}">${count}</button>`).join("")}</div></div>
      <div class="loop-body-control"><label>What repeats?</label>
        ${aiStage ? `<div class="fixed-loop-body">${commands.map(command => `<span>${command}</span>`).join("")}</div>`
          : `<div class="loop-command-palette">${available.map(command => `<button data-loop-command="${command}">+ ${command}</button>`).join("")}</div>
             <div class="loop-body">${commands.length ? commands.map((command, index) => `<button data-remove-loop-command="${index}" aria-label="Remove ${command}">${command}<small>×</small></button>`).join("") : "<em>Choose the commands that repeat.</em>"}</div>`}
      </div>
    </div>
    <div class="code-box loop-code">REPEAT ${data.loopCount} TIMES\n${commands.map(command => `    ${command}`).join("\n") || "    ..."}</div>
    <fieldset class="loop-prediction"><legend><b>2. Predict</b> what will happen when this loop runs</legend><div>${predictionOptions.map(([value, label, icon]) => `<button type="button" data-loop-prediction="${value}" class="${data.loopPrediction === value ? "selected" : ""}" aria-pressed="${data.loopPrediction === value}"><span>${icon}</span>${label}</button>`).join("")}</div></fieldset>
    <p class="step-instruction"><b>3. Run</b> the loop and compare its expanded result with the goal.</p>
    <button class="run-loop" data-run-loop ${commands.length && data.loopPrediction ? "" : "disabled"}>${data.loopHasRun ? "↻ Run again" : aiStage ? "▶ Test the AI's loop" : "▶ Test my prediction"}</button>
    ${data.loopHasRun ? renderLoopOutput(data.loopCount, commands, aiStage) : ""}
    ${data.loopHasRun ? renderLoopPredictionVerdict(data.loopPrediction, loopBuilderOutcome(data.loopCount, commands, aiStage)) : ""}
    ${data.loopHasRun ? `<div class="guided-result ${loopCorrect ? "passes" : "needs-work"}">
      <strong>${loopCorrect ? "It matches! ✓" : "Not a match yet"}</strong>
      <p>${loopCorrect ? (aiStage ? "The loop paints all 4 panels and stops." : "Your short loop performs the full target dance.")
        : aiStage ? "The result shows one extra repeat. Change only the repeat count, then run it again."
        : "Compare your result with the target dance. Change the count or commands, then run it again."}</p>
      ${loopCorrect ? `<button class="guided-primary" data-check-loop>${aiStage ? "Finish mission" : "Continue to the AI challenge →"}</button>` : ""}
    </div>` : ""}
  </div>`;
}

function loopBuilderOutcome(count, commands, aiStage) {
  const expanded = Array.from({ length: count }, () => commands).flat();
  const target = aiStage ? Array.from({ length: 4 }, () => ["PAINT", "MOVE"]).flat() : Array.from({ length: 3 }, () => ["CLAP", "JUMP"]).flat();
  if (JSON.stringify(expanded) === JSON.stringify(target)) return "MATCH";
  if (expanded.length < target.length) return "SHORT";
  if (expanded.length > target.length) return "LONG";
  return "DIFFERENT";
}

function renderLoopPredictionVerdict(prediction, outcome) {
  const labels = { MATCH: "match the goal", SHORT: "stop too soon", LONG: "repeat too much", DIFFERENT: "use different actions" };
  const evidence = { MATCH: "matches the goal", SHORT: "stops too soon", LONG: "repeats too much", DIFFERENT: "uses different actions" };
  const matched = prediction === outcome;
  return `<div class="loop-prediction-verdict ${matched ? "matched" : "updated"}"><span>${matched ? "✓" : "↻"}</span><p><strong>${matched ? "Prediction matched" : "Prediction updated by evidence"}</strong>You predicted it would ${labels[prediction]}. The expanded program ${evidence[outcome]}.</p></div>`;
}

function renderLoopOutput(count, commands, fenceMode = false) {
  const expanded = Array.from({ length: count }, () => commands).flat();
  return `<section class="loop-output ${fenceMode && count !== 4 ? "loop-warning" : ""}" aria-live="polite">
    <p class="activity-label">Run result</p>
    <div class="iteration-row">${Array.from({ length: count }, (_, index) => `
      <span><b>${index + 1}</b>${fenceMode ? (index < 4 ? "🎨" : "⚠️") : commands.map(commandIcon).join("")}</span>`).join("")}</div>
    <div class="loop-math"><b>${commands.length}</b> ${commands.length === 1 ? "action" : "actions"} inside × <b>${count}</b> repeats = <strong>${expanded.length} total actions</strong></div>
    <div class="loop-expansion"><small>Expanded program</small><div>${expanded.map((command, index) => `<span><b>${index + 1}</b>${command}</span>`).join("")}</div></div>
    <p>${fenceMode ? (count === 4 ? "All 4 panels are painted. The loop stops in the right place." : `The loop runs ${count} times, but there are only 4 panels.`)
      : `${commands.join(" + ")} repeats ${count} times.`}</p>
  </section>`;
}

function commandIcon(command) {
  return ({ CLAP: "👏", JUMP: "⬆️", SPIN: "🌀", WAVE: "👋", "CHANGE COLOR": "🌈" })[command] || "•";
}

function renderLoopStudio() {
  const data = state.level3;
  if (data.studioStage === 0) return renderRunawayMachine();
  const creation = data.creation;
  const commands = ["SPIN", "JUMP", "CHANGE COLOR", "WAVE"];
  const named = creation.title.trim().length >= 3;
  const actionsReady = creation.commands.length >= 2;
  const safeExplained = creation.safetyCheck === "COUNT";
  const readyToFinish = named && actionsReady && creation.hasRun && safeExplained;
  return `<div class="loop-studio">
    <div class="mission-stepper" aria-label="Mission progress">
      <span class="done"><b>✓</b><small>Stop</small></span>
      <span class="done"><b>✓</b><small>Repair</small></span>
      <span class="active"><b>3</b><small>Create</small></span>
    </div>
    <div class="studio-heading"><span>✨</span><div><small>Step 3 · Loop Studio</small><h4>Create your own repeating animation</h4></div></div>
    <p class="stage-success">Great repair! Now invent a safe loop of your own.</p>
    <div class="creation-checklist four-step" aria-label="Creation checklist">
      <span class="${named ? "done" : ""}"><b>${named ? "✓" : "1"}</b> Name it</span>
      <span class="${actionsReady ? "done" : ""}"><b>${actionsReady ? "✓" : "2"}</b> Add two actions</span>
      <span class="${creation.hasRun ? "done" : ""}"><b>${creation.hasRun ? "✓" : "3"}</b> Run it</span>
      <span class="${safeExplained ? "done" : ""}"><b>${safeExplained ? "✓" : "4"}</b> Explain the stop</span>
    </div>
    <label class="creation-title">Animation title <span>(required)</span>
      <input data-creation-title maxlength="50" value="${escapeHtml(creation.title)}" placeholder="Rainbow Jump Party">
    </label>
    <div class="creation-count"><label>Repeat</label>${[2, 3, 4, 5, 6].map(count => `
      <button data-creation-count="${count}" class="${creation.count === count ? "selected" : ""}">${count}</button>`).join("")}<label>times</label></div>
    <div class="creation-palette">${commands.map(command => `<button data-creation-command="${command}">${command}</button>`).join("")}</div>
    <div class="creation-body">${creation.commands.length ? creation.commands.map((command, index) => `
      <button data-remove-creation-command="${index}">${index + 1}. ${command} <small>×</small></button>`).join("") : "<em>Add at least two actions.</em>"}</div>
    <div class="code-box">REPEAT ${creation.count} TIMES\n${creation.commands.map(command => `    ${command}`).join("\n") || "    ..."}</div>
    <button class="run-loop" data-run-creation ${creation.commands.length ? "" : "disabled"}>${creation.hasRun ? "↻ Replay animation" : "▶ Run animation"}</button>
    ${creation.hasRun ? renderLoopOutput(creation.count, creation.commands) : ""}
    ${creation.hasRun ? `<fieldset class="creation-safety"><legend>Why is your loop safe from running forever?</legend><div>
      <button type="button" data-creation-safety="COUNT" class="${creation.safetyCheck === "COUNT" ? "selected" : ""}">It has a repeat count, so it stops.</button>
      <button type="button" data-creation-safety="ACTIONS" class="${creation.safetyCheck === "ACTIONS" ? "selected" : ""}">It uses fun actions.</button>
      <button type="button" data-creation-safety="RUN" class="${creation.safetyCheck === "RUN" ? "selected" : ""}">I pressed the Run button.</button>
    </div>${creation.safetyCheck && !safeExplained ? `<p>Look at the first line of your code. What tells Byte when to stop?</p>` : ""}</fieldset>` : ""}
    <button class="guided-primary finish-creation" data-finish-studio ${readyToFinish ? "" : "disabled"}>Save animation and finish</button>
    ${!readyToFinish ? `<p class="button-helper">Complete the four steps above to finish this mission.</p>` : ""}
    <p class="autosave-note">✓ Your original loop saves with My Badges.</p>
  </div>`;
}

function renderRunawayMachine() {
  const data = state.level3;
  if (data.runawayStopped && data.repairStarted) {
    const tested = data.repairRun;
    const repaired = tested && data.repairCount === 6;
    return `<div class="runaway-machine repair-stage">
      <div class="mission-stepper" aria-label="Mission progress">
        <span class="done"><b>✓</b><small>Stop</small></span>
        <span class="active"><b>2</b><small>Repair</small></span>
        <span><b>3</b><small>Create</small></span>
      </div>
      <div class="machine-heading"><span>🛠️</span><div><small>Step 2 · Repair</small><h4>Make the loop stop by itself</h4></div></div>
      <div class="repair-goal"><strong>Goal</strong><span>Make exactly 6 cookies for 6 teammates.</span><div>🧒 🧒 🧒 🧒 🧒 🧒</div></div>
      <div class="code-box">REPEAT <mark>${data.repairCount ?? "?"}</mark> TIMES\n    MAKE COOKIE</div>
      <fieldset class="repair-options"><legend><b>1. Choose</b> a repeat count</legend><div>${[2, 6, "FOREVER"].map(count => `
        <button type="button" data-repair-count="${count}" class="${String(data.repairCount) === String(count) ? "selected" : ""}">${count}</button>`).join("")}</div></fieldset>
      <button class="run-loop" data-run-repair ${data.repairCount === null ? "disabled" : ""}>▶ Test my repair</button>
      ${data.repairCount === null ? `<p class="button-helper">Choose a repeat count to enable the test.</p>` : ""}
      ${tested ? `<div class="guided-result ${repaired ? "passes" : "needs-work"}">
        <strong>${repaired ? "Exactly 6 cookies! ✓" : data.repairCount === "FOREVER" ? "The machine runs away again" : "That makes too few cookies"}</strong>
        <div class="repair-cookie-result">${data.repairCount === "FOREVER" ? "🍪🍪🍪🍪🍪🍪🍪🍪…" : "🍪".repeat(data.repairCount)}</div>
        <p>${repaired ? "The loop reaches the goal and stops by itself." : "Use the goal as evidence. Change the repeat count and test again."}</p>
        ${repaired ? `<button class="guided-primary" data-open-studio>Continue to Loop Studio →</button>` : ""}
      </div>` : ""}
    </div>`;
  }
  return `<div class="runaway-machine">
    <div class="mission-stepper" aria-label="Mission progress">
      <span class="active"><b>1</b><small>Stop</small></span>
      <span><b>2</b><small>Repair</small></span>
      <span><b>3</b><small>Create</small></span>
    </div>
    <div class="machine-heading"><span>🍪</span><div><small>Step 1 · Cookie emergency!</small><h4>Stop the runaway loop</h4></div></div>
    <p class="step-instruction">This program keeps making cookies. <b>Start it, watch the counter, then stop it yourself.</b></p>
    <div class="code-box">REPEAT FOREVER\n    MAKE COOKIE</div>
    <div class="cookie-counter"><strong id="cookie-count">${data.runawayStopped ? data.runawayCookies : 0}</strong><span>cookies</span><div id="cookie-pile">${data.runawayStopped ? "🍪".repeat(data.runawayCookies) : ""}</div></div>
    ${data.runawayStopped
      ? `<div class="guided-result passes"><strong>${data.runawayManualStop ? "You stopped it! ✓" : "Safety stop activated ✓"}</strong>
          <p>${data.runawayManualStop ? "You used a manual stop." : "The emergency system stopped the machine at 14 cookies."} Now repair the program so it stops by itself.</p>
          <fieldset class="runaway-reason"><legend>Why did the program keep running?</legend><div>
            <button type="button" data-runaway-reason="FOREVER" class="${data.runawayReason === "FOREVER" ? "selected" : ""}">FOREVER gives it no automatic stop.</button>
            <button type="button" data-runaway-reason="COOKIE" class="${data.runawayReason === "COOKIE" ? "selected" : ""}">MAKE COOKIE is not a real command.</button>
            <button type="button" data-runaway-reason="BUTTON" class="${data.runawayReason === "BUTTON" ? "selected" : ""}">The Start button is broken.</button>
          </div></fieldset>
          <button class="guided-primary" data-begin-repair ${data.runawayReason ? "" : "disabled"}>Repair the loop →</button></div>`
      : `<button class="danger-button" data-runaway-action>▶ Start the cookie machine</button>`}
  </div>`;
}

function compassResult(start, program) {
  if (program === "B") return "NORTH";
  return ({ NORTH: "WEST", WEST: "SOUTH", SOUTH: "EAST", EAST: "NORTH" })[start];
}

function renderCompassExperiment(mission) {
  const data = state.level4;
  const lastTrial = data.compassTrials.at(-1);
  const displayStart = lastTrial?.start || data.compassStart;
  const displayEnd = lastTrial?.end || data.compassStart;
  const arrows = { NORTH: "↑", EAST: "→", SOUTH: "↓", WEST: "←" };
  const testedPrograms = new Set(data.compassTrials.map(trial => trial.program));
  const testedStarts = new Set(data.compassTrials.map(trial => trial.start));
  const experimentReady = testedPrograms.size === 2 && testedStarts.size >= 2;
  return `<div class="compass-experiment">
    <section class="reuse-bridge"><div><small>Your journey so far</small><strong>Patterns helped you notice. Loops helped you repeat. Functions will help you name and reuse.</strong></div><span>Pattern → Loop → Function</span></section>
    <div class="compass-teach"><span aria-hidden="true">🧭</span><div><small>Relative versus absolute</small><h4>“Turn left” depends on where Byte starts.</h4><p>“Face north” names the same direction every time. Test both ideas and collect evidence.</p></div></div>
    <div class="compass-workbench">
      <section class="compass-controls">
        <fieldset><legend><b>1.</b> Choose Byte's starting direction</legend><div>${["NORTH", "EAST", "SOUTH", "WEST"].map(direction => `<button data-compass-start="${direction}" class="${data.compassStart === direction ? "selected" : ""}">${arrows[direction]} ${direction}</button>`).join("")}</div></fieldset>
        <fieldset><legend><b>2.</b> Choose a program</legend><div>
          <button data-compass-program="A" class="${data.compassProgram === "A" ? "selected" : ""}"><b>A</b> TURN LEFT · MOVE 4</button>
          <button data-compass-program="B" class="${data.compassProgram === "B" ? "selected" : ""}"><b>B</b> FACE NORTH · MOVE 4</button>
        </div></fieldset>
        <button class="run-loop" data-run-compass>▶ Run this test</button>
      </section>
      <section class="compass-visual" aria-live="polite">
        <span class="north-label">NORTH ★</span><span class="east-label">E</span><span class="south-label">S</span><span class="west-label">W</span>
        <div class="compass-robot"><span>🤖</span><b>${arrows[displayEnd]}</b></div>
        ${lastTrial ? `<p><small>Started</small><strong>${arrows[displayStart]} ${displayStart}</strong><span>→</span><small>Finished</small><strong>${arrows[displayEnd]} ${displayEnd}</strong></p>` : `<p class="waiting-result">Choose a start and program, then run the test.</p>`}
      </section>
    </div>
    <section class="trial-log"><div><span>Experiment evidence</span><small>${experimentReady ? "Enough evidence to decide ✓" : "Test A and B using at least two starting directions."}</small></div>
      ${data.compassTrials.length ? `<div class="trial-cards">${data.compassTrials.map((trial, index) => `<span class="${trial.end === "NORTH" ? "north" : ""}"><b>${index + 1}</b> ${trial.start} + Program ${trial.program} <strong>→ ${trial.end}${trial.end === "NORTH" ? " ✓" : ""}</strong></span>`).join("")}</div>` : `<em>Your test results will appear here.</em>`}
    </section>
    <fieldset class="compass-conclusion"><legend><b>3.</b> Which program always states the northward goal clearly?</legend>${mission.choices.slice(0, 2).map((choice, index) => `<button data-compass-answer="${index}" class="${state.selection === index ? "selected" : ""} ${state.answerChecked && state.selection === index ? (index === mission.answer ? "answer-correct" : "answer-wrong") : ""}"><span>${String.fromCharCode(65 + index)}</span>${choice}</button>`).join("")}</fieldset>
  </div>`;
}

function renderFunctionBuilder() {
  const data = state.level4;
  const results = data.builderResults || [];
  const direction = data.builderDirection || "?";
  const movement = data.builderMovement === "PARAM" ? "MOVE steps" : data.builderMovement === "FIXED" ? "MOVE 4" : "?";
  const call = data.builderCall === "CORRECT" ? "GO_NORTH(4)" : data.builderCall === "EMPTY" ? "GO_NORTH()" : data.builderCall === "WRONG" ? "GO_EAST(4)" : "?";
  const correctBuild = data.builderDirection === "NORTH" && data.builderMovement === "PARAM" && data.builderCall === "CORRECT";
  return `<div class="function-builder">
    <div class="function-intro"><span aria-hidden="true">🧰</span><div><small>New coding tool</small><h4>A function gives a useful job a name.</h4><p>The word <b>steps</b> is a parameter—a changeable input. One function can then move 1 step, 4 steps, or any other distance.</p></div></div>
    <div class="function-parts">
      <fieldset><legend><b>1.</b> Which way should Byte face?</legend><div>${["NORTH", "EAST", "SOUTH", "WEST"].map(value => `<button type="button" data-function-direction="${value}" class="${data.builderDirection === value ? "selected" : ""}">FACE ${value}</button>`).join("")}</div></fieldset>
      <fieldset><legend><b>2.</b> Which move works for any distance?</legend><div>
        <button type="button" data-function-movement="PARAM" class="${data.builderMovement === "PARAM" ? "selected" : ""}">MOVE steps</button>
        <button type="button" data-function-movement="FIXED" class="${data.builderMovement === "FIXED" ? "selected" : ""}">MOVE 4</button>
      </div></fieldset>
      <fieldset><legend><b>3.</b> Which call asks the function to move 4 steps?</legend><div>
        <button type="button" data-function-call="CORRECT" class="${data.builderCall === "CORRECT" ? "selected" : ""}">GO_NORTH(4)</button>
        <button type="button" data-function-call="EMPTY" class="${data.builderCall === "EMPTY" ? "selected" : ""}">GO_NORTH()</button>
        <button type="button" data-function-call="WRONG" class="${data.builderCall === "WRONG" ? "selected" : ""}">GO_EAST(4)</button>
      </div></fieldset>
    </div>
    <div class="function-preview"><span>Live code preview</span><pre>FUNCTION GO_NORTH(steps)\n    FACE ${direction}\n    ${movement}\nEND\n\n${call}</pre></div>
    <section class="function-anatomy"><h4>Read the function like a coder</h4><div>
      <span><b>Name</b><code>GO_NORTH</code><small>the job</small></span>
      <span><b>Parameter</b><code>steps</code><small>the changeable input</small></span>
      <span><b>Body</b><code>FACE + MOVE</code><small>the instructions</small></span>
      <span><b>Call</b><code>${call}</code><small>use the job</small></span>
    </div></section>
    <section class="parameter-tester"><div><small>Parameter tester</small><h4>Try the same function with different inputs</h4><p>Choose a number, run the function, then change only the number and run it again.</p></div>
      <div class="parameter-controls"><span>GO_NORTH(</span>${[2, 4, 6].map(steps => `<button data-builder-test-steps="${steps}" class="${data.builderTestSteps === steps ? "selected" : ""}">${steps}</button>`).join("")}<span>)</span></div>
      <button class="run-loop" data-run-function ${data.builderDirection && data.builderMovement && data.builderCall ? "" : "disabled"}>▶ Run with ${data.builderTestSteps} steps</button>
      <div class="parameter-results">${results.length ? results.map(steps => `<span class="${correctBuild ? "passes" : "needs-work"}"><b>${correctBuild ? "↑" : "?"}</b><strong>${steps}</strong><small>GO_NORTH(${steps})</small></span>`).join("") : `<em>Run at least two different inputs.</em>`}</div>
    </section>
    ${results.length ? `<div class="guided-result ${correctBuild ? "passes" : "needs-work"}"><strong>${correctBuild ? `${results.length} parameter test${results.length === 1 ? "" : "s"} complete` : "The test found a clue"}</strong><p>${correctBuild ? (results.length >= 2 ? "The function reused the same instructions with different distances. That is why parameters are powerful. ✓" : "Good first test. Change the number and run the same function again.") : "Read the live code from top to bottom. Does its name, direction, parameter, and call all agree?"}</p></div>` : ""}
  </div>`;
}

function functionRoutePosition() {
  if (!state.level4.routeRan || !state.level4.routeResult) return { row: 5, column: 0, safe: true, collected: false };
  return state.level4.routeResult;
}

function renderFunctionRoute() {
  const data = state.level4;
  const position = functionRoutePosition();
  const functions = ["GO_EAST", "GO_NORTH", "GO_WEST", "GO_SOUTH"];
  const cells = Array.from({ length: 36 }, (_, index) => {
    const row = Math.floor(index / 6);
    const column = index % 6;
    const robotHere = row === position.row && column === position.column;
    const target = row === 0 && column === 5;
    const start = row === 5 && column === 0;
    const obstacle = row === 5 && column === 2;
    const energy = row === 3 && column === 1 && !position.collected;
    return `<div class="function-route-cell ${target ? "target" : ""} ${start ? "start" : ""} ${obstacle ? "obstacle" : ""} ${energy ? "energy" : ""} ${robotHere ? "robot-here" : ""}">${robotHere ? `<span aria-label="Byte's position">🤖</span>` : target ? `<span aria-label="Delivery beacon">📡</span>` : obstacle ? `<span aria-label="Rock obstacle">🪨</span>` : energy ? `<span aria-label="Energy star">⭐</span>` : start ? "START" : ""}</div>`;
  }).join("");
  const reached = data.routeRan && position.safe && position.collected && position.row === 0 && position.column === 5;
  const tracedSpaces = (data.routeResult?.trace || []).length
    ? data.routeResult.trace.reduce((total, item) => total + item.stepsCompleted, 0)
    : data.routeCalls.reduce((total, call) => total + call.steps, 0);
  const routeReasons = [
    ["REUSE", "Functions turn useful jobs into clear commands I can reuse."],
    ["SPEED", "Functions make Byte move faster than normal."],
    ["FOREVER", "Functions always repeat their body forever."]
  ];
  return `<div class="function-route">
    <div class="function-library"><span>Final capstone · Function family</span><p>You built GO_NORTH. The other functions reuse the same pattern and change only one direction.</p><div class="function-family">
      ${["NORTH", "EAST", "SOUTH", "WEST"].map(direction => `<code><b>GO_${direction}(steps)</b><small>FACE ${direction}<br>MOVE steps</small></code>`).join("")}
    </div><small>One pattern becomes four clear, reusable navigation tools.</small></div>
    <div class="delivery-goal"><span>⭐</span><div><strong>Collect energy before delivery</strong><small>Finish at 📡 in exactly 3 function calls. The 🪨 blocks the bottom path.</small></div></div>
    <div class="route-layout">
      <section><div class="function-route-grid" aria-label="A six by six route grid with a start, energy star, rock, and delivery beacon">${cells}</div></section>
      <section class="route-controls">
        <fieldset><legend><b>1.</b> Choose a function</legend><div>${functions.map(name => `<button type="button" data-route-function="${name}" class="${data.routeFunction === name ? "selected" : ""}">${name}</button>`).join("")}</div></fieldset>
        <fieldset><legend><b>2.</b> Choose steps</legend><div>${[1, 2, 3, 4, 5].map(steps => `<button type="button" data-route-steps="${steps}" class="${data.routeSteps === steps ? "selected" : ""}">${steps}</button>`).join("")}</div></fieldset>
        <button class="guided-primary" data-add-route-call ${data.routeCalls.length >= 3 ? "disabled" : ""}>+ Add function call</button>
      </section>
    </div>
    <div class="route-program"><span>Your program · ${data.routeCalls.length}/3 calls</span><div>${data.routeCalls.length ? data.routeCalls.map((call, index) => `<button data-remove-route-call="${index}" title="Remove this call"><b>${index + 1}</b>${call.name}(${call.steps}) <small>×</small></button>`).join("") : "<em>Add three function calls to build the route.</em>"}</div></div>
    <button class="run-loop" data-run-function-route ${data.routeCalls.length ? "" : "disabled"}>${data.routeRan ? "↻ Run route again" : "▶ Run my route"}</button>
    ${data.routeRan ? renderFunctionTrace(data.routeResult?.trace || []) : ""}
    ${data.routeRan ? `<div class="guided-result ${reached ? "passes" : "needs-work"}"><strong>${reached ? "Energy collected and delivery complete! ✓" : !position.safe ? (position.hitObstacle ? "The rock blocked Byte" : "Byte reached the edge") : !position.collected ? "The energy star was missed" : "Byte stopped in a different square"}</strong><p>${reached ? "Three reusable function calls solved the complete delivery challenge." : "Use the grid as evidence. Change one direction or distance, then run again."}</p></div>` : ""}
    ${reached ? `<section class="capstone-power"><div><span aria-hidden="true">🏆</span><p><small>Look what your functions did</small><strong>3 clear calls guided Byte ${tracedSpaces} spaces and collected the energy star.</strong></p></div><div class="capstone-skill-row"><span>Plan ✓</span><span>Test ✓</span><span>Debug ✓</span><span>Reuse ✓</span></div></section>
      <fieldset class="route-reflection"><legend>Why were functions useful in this challenge?</legend>${routeReasons.map(([value, label]) => `<button type="button" data-route-reason="${value}" class="${data.routeReason === value ? "selected" : ""}"><span>${data.routeReason === value ? "●" : "○"}</span>${label}</button>`).join("")}${data.routeReason && data.routeReason !== "REUSE" ? `<p>Look at your three-call program. Did Byte move faster, or did the code become clearer and reusable?</p>` : ""}</fieldset>` : ""}
  </div>`;
}

function renderFunctionTrace(trace) {
  if (!trace.length) return `<section class="function-trace"><div class="trace-heading"><span aria-hidden="true">🔍</span><p><small>Call-by-call trace</small><strong>Run the route again to create a detailed trace.</strong></p></div></section>`;
  const arrows = { GO_NORTH: "↑", GO_EAST: "→", GO_SOUTH: "↓", GO_WEST: "←" };
  return `<section class="function-trace" aria-live="polite"><div class="trace-heading"><span aria-hidden="true">🔍</span><p><small>Call-by-call trace</small><strong>Read each function call and follow what Byte did.</strong></p></div><div class="trace-calls">${trace.map((item, index) => `<article class="${item.safe ? "safe" : "stopped"}"><div><b>${index + 1}</b><code>${item.name}(${item.steps})</code><span>${arrows[item.name]}</span></div><p>Moved ${item.stepsCompleted} of ${item.steps} ${item.steps === 1 ? "space" : "spaces"} · row ${item.start.row + 1}, column ${item.start.column + 1} → row ${item.end.row + 1}, column ${item.end.column + 1}</p>${item.collectedEnergy ? `<strong>⭐ Energy collected!</strong>` : item.safe ? `<small>Call complete ✓</small>` : `<strong>${item.hitObstacle ? "🪨 Stopped by the rock" : "⚠ Stopped at the grid edge"}</strong>`}</article>`).join("")}</div></section>`;
}

function runFunctionRoute() {
  let row = 5;
  let column = 0;
  let safe = true;
  let collected = false;
  let hitObstacle = false;
  const trace = [];
  const movement = {
    GO_NORTH: [-1, 0], GO_EAST: [0, 1], GO_SOUTH: [1, 0], GO_WEST: [0, -1]
  };
  for (const call of state.level4.routeCalls) {
    const start = { row, column };
    const collectedBefore = collected;
    let stepsCompleted = 0;
    const [rowChange, columnChange] = movement[call.name];
    for (let step = 0; step < call.steps; step += 1) {
      const nextRow = row + rowChange;
      const nextColumn = column + columnChange;
      if (nextRow < 0 || nextRow > 5 || nextColumn < 0 || nextColumn > 5) {
        safe = false;
        break;
      }
      if (nextRow === 5 && nextColumn === 2) {
        safe = false;
        hitObstacle = true;
        break;
      }
      row = nextRow;
      column = nextColumn;
      stepsCompleted += 1;
      if (row === 3 && column === 1) collected = true;
    }
    trace.push({
      name: call.name,
      steps: call.steps,
      stepsCompleted,
      start,
      end: { row, column },
      safe,
      hitObstacle: !safe && hitObstacle,
      collectedEnergy: !collectedBefore && collected
    });
    if (!safe) break;
  }
  state.level4.routeRan = true;
  state.level4.routeResult = { row, column, safe, collected, hitObstacle, trace };
  save();
  renderActivity();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function bindActivity() {
  document.querySelector("[data-request-restart]")?.addEventListener("click", () => {
    state.restartConfirmation = true;
    renderActivity();
  });
  document.querySelector("[data-cancel-restart]")?.addEventListener("click", () => {
    state.restartConfirmation = false;
    renderActivity();
  });
  document.querySelector("[data-confirm-restart]")?.addEventListener("click", () => resetSavedActivity(currentMission()));
  document.querySelectorAll("[data-choice]").forEach(button => button.addEventListener("click", () => {
    state.selection = Number(button.dataset.choice);
    state.answerChecked = false;
    state.repairPrediction = "";
    state.repairTested = false;
    renderActivity();
  }));
  document.querySelectorAll("[data-gap]").forEach(button => button.addEventListener("click", () => {
    state.selection = Number(button.dataset.gap);
    state.answerChecked = false;
    renderActivity();
  }));
  document.querySelectorAll("[data-up]").forEach(button => button.addEventListener("click", () => moveItem(Number(button.dataset.up), -1)));
  document.querySelectorAll("[data-down]").forEach(button => button.addEventListener("click", () => moveItem(Number(button.dataset.down), 1)));
  document.querySelector("[data-run-sequence]")?.addEventListener("click", () => {
    state.sequenceDemoRun = true;
    renderActivity();
  });
  document.querySelector("[data-run-ai-original]")?.addEventListener("click", () => {
    state.starter.aiRan = true;
    feedback.className = "feedback hidden";
    save(); renderActivity();
  });
  document.querySelectorAll("[data-ai-issue]").forEach(button => button.addEventListener("click", () => {
    state.starter.aiIssue = button.dataset.aiIssue;
    state.starter.aiRepair = "";
    state.starter.aiFixedRun = false;
    feedback.className = "feedback hidden";
    save(); renderActivity();
  }));
  document.querySelectorAll("[data-ai-repair]").forEach(button => button.addEventListener("click", () => {
    state.starter.aiRepair = button.dataset.aiRepair;
    state.starter.aiFixedRun = false;
    feedback.className = "feedback hidden";
    save(); renderActivity();
  }));
  document.querySelector("[data-run-ai-fixed]")?.addEventListener("click", () => {
    state.starter.aiFixedRun = true;
    save(); renderActivity();
  });
  document.querySelectorAll("[data-command]").forEach(button => button.addEventListener("click", () => {
    if (state.commands.length < 8) state.commands.push(button.dataset.command);
    state.robotPrediction = "";
    state.robotHasRun = false;
    renderActivity();
  }));
  document.querySelector("[data-undo-command]")?.addEventListener("click", () => {
    state.commands.pop();
    state.robotPrediction = "";
    state.robotHasRun = false;
    renderActivity();
  });
  document.querySelectorAll("[data-route-prediction]").forEach(button => button.addEventListener("click", () => {
    state.robotPrediction = button.dataset.routePrediction;
    state.robotHasRun = false;
    feedback.className = "feedback hidden";
    renderActivity();
  }));
  document.querySelector("[data-run-robot]")?.addEventListener("click", runRobot);
  document.querySelector("#designer-goal")?.addEventListener("input", event => {
    state.designer.goal = event.target.value;
    state.designer.tested = false;
    save();
    refreshDesignerDraftState();
  });
  document.querySelectorAll("[data-designer-step]").forEach(input => input.addEventListener("input", event => {
    state.designer.steps[Number(input.dataset.designerStep)] = event.target.value;
    state.designer.tested = false;
    save();
    refreshDesignerDraftState();
  }));
  document.querySelector("[data-add-step]")?.addEventListener("click", () => {
    if (state.designer.steps.length < 7) state.designer.steps.push("");
    state.designer.tested = false;
    save(); renderActivity();
  });
  document.querySelectorAll("[data-designer-check]").forEach(button => button.addEventListener("click", () => {
    const key = button.dataset.designerCheck;
    state.designer.checks[key] = !state.designer.checks[key];
    save();
    renderActivity();
  }));
  document.querySelector("[data-test-designer]")?.addEventListener("click", () => {
    state.designer.tested = true;
    feedback.className = "feedback hidden";
    save();
    renderActivity();
  });
  document.querySelectorAll("[data-bug-case]").forEach(button => button.addEventListener("click", () => {
    state.bugAnswers[Number(button.dataset.bugCase)] = Number(button.dataset.bugAnswer);
    state.bugChecked = false;
    renderActivity();
  }));
  document.querySelectorAll("[data-repair-prediction]").forEach(button => button.addEventListener("click", () => {
    state.repairPrediction = button.dataset.repairPrediction;
    state.repairTested = false;
    feedback.className = "feedback hidden";
    renderActivity();
  }));
  document.querySelector("[data-test-repair]")?.addEventListener("click", () => {
    if (!state.repairPrediction) return;
    state.repairTested = true;
    renderActivity();
  });
  document.querySelector("[data-retest-repair]")?.addEventListener("click", async () => {
    state.repairTested = false;
    renderActivity();
    await pause(180);
    state.repairTested = true;
    renderActivity();
  });
  document.querySelector("[data-run-demo]")?.addEventListener("click", () => {
    state.demoRun = true;
    renderActivity();
  });
  document.querySelectorAll("[data-action-starter]").forEach(button => button.addEventListener("click", () => {
    const emptyIndex = state.designer.steps.findIndex(step => !step.trim());
    if (emptyIndex === -1) return;
    state.designer.steps[emptyIndex] = `${button.dataset.actionStarter} `;
    state.designer.tested = false;
    save();
    renderActivity();
    document.querySelector(`[data-designer-step="${emptyIndex}"]`)?.focus();
  }));
  document.querySelectorAll("[data-debug-type]").forEach(button => button.addEventListener("click", () => {
    state.debugDesigner.type = button.dataset.debugType;
    state.debugDesigner.released = false;
    state.debugDesigner.repair = null;
    state.debugDesigner.note = "";
    state.debugDesigner.reportFiled = false;
    save();
    renderActivity();
  }));
  document.querySelectorAll("[data-debug-scenario]").forEach(button => button.addEventListener("click", () => {
    state.debugDesigner.scenario = button.dataset.debugScenario;
    state.debugDesigner.released = false;
    state.debugDesigner.repair = null;
    state.debugDesigner.note = "";
    state.debugDesigner.reportFiled = false;
    save();
    renderActivity();
  }));
  document.querySelector("[data-release-bug]")?.addEventListener("click", () => {
    state.debugDesigner.released = true;
    state.debugDesigner.repair = null;
    state.debugDesigner.note = "";
    state.debugDesigner.reportFiled = false;
    save();
    renderActivity();
  });
  document.querySelectorAll("[data-debug-repair]").forEach(button => button.addEventListener("click", () => {
    state.debugDesigner.repair = Number(button.dataset.debugRepair);
    state.debugDesigner.note = "";
    state.debugDesigner.reportFiled = false;
    save();
    renderActivity();
  }));
  document.querySelector("[data-debug-note]")?.addEventListener("input", event => {
    state.debugDesigner.note = event.target.value;
    state.debugDesigner.reportFiled = false;
    save();
    refreshDebugReportDraft();
  });
  document.querySelector("[data-file-report]")?.addEventListener("click", () => {
    if (state.debugDesigner.note.trim().length < 8) return;
    state.debugDesigner.reportFiled = true;
    save();
    renderActivity();
  });
  document.querySelectorAll("[data-pattern-option]").forEach(button => button.addEventListener("click", () => {
    const challenge = patternChallenges()[state.level3.patternRound];
    const choice = challenge.choices[Number(button.dataset.patternOption)];
    state.level3.patternSelection = choice.map((_, index) => index);
    state.level3.patternSolved = false;
    feedback.className = "feedback hidden";
    save();
    renderActivity();
  }));
  document.querySelector("[data-watch-pattern]")?.addEventListener("click", () => {
    state.level3.patternRun = true;
    renderActivity();
  });
  document.querySelector("[data-check-pattern]")?.addEventListener("click", () => checkPatternFinder(currentMission()));
  document.querySelectorAll("[data-loop-count]").forEach(button => button.addEventListener("click", () => {
    state.level3.loopCount = Number(button.dataset.loopCount);
    state.level3.loopPrediction = "";
    state.level3.loopHasRun = false;
    feedback.className = "feedback hidden";
    save();
    renderActivity();
  }));
  document.querySelectorAll("[data-loop-command]").forEach(button => button.addEventListener("click", () => {
    if (state.level3.loopCommands.length < 3) state.level3.loopCommands.push(button.dataset.loopCommand);
    state.level3.loopPrediction = "";
    state.level3.loopHasRun = false;
    feedback.className = "feedback hidden";
    save();
    renderActivity();
  }));
  document.querySelectorAll("[data-remove-loop-command]").forEach(button => button.addEventListener("click", () => {
    state.level3.loopCommands.splice(Number(button.dataset.removeLoopCommand), 1);
    state.level3.loopPrediction = "";
    state.level3.loopHasRun = false;
    feedback.className = "feedback hidden";
    save();
    renderActivity();
  }));
  document.querySelectorAll("[data-loop-prediction]").forEach(button => button.addEventListener("click", () => {
    state.level3.loopPrediction = button.dataset.loopPrediction;
    state.level3.loopHasRun = false;
    feedback.className = "feedback hidden";
    save();
    renderActivity();
  }));
  document.querySelector("[data-run-loop]")?.addEventListener("click", () => {
    if (!state.level3.loopPrediction) return;
    state.level3.loopHasRun = true;
    save();
    renderActivity();
  });
  document.querySelector("[data-check-loop]")?.addEventListener("click", () => checkLoopBuilder(currentMission()));
  document.querySelector("[data-runaway-action]")?.addEventListener("click", runRunawayLoop);
  document.querySelectorAll("[data-runaway-reason]").forEach(button => button.addEventListener("click", () => {
    state.level3.runawayReason = button.dataset.runawayReason;
    feedback.className = "feedback hidden";
    save();
    renderActivity();
  }));
  document.querySelector("[data-begin-repair]")?.addEventListener("click", () => {
    if (state.level3.runawayReason !== "FOREVER") {
      return showFeedback("Look at the loop header", "The first line says REPEAT FOREVER. Which answer explains why the machine cannot stop by itself?", false);
    }
    state.level3.repairStarted = true;
    save();
    feedback.className = "feedback hidden";
    renderActivity();
  });
  document.querySelectorAll("[data-repair-count]").forEach(button => button.addEventListener("click", () => {
    state.level3.repairCount = button.dataset.repairCount === "FOREVER" ? "FOREVER" : Number(button.dataset.repairCount);
    state.level3.repairRun = false;
    feedback.className = "feedback hidden";
    save();
    renderActivity();
  }));
  document.querySelector("[data-run-repair]")?.addEventListener("click", () => {
    state.level3.repairRun = true;
    save();
    renderActivity();
  });
  document.querySelector("[data-open-studio]")?.addEventListener("click", () => {
    state.level3.studioStage = 1;
    save();
    feedback.className = "feedback hidden";
    renderActivity();
  });
  document.querySelector("[data-creation-title]")?.addEventListener("input", event => {
    state.level3.creation.title = event.target.value;
    save();
  });
  document.querySelector("[data-creation-title]")?.addEventListener("change", renderActivity);
  document.querySelectorAll("[data-creation-count]").forEach(button => button.addEventListener("click", () => {
    state.level3.creation.count = Number(button.dataset.creationCount);
    state.level3.creation.hasRun = false;
    state.level3.creation.safetyCheck = "";
    save();
    renderActivity();
  }));
  document.querySelectorAll("[data-creation-command]").forEach(button => button.addEventListener("click", () => {
    if (state.level3.creation.commands.length < 3) state.level3.creation.commands.push(button.dataset.creationCommand);
    state.level3.creation.hasRun = false;
    state.level3.creation.safetyCheck = "";
    save();
    renderActivity();
  }));
  document.querySelectorAll("[data-remove-creation-command]").forEach(button => button.addEventListener("click", () => {
    state.level3.creation.commands.splice(Number(button.dataset.removeCreationCommand), 1);
    state.level3.creation.hasRun = false;
    state.level3.creation.safetyCheck = "";
    save();
    renderActivity();
  }));
  document.querySelector("[data-run-creation]")?.addEventListener("click", () => {
    state.level3.creation.title = document.querySelector("[data-creation-title]")?.value || state.level3.creation.title;
    state.level3.creation.hasRun = true;
    save();
    renderActivity();
  });
  document.querySelectorAll("[data-creation-safety]").forEach(button => button.addEventListener("click", () => {
    state.level3.creation.safetyCheck = button.dataset.creationSafety;
    save();
    renderActivity();
  }));
  document.querySelector("[data-finish-studio]")?.addEventListener("click", () => checkLoopStudio(currentMission()));
  document.querySelectorAll("[data-compass-start]").forEach(button => button.addEventListener("click", () => {
    state.level4.compassStart = button.dataset.compassStart;
    state.answerChecked = false;
    save(); renderActivity();
  }));
  document.querySelectorAll("[data-compass-program]").forEach(button => button.addEventListener("click", () => {
    state.level4.compassProgram = button.dataset.compassProgram;
    state.answerChecked = false;
    save(); renderActivity();
  }));
  document.querySelector("[data-run-compass]")?.addEventListener("click", () => {
    const trial = {
      start: state.level4.compassStart,
      program: state.level4.compassProgram,
      end: compassResult(state.level4.compassStart, state.level4.compassProgram)
    };
    const existing = state.level4.compassTrials.findIndex(item => item.start === trial.start && item.program === trial.program);
    if (existing >= 0) state.level4.compassTrials[existing] = trial;
    else state.level4.compassTrials.push(trial);
    state.answerChecked = false;
    save(); renderActivity();
  });
  document.querySelectorAll("[data-compass-answer]").forEach(button => button.addEventListener("click", () => {
    state.selection = Number(button.dataset.compassAnswer);
    state.answerChecked = false;
    renderActivity();
  }));
  document.querySelectorAll("[data-function-direction]").forEach(button => button.addEventListener("click", () => {
    state.level4.builderDirection = button.dataset.functionDirection;
    state.level4.builderRan = false;
    state.level4.builderResults = [];
    save(); renderActivity();
  }));
  document.querySelectorAll("[data-function-movement]").forEach(button => button.addEventListener("click", () => {
    state.level4.builderMovement = button.dataset.functionMovement;
    state.level4.builderRan = false;
    state.level4.builderResults = [];
    save(); renderActivity();
  }));
  document.querySelectorAll("[data-function-call]").forEach(button => button.addEventListener("click", () => {
    state.level4.builderCall = button.dataset.functionCall;
    state.level4.builderRan = false;
    state.level4.builderResults = [];
    save(); renderActivity();
  }));
  document.querySelectorAll("[data-builder-test-steps]").forEach(button => button.addEventListener("click", () => {
    state.level4.builderTestSteps = Number(button.dataset.builderTestSteps);
    save(); renderActivity();
  }));
  document.querySelector("[data-run-function]")?.addEventListener("click", () => {
    state.level4.builderRan = true;
    if (!state.level4.builderResults.includes(state.level4.builderTestSteps)) state.level4.builderResults.push(state.level4.builderTestSteps);
    save(); renderActivity();
  });
  document.querySelectorAll("[data-route-function]").forEach(button => button.addEventListener("click", () => {
    state.level4.routeFunction = button.dataset.routeFunction;
    save(); renderActivity();
  }));
  document.querySelectorAll("[data-route-steps]").forEach(button => button.addEventListener("click", () => {
    state.level4.routeSteps = Number(button.dataset.routeSteps);
    save(); renderActivity();
  }));
  document.querySelector("[data-add-route-call]")?.addEventListener("click", () => {
    if (state.level4.routeCalls.length < 3) state.level4.routeCalls.push({ name: state.level4.routeFunction, steps: state.level4.routeSteps });
    state.level4.routeRan = false;
    state.level4.routeReason = "";
    save(); renderActivity();
  });
  document.querySelectorAll("[data-remove-route-call]").forEach(button => button.addEventListener("click", () => {
    state.level4.routeCalls.splice(Number(button.dataset.removeRouteCall), 1);
    state.level4.routeRan = false;
    state.level4.routeReason = "";
    save(); renderActivity();
  }));
  document.querySelectorAll("[data-route-reason]").forEach(button => button.addEventListener("click", () => {
    state.level4.routeReason = button.dataset.routeReason;
    feedback.className = "feedback hidden";
    save(); renderActivity();
  }));
  document.querySelector("[data-run-function-route]")?.addEventListener("click", runFunctionRoute);
}

async function runRunawayLoop() {
  if (runawayControl.active) {
    runawayControl.stop = true;
    state.level3.runawayManualStop = true;
    return;
  }
  runawayControl.active = true;
  runawayControl.stop = false;
  state.level3.runawayStopped = false;
  state.level3.runawayManualStop = false;
  state.level3.repairStarted = false;
  renderActivity();
  const button = document.querySelector("[data-runaway-action]");
  const count = document.querySelector("#cookie-count");
  const pile = document.querySelector("#cookie-pile");
  button.textContent = "■ Stop the machine!";
  let cookies = 0;
  while (!runawayControl.stop && cookies < 14) {
    await pause(260);
    cookies += 1;
    count.textContent = cookies;
    pile.textContent += "🍪";
  }
  runawayControl.active = false;
  state.level3.runawayStopped = true;
  state.level3.runawayCookies = cookies;
  save();
  renderActivity();
  showFeedback("Machine stopped!", cookies >= 14
    ? "The safety system stopped the loop. A real forever loop needs a way to stop."
    : `You stopped the machine at ${cookies} cookies. Now repair it so it stops by itself.`, false);
}

async function runRobot() {
  if (!state.commands.length || !state.robotPrediction) return;
  const runButton = document.querySelector("[data-run-robot]");
  state.robotHasRun = true;
  const commandButtons = document.querySelectorAll(".command-palette button");
  runButton.disabled = true;
  runButton.textContent = "Byte is moving…";
  commandButtons.forEach(button => button.disabled = true);
  feedback.className = "feedback hidden";

  let row = 2;
  let column = 0;
  let direction = "right";
  const turns = {
    left: { up: "left", left: "down", down: "right", right: "up" },
    right: { up: "right", right: "down", down: "left", left: "up" }
  };
  const movement = { up: [-1, 0], right: [0, 1], down: [1, 0], left: [0, -1] };

  paintRobot(row, column, direction);
  await pause(350);

  for (let index = 0; index < state.commands.length; index++) {
    const command = state.commands[index];
    highlightCommand(index);
    if (command === "TURN LEFT") direction = turns.left[direction];
    if (command === "TURN RIGHT") direction = turns.right[direction];
    if (command === "MOVE 1") {
      const [rowChange, columnChange] = movement[direction];
      const nextRow = row + rowChange;
      const nextColumn = column + columnChange;
      const outside = nextRow < 0 || nextRow > 2 || nextColumn < 0 || nextColumn > 2;
      const hitsRock = nextRow === 1 && nextColumn === 1;
      if (outside || hitsRock) {
        const result = outside ? "OUTSIDE" : "ROCK";
        paintRobot(row, column, direction, true);
        clearCommandHighlights();
        resetRobotControls();
        showFeedback("Bump! Route stopped", outside
          ? `Command ${index + 1} would send Byte outside the garden. ${predictionEvidence(result)}`
          : `Command ${index + 1} sends Byte into the rock. ${predictionEvidence(result)}`, false);
        return;
      }
      row = nextRow;
      column = nextColumn;
    }
    paintRobot(row, column, direction);
    await pause(600);
  }

  clearCommandHighlights();
  resetRobotControls();
  const reachedBattery = row === 0 && column === 2;
  const result = reachedBattery ? "BATTERY" : "SAFE";
  showFeedback(reachedBattery ? "Byte reached the battery! ⚡" : "Byte stopped safely",
    reachedBattery
      ? `Your route works! ${predictionEvidence(result)} When you are ready, use “Check my thinking” to finish the mission.`
      : `Byte finished on row ${row + 1}, column ${column + 1}. ${predictionEvidence(result)} Adjust the commands and try again.`, reachedBattery);
}

function predictionEvidence(result) {
  const labels = { BATTERY: "the battery", ROCK: "the rock", OUTSIDE: "outside the garden", SAFE: "another safe square" };
  if (state.robotPrediction === result) return "Your prediction matched the test. ✓";
  return `You predicted ${labels[state.robotPrediction]}, and the test showed ${labels[result]}. That difference is useful evidence.`;
}

function paintRobot(row, column, direction, bumped = false) {
  document.querySelectorAll("[data-grid-cell]").forEach(cell => {
    const type = cell.dataset.cellType;
    cell.innerHTML = type === "battery" ? "🔋" : type === "rock" ? "🪨" : "·";
    cell.classList.remove("robot-here", "bumped");
  });
  const index = row * 3 + column;
  const cell = document.querySelector(`[data-grid-cell="${index}"]`);
  cell.innerHTML = robotToken(direction);
  cell.classList.add("robot-here");
  if (bumped) cell.classList.add("bumped");
}

function highlightCommand(index) {
  clearCommandHighlights();
  document.querySelectorAll(".command-tray span")[index]?.classList.add("running");
}

function clearCommandHighlights() {
  document.querySelectorAll(".command-tray span").forEach(item => item.classList.remove("running"));
}

function resetRobotControls() {
  const runButton = document.querySelector("[data-run-robot]");
  if (runButton) {
    runButton.disabled = !state.commands.length || !state.robotPrediction;
    runButton.textContent = state.robotHasRun ? "↻ Replay route" : "▶ Test my prediction";
  }
  document.querySelectorAll(".command-palette button").forEach(button => button.disabled = false);
}

function pause(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function moveItem(index, change) {
  const target = index + change;
  if (target < 0 || target >= state.sequence.length) return;
  [state.sequence[index], state.sequence[target]] = [state.sequence[target], state.sequence[index]];
  state.sequenceDemoRun = false;
  renderActivity();
}

function checkAnswer() {
  const mission = currentMission();
  if (mission.type === "aiVerifier") return checkAiVerifier(mission);
  if (mission.type === "patternFinder") return checkPatternFinder(mission);
  if (mission.type === "loopBuilder") return checkLoopBuilder(mission);
  if (mission.type === "loopStudio") return checkLoopStudio(mission);
  if (mission.type === "compassExperiment") return checkCompassExperiment(mission);
  if (mission.type === "functionBuilder") return checkFunctionBuilder(mission);
  if (mission.type === "functionRoute") return checkFunctionRoute(mission);
  let correct = false;
  let unanswered = false;
  if (mission.type === "sequence") {
    if (!state.sequenceDemoRun) return showFeedback("Test the instructions first", "Press “Test these instructions” to see what Byte does before checking your thinking.", false);
    correct = JSON.stringify(state.sequence) === JSON.stringify(mission.answer);
  }
  if (mission.type === "choice" || mission.type === "insert") {
    unanswered = state.selection === null;
    correct = state.selection === mission.answer;
    if (mission.testResults && state.selection !== null && !state.repairPrediction) {
      return showFeedback("Predict the result", "Choose what you think this one change will do. Then test the prediction instead of guessing.", false);
    }
    if (mission.testResults && state.selection !== null && !state.repairTested) {
      return showFeedback("Test your idea first", "Coders do not stop at a prediction. Press “Test this change,” inspect the result, and then check your thinking.", false);
    }
    if (!unanswered) {
      state.answerChecked = true;
      renderActivity();
    }
  }
  if (mission.type === "robot") {
    unanswered = state.commands.length === 0 || !state.robotPrediction;
    correct = JSON.stringify(state.commands) === JSON.stringify(mission.answer);
    if (state.commands.length && !state.robotPrediction) {
      return showFeedback("Make a prediction first", "Choose where you think Byte will finish, then run the route to collect evidence.", false);
    }
    if (state.commands.length && state.robotPrediction && !state.robotHasRun) {
      return showFeedback("Test your prediction", "Press “Test my prediction” and watch every command before checking your thinking.", false);
    }
  }
  if (mission.type === "designer") {
    state.designer.goal = document.querySelector("#designer-goal")?.value || "";
    state.designer.steps = [...document.querySelectorAll("[data-designer-step]")].map(input => input.value);
    save();
    const filled = state.designer.steps.filter(step => step.trim().length >= 4);
    const structureReady = state.designer.goal.trim().length >= 3 && filled.length >= 4;
    const reviewComplete = state.designer.checks.actions && state.designer.checks.noGuess;
    unanswered = !state.designer.goal.trim() && filled.length === 0;
    correct = structureReady && reviewComplete && state.designer.tested;
    if (!state.designer.goal.trim() && filled.length >= 4) {
      return showFeedback("Your steps are ready", "Nice work on the sequence. Add a short task name at the top—such as “Feed the cat”—then check again.", false);
    }
    if (state.designer.goal.trim().length >= 3 && filled.length < 4) {
      return showFeedback("Add a few more steps", `Your task has a name. Now add ${4 - filled.length} more clear ${4 - filled.length === 1 ? "step" : "steps"}.`, false);
    }
    if (structureReady && !reviewComplete) {
      return showFeedback("Complete your coder check", "Read each instruction and check both review promises: every step starts with an action, and Byte never has to guess.", false);
    }
    if (structureReady && reviewComplete && !state.designer.tested) {
      return showFeedback("Test the complete order", "Press “Let Byte read it back,” then inspect the full plan from beginning to end.", false);
    }
  }
  if (mission.type === "bugSort") {
    unanswered = state.bugAnswers.some(answer => answer === null);
    correct = JSON.stringify(state.bugAnswers) === JSON.stringify(mission.answer);
    if (!unanswered) {
      const firstReview = !state.bugChecked;
      state.bugChecked = true;
      renderActivity();
      if (firstReview && correct) return showFeedback("Case notes unlocked!", "Review why each diagnosis matches the evidence. Then press “Finish the museum” when you are ready.", true);
    }
  }
  if (mission.type === "debugDesigner") {
    state.debugDesigner.note = document.querySelector("[data-debug-note]")?.value || state.debugDesigner.note || "";
    save();
    const scenario = bugLabScenarios().find(item => item.id === state.debugDesigner.scenario);
    const labCase = scenario && state.debugDesigner.type ? bugLabCase(scenario, state.debugDesigner.type) : null;
    unanswered = !state.debugDesigner.scenario && !state.debugDesigner.type;
    correct = Boolean(
      state.debugDesigner.released &&
      labCase &&
      state.debugDesigner.repair === labCase.answer &&
      state.debugDesigner.note.trim().length >= 8 &&
      state.debugDesigner.reportFiled
    );
    const missing = [
      !state.debugDesigner.scenario ? "an adventure" : "",
      !state.debugDesigner.type ? "a bug power" : "",
      state.debugDesigner.scenario && state.debugDesigner.type && !state.debugDesigner.released ? "a released bug" : "",
      state.debugDesigner.released && state.debugDesigner.repair === null ? "a repair choice" : "",
      state.debugDesigner.released && state.debugDesigner.note.trim().length < 8 ? "a detective explanation" : "",
      state.debugDesigner.released && state.debugDesigner.repair !== null && state.debugDesigner.note.trim().length >= 8 && !state.debugDesigner.reportFiled ? "a filed detective report" : ""
    ].filter(Boolean);
    if (missing.length) return showFeedback("Finish the experiment", `Add ${naturalList(missing)} before checking your challenge.`, false);
    if (correct) renderActivity();
  }
  if (unanswered) return showFeedback("Try something first", "Make a prediction or add a step—even if you are not sure.", false);
  if (!correct) return showFeedback("Good experiment",
    mission.type === "designer" ? "Give the robot a task and at least four clear steps. Start each step with an action."
    : mission.type === "debugDesigner" ? "That repair does not match the evidence. Compare the working and buggy programs, then change one thing."
    : mission.type === "bugSort" ? "At least one display has a different bug type. Compare each test result with what was expected."
    : "That result gives us a clue. Check the order, use the hint, and try one change.", false);
  completeMission(mission);
}

function checkAiVerifier(mission) {
  const data = state.starter;
  if (!data.aiRan) return showFeedback("Run the AI program first", "Testing gives you evidence you cannot get by guessing.", false);
  if (!data.aiIssue) return showFeedback("Inspect the output", "Compare the actual words and repeat count with the goal, then choose what needs to change.", false);
  if (data.aiIssue !== "SPELLING") return showFeedback("Check both parts of the goal", "The program already repeats 3 times. Look closely at the words in each output bubble.", false);
  if (!data.aiRepair) return showFeedback("Choose one repair", "Change only the command that caused the difference between the goal and actual output.", false);
  if (data.aiRepair !== "SPELLING") return showFeedback("That repair changes the wrong thing", "Keep the repeat count of 3 and repair the misspelled launch message.", false);
  if (!data.aiFixedRun) return showFeedback("Retest your repair", "Run the repaired program to prove that both the words and repeat count now match.", false);
  completeMission(mission);
}

function checkPatternFinder(mission) {
  const data = state.level3;
  const challenge = patternChallenges()[data.patternRound];
  const correctIndexes = challenge.unit.map((_, index) => index);
  const correct = JSON.stringify(data.patternSelection) === JSON.stringify(correctIndexes);
  if (data.patternSolved) {
    if (data.patternRound === patternChallenges().length - 1) return completeMission(mission);
    data.patternRound += 1;
    data.patternSelection = [];
    data.patternRun = false;
    data.patternSolved = false;
    save();
    feedback.className = "feedback hidden";
    renderActivity();
    return;
  }
  if (!data.patternRun) return showFeedback("Watch the sequence first", "Run the full sequence so you can see where the same group begins again.", false);
  if (!data.patternSelection.length) return showFeedback("Select a pattern first", "Choose the first group of commands that repeats.", false);
  if (!correct) return showFeedback("That group does not rebuild the sequence", "Look at “Your choice repeated” and compare it with Byte’s full sequence. Choose the smallest group that makes an exact match.", false);
  data.patternSolved = true;
  save();
  renderActivity();
  showFeedback("You found the loop ingredients!", "The repeating unit becomes the loop body, and the number of copies becomes the repeat count. Review the shorter code below.", true);
}

function checkLoopBuilder(mission) {
  const data = state.level3;
  if (!data.loopPrediction) return showFeedback("Predict before running", "Choose whether the loop will match, stop too soon, repeat too much, or use different actions.", false);
  if (!data.loopHasRun) return showFeedback("Run the loop first", "Coders test before they submit. Press “Run my loop” and inspect the result.", false);
  if (data.loopStage === 0) {
    const correct = data.loopCount === 3 && JSON.stringify(data.loopCommands) === JSON.stringify(["CLAP", "JUMP"]);
    if (!correct) return showFeedback("The dance does not match yet", "The long program repeats CLAP + JUMP three times. Adjust the loop and replay it.", false);
    data.loopStage = 1;
    data.loopCount = 5;
    data.loopCommands = ["PAINT", "MOVE"];
    data.loopPrediction = "";
    data.loopHasRun = false;
    save();
    feedback.className = "feedback hidden";
    renderActivity();
    return;
  }
  if (data.loopCount !== 4) return showFeedback("The AI count needs a repair", "There are 4 fence panels. Change the repeat count so Byte stops after the fourth panel.", false);
  completeMission(mission);
}

function checkLoopStudio(mission) {
  const data = state.level3;
  if (data.studioStage === 0) {
    if (!data.runawayStopped) return showFeedback("Start and stop the machine", "Run the forever loop, then use the stop button when the cookies pile up.", false);
    if (!data.repairRun) return showFeedback("Test the repaired loop", "Choose a repeat count and run it to see how many cookies Byte makes.", false);
    if (data.repairCount !== 6) return showFeedback("The cookie count does not match", "Six teammates need exactly six cookies. Change the count and test again.", false);
    data.studioStage = 1;
    save();
    renderActivity();
    return showFeedback("Runaway repaired! ✓", "The machine now stops by itself. Create an original loop animation to finish.", true);
  }
  const creation = data.creation;
  creation.title = document.querySelector("[data-creation-title]")?.value || creation.title;
  save();
  if (creation.title.trim().length < 3) return showFeedback("Name your animation", "Add a short title so your creation has a name in My Badges.", false);
  if (creation.commands.length < 2) return showFeedback("Add another action", "Your loop needs at least two actions inside it.", false);
  if (!creation.hasRun) return showFeedback("Run your animation", "Test the loop before finishing the mission.", false);
  if (creation.safetyCheck !== "COUNT") return showFeedback("Explain the stop", "Choose why your loop is safe from running forever. Look at its REPEAT count for the clue.", false);
  completeMission(mission);
}

function checkFunctionBuilder(mission) {
  const data = state.level4;
  if (!data.builderDirection || !data.builderMovement || !data.builderCall) {
    return showFeedback("Finish all three choices", "Choose a direction, a reusable move, and a function call before checking.", false);
  }
  if ((data.builderResults || []).length < 2) return showFeedback("Try another input", "Run the function with two different step numbers. Keep the function the same and change only its input.", false);
  const correct = data.builderDirection === "NORTH" && data.builderMovement === "PARAM" && data.builderCall === "CORRECT";
  if (!correct) return showFeedback("Your test found a clue", "Make the function name, direction, parameter, and call agree. Change one part and test again.", false);
  completeMission(mission);
}

function checkCompassExperiment(mission) {
  const data = state.level4;
  const testedPrograms = new Set(data.compassTrials.map(trial => trial.program));
  const testedStarts = new Set(data.compassTrials.map(trial => trial.start));
  if (testedPrograms.size < 2 || testedStarts.size < 2) {
    return showFeedback("Collect more evidence", "Run Program A and Program B, and use at least two different starting directions.", false);
  }
  if (state.selection === null) return showFeedback("Choose your conclusion", "Use your experiment evidence to choose Program A or Program B.", false);
  state.answerChecked = true;
  renderActivity();
  if (state.selection !== mission.answer) return showFeedback("Check every trial", "Program A reaches north from some starting directions, but not all of them. Which command names north directly?", false);
  completeMission(mission);
}

function checkFunctionRoute(mission) {
  const data = state.level4;
  if (!data.routeCalls.length) return showFeedback("Build a route first", "Add function calls to your program, then run it.", false);
  if (!data.routeRan) return showFeedback("Run the route first", "Coders test before they submit. Press “Run my route” and inspect the grid.", false);
  const correctProgram = data.routeCalls.length === 3;
  const reached = data.routeResult?.safe && data.routeResult?.collected && data.routeResult.row === 0 && data.routeResult.column === 5;
  if (!correctProgram || !reached) return showFeedback("The beacon is still waiting", "Use exactly three calls. Collect the star, avoid the rock, and finish at the beacon.", false);
  if (!data.routeReason) return showFeedback("One final reflection", "Choose why functions were useful in your successful route.", false);
  if (data.routeReason !== "REUSE") return showFeedback("Look at your three calls", "Functions did not change Byte's speed or run forever. They gave reusable jobs clear names and changeable inputs.", false);
  completeMission(mission);
}

function naturalList(items) {
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

function updateHintButton() {
  const button = document.querySelector("#hint-button");
  const labels = ["Need a hint?", "Another hint", "Reveal solution", "Solution revealed"];
  button.textContent = labels[state.hintStep];
  button.disabled = state.hintStep >= 3;
}

function revealHelp() {
  const mission = currentMission();
  state.hintStep += 1;
  updateHintButton();
  if (state.hintStep === 1) {
    showFeedback("Clue 1 of 3", mission.hints?.[0] || mission.hint, false);
    return;
  }
  if (state.hintStep === 2) {
    showFeedback("Clue 2 of 3", mission.hints?.[1] || strongerHint(mission), false);
    return;
  }
  showFeedback("Solution revealed", solutionFor(mission), false);
}

function strongerHint(mission) {
  if (mission.type === "choice") return "Cross out answers that do not match the expected result. Then compare the remaining answer with the program.";
  if (mission.type === "aiVerifier") return "The program repeats 3 times already. Compare “Blast of!” with the goal “Blast off!” one letter at a time.";
  if (mission.type === "sequence" || mission.type === "insert") return "Work backward from the final result. What must happen immediately before it?";
  if (mission.type === "designer") return "Use the examples inside the empty boxes as a starting pattern, then change the details.";
  if (mission.type === "debugDesigner") return "After releasing the bug, compare the working and buggy programs line by line. Repair only the difference.";
  if (mission.type === "bugSort") return "One display repeats, one leaves something out, and one contains a spelling mistake. Use each label once.";
  if (mission.type === "patternFinder") return "Start with the first command. Select only the smallest group that appears again in the same order.";
  if (mission.type === "loopBuilder") return "The dance uses CLAP + JUMP three times. The fence has four panels, not five.";
  if (mission.type === "loopStudio") return "Stop the forever loop, repair it with 6 repeats, then create a named loop with at least two actions.";
  if (mission.type === "compassExperiment") return "Try Program A from EAST and SOUTH. Its ending direction changes. Program B ends at NORTH from both starts.";
  if (mission.type === "functionBuilder") return "Match the name GO_NORTH with FACE NORTH. Use MOVE steps so the parameter stays changeable, then call GO_NORTH(4).";
  if (mission.type === "functionRoute") return "Line up with the star first: GO_EAST(1). Then travel north 5 and east 4 to reach the beacon.";
  return "Trace the program one command at a time and keep track of what changes.";
}

function solutionFor(mission) {
  if (mission.solution) return mission.solution;
  if (mission.type === "sequence") return mission.answer.map((step, index) => `${index + 1}. ${step}`).join(" ");
  if (mission.type === "choice") return `Choose ${String.fromCharCode(65 + mission.answer)}: ${mission.choices[mission.answer]}`;
  if (mission.type === "insert") return `Place “${mission.missing}” after step ${mission.answer}.`;
  if (mission.type === "bugSort") return mission.cases.map((item, index) => `${item.name}: ${mission.labels[mission.answer[index]]}`).join(" · ");
  if (mission.type === "designer") return "Example: Feed the cat — 1. Pick up the bowl. 2. Walk to the cupboard. 3. Pour food into the bowl. 4. Place the bowl beside the cat.";
  if (mission.type === "debugDesigner") return "Choose Moon Delivery and Repeated Step. Release the bug, remove the extra first command, then explain that the program now moves exactly 2 spaces.";
  if (mission.type === "patternFinder") return "Select the first complete repeating unit in each sequence: CLAP + JUMP; MOVE + MOVE + TURN; then PAINT + MOVE.";
  if (mission.type === "loopBuilder") return "Dance loop: repeat CLAP + JUMP 3 times. Fence loop: repeat PAINT + MOVE 4 times.";
  if (mission.type === "loopStudio") return "Stop the cookie machine, use REPEAT 6 TIMES, then create and run a named loop containing at least two actions.";
  if (mission.type === "compassExperiment") return "Run both programs from two starting directions, then choose Program B: FACE NORTH names the same direction every time.";
  return mission.hint;
}

function completeMission(mission) {
  const wasAlreadyComplete = state.completed.includes(mission.id);
  if (!wasAlreadyComplete) state.completed.push(mission.id);
  save(); renderProgress(); renderMap();
  const next = recommendedNextMission(mission);
  const levelFinished = !wasAlreadyComplete && levels[mission.levelIndex].missions.every(m => state.completed.includes(m.id));
  const title = wasAlreadyComplete ? "Mission reviewed! ✓"
    : levelFinished ? `${levels[mission.levelIndex].title} complete! ★` : "Mission complete! ✓";
  const message = wasAlreadyComplete ? `${mission.success} Your saved course progress is unchanged.`
    : levelFinished && mission.levelIndex === 0
    ? "Your three coder habits unlocked Level 1: Clear Instructions."
    : levelFinished ? levels[mission.levelIndex].completion
    : next ? `${mission.success} Next up: ${sentenceEnd(next.title)}`
    : mission.success;
  showFeedback(title, message, true, next?.id || null);
  appendLabPractice(mission.id);
  if (levelFinished) {
    celebrateLevel(levels[mission.levelIndex], next);
  }
}

function appendLabPractice(missionId) {
  const practices = {
    "ai-said-what": { title: "Fix the launch message", code: "SAY Blast off!\nSAY Blast off!\nSAY Blast off!" },
    "loop-lab": { title: "Build a repeat trail", code: labExamples.repeat },
    "compass-commands": { title: "Try a compass route", code: labExamples.compass },
    "build-navigation-function": { title: "Run your navigation functions", code: labExamples.function }
  };
  let practice = practices[missionId];
  if (missionId === "build-navigation-function" && !isLabFeatureUnlocked("function")) return;
  if (["compass-commands", "build-navigation-function"].includes(missionId) && isLabFeatureUnlocked("function")) {
    practice = practices["build-navigation-function"];
  }
  if (!practice || !isLabUnlocked()) return;
  feedback.insertAdjacentHTML("beforeend", `<button class="lab-practice-button" data-lab-practice><span aria-hidden="true">&lt;/&gt;</span><span><small>New Code Lab practice</small><strong>${practice.title}</strong></span></button>`);
  feedback.querySelector("[data-lab-practice]")?.addEventListener("click", () => {
    state.labCode = practice.code;
    save();
    openCodeLab();
  });
}

function sentenceEnd(text) {
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function renderLevelReflection(level, courseFinished = false) {
  const savedChoice = state.reflections[level.id];
  const container = document.querySelector("#celebration-reflection");
  container.innerHTML = `${courseFinished ? `<section class="course-mastery"><p class="activity-label">Your complete coder toolkit</p><div>
    <span><b>1</b><strong>Plan clearly</strong><small>Build instructions in order</small></span>
    <span><b>2</b><strong>Predict and test</strong><small>Use results as evidence</small></span>
    <span><b>3</b><strong>Debug carefully</strong><small>Change one thing</small></span>
    <span><b>4</b><strong>Control loops</strong><small>Repeat and stop safely</small></span>
    <span><b>5</b><strong>Create functions</strong><small>Name and reuse jobs</small></span>
  </div></section>` : ""}<section class="level-reflection">
    <p class="activity-label">Quick reflection</p>
    <h4>${level.reflection.question}</h4>
    <div>${level.reflection.choices.map((choice, index) => `
      <button data-reflection="${index}" class="${savedChoice === index ? "selected" : ""}">${choice}</button>`).join("")}</div>
    <small>${savedChoice !== undefined ? "Reflection saved ✓" : "There is no wrong answer."}</small>
  </section>`;
  container.querySelectorAll("[data-reflection]").forEach(button => button.addEventListener("click", () => {
    state.reflections[level.id] = Number(button.dataset.reflection);
    save();
    container.querySelectorAll("[data-reflection]").forEach(item => item.classList.toggle("selected", item === button));
    container.querySelector(".level-reflection small").textContent = "Reflection saved ✓";
  }));
}

function celebrateLevel(level, next) {
  const celebration = document.querySelector("#celebration");
  const courseFinished = state.completed.length === missions.length;
  const storyMoments = {
    starter: "Byte’s compass lights up. The gate to Algorithm Valley swings open!",
    "level-1": "Your clear instructions rebuild the bridge to Debugging City!",
    "level-2": "The last bug scurries away, revealing the path to Pattern Peak!",
    "level-3": "Every loop is under control. A compass portal opens to Function Fjord!",
    "level-4": "Your reusable commands guide Byte to the final beacon. Code Quest is complete!"
  };
  document.querySelector("#celebration-icon").textContent = courseFinished ? "🏆" : level.badge.icon;
  document.querySelector("#celebration-kicker").textContent = courseFinished ? "The final portal opens" : "Adventure update";
  document.querySelector("#celebration-title").textContent = courseFinished ? "Code Quest Champion!" : level.badge.name;
  document.querySelector("#celebration-copy").textContent = courseFinished
    ? `${storyMoments[level.id]} You completed all ${missions.length} missions. Byte is proud of you!`
    : `${storyMoments[level.id]} ${level.completion || "You unlocked a new set of coding skills."}`;
  document.querySelector("#certificate-button").classList.toggle("hidden", !courseFinished);
  renderLevelReflection(level, courseFinished);
  const continueButton = document.querySelector("#close-celebration");
  continueButton.dataset.nextMission = next?.id || "";
  continueButton.textContent = courseFinished ? "Return to adventure map" : "Continue adventure →";
  celebration.classList.remove("hidden");
  continueButton.focus();
}

function showFeedback(title, message, success, nextMissionId = null) {
  const reaction = success
    ? { face: "^‿^", label: "Byte cheers", line: "You did it!" }
    : title.toLowerCase().includes("hint") || title.toLowerCase().includes("clue") || title.toLowerCase().includes("solution")
    ? { face: "•‿•", label: "Byte helps", line: "Let’s look for a clue." }
    : { face: "•︵•", label: "Byte thinks", line: "Good try—now we know more." };
  feedback.className = `feedback ${success ? "success" : ""}`;
  feedback.innerHTML = `<div class="feedback-byte" aria-label="${reaction.label}"><span aria-hidden="true">${reaction.face}</span><strong>${reaction.line}</strong></div><div class="feedback-copy"><h4>${title}</h4><p>${message}</p>${nextMissionId ? `<button class="primary" id="next-mission">Continue →</button>` : ""}</div>`;
  feedback.focus();
  playFeedbackSound(success);
  document.querySelector("#next-mission")?.addEventListener("click", () => {
    openMission(nextMissionId);
  });
}

const labStarter = "SAY Hello, explorer!\nMOVE 2\nTURN LEFT\nMOVE 1\nPAINT MINT";
const labExamples = {
  hello: "SAY Hello, explorer!\nMOVE 2\nSAY I wrote real commands!",
  path: "MOVE 2\nTURN LEFT\nMOVE 2\nTURN LEFT\nMOVE 2\nTURN LEFT\nMOVE 2",
  paint: "PAINT PURPLE\nMOVE 1\nPAINT MINT\nMOVE 1\nPAINT YELLOW\nMOVE 1\nPAINT CORAL\nMOVE 1\nPAINT BLUE\nTURN RIGHT\nMOVE 1\nPAINT GREEN\nMOVE 1\nPAINT ORANGE\nMOVE 1\nPAINT PINK",
  repeat: "REPEAT 4 TIMES\n    PAINT BLUE\n    MOVE 1\nEND",
  compass: "FACE NORTH\nMOVE 4\nFACE EAST\nMOVE 5",
  function: "FUNCTION GO_NORTH(steps)\n    FACE NORTH\n    MOVE steps\nEND\nFUNCTION GO_EAST(steps)\n    FACE EAST\n    MOVE steps\nEND\nGO_NORTH(4)\nGO_EAST(5)"
};
const labCommandHelp = {
  MOVE: { title: "MOVE", copy: "Moves Byte forward in the direction Byte is facing.", example: "MOVE 10", tip: "Use a number from 1 to 10. Byte stops safely if it reaches an edge." },
  TURN: { title: "TURN", copy: "Changes the direction Byte is facing without changing squares.", example: "TURN RIGHT", tip: "Choose LEFT or RIGHT." },
  SAY: { title: "SAY", copy: "Shows a speech bubble with your message.", example: "SAY I made it!", tip: "Write any short message after SAY." },
  PAINT: { title: "PAINT", copy: "Colors the square where Byte is standing.", example: "PAINT BLUE", tip: "Choose PURPLE, MINT, YELLOW, CORAL, BLUE, GREEN, ORANGE, or PINK." },
  REPEAT: { title: "REPEAT", copy: "Runs a group of commands more than once.", example: "REPEAT 4 TIMES\n    MOVE 1\nEND", tip: "Use a number from 2 to 10 and close the group with END." },
  FACE: { title: "FACE", copy: "Points Byte in an exact compass direction.", example: "FACE NORTH", tip: "Choose NORTH, EAST, SOUTH, or WEST." },
  FUNCTION: { title: "FUNCTION", copy: "Gives a reusable group of commands its own name.", example: "FUNCTION GO_NORTH(steps)\n    FACE NORTH\n    MOVE steps\nEND\nGO_NORTH(4)", tip: "Define the function once, then call it with a number from 1 to 10." }
};
let labRunning = false;
let labRobot = { row: 5, column: 2, direction: 0, painted: {} };
const labDirections = [
  { name: "right", arrow: "→", row: 0, column: 1 },
  { name: "down", arrow: "↓", row: 1, column: 0 },
  { name: "left", arrow: "←", row: 0, column: -1 },
  { name: "up", arrow: "↑", row: -1, column: 0 }
];

function updateLabGutter() {
  const count = Math.max(1, document.querySelector("#lab-editor").value.split("\n").length);
  document.querySelector("#lab-gutter").innerHTML = Array.from({ length: count }, (_, index) => `<span>${index + 1}</span>`).join("");
}

function renderLabGrid() {
  const cells = Array.from({ length: 100 }, (_, index) => {
    const row = Math.floor(index / 10);
    const column = index % 10;
    const robotHere = row === labRobot.row && column === labRobot.column;
    const paint = labRobot.painted[`${row}-${column}`] || "";
    return `<div class="lab-cell ${paint ? `painted ${paint.toLowerCase()}` : ""} ${robotHere ? "robot-here" : ""}">
      ${robotHere ? `<span class="lab-robot" aria-label="Byte facing ${labDirections[labRobot.direction].name}">🤖<b>${labDirections[labRobot.direction].arrow}</b></span>` : ""}
    </div>`;
  });
  document.querySelector("#lab-grid").innerHTML = cells.join("");
  document.querySelector("#lab-direction").textContent = `Facing ${labDirections[labRobot.direction].name}`;
}

function parseSimpleLabCommand(entry, variables = {}) {
  const { text, line } = entry;
  let match = text.match(/^MOVE\s+(10|[1-9]|steps)$/i);
  if (match) {
    const token = match[1].toLowerCase();
    if (token === "steps" && variables.steps === undefined) {
      return { error: `Line ${line}: “steps” can only be used inside a function.`, line };
    }
    const amount = token === "steps" ? variables.steps : Number(token);
    return { command: { type: "MOVE", amount, line, text: `MOVE ${amount}` } };
  }
  match = text.match(/^TURN\s+(LEFT|RIGHT)$/i);
  if (match) return { command: { type: "TURN", side: match[1].toUpperCase(), line, text: `TURN ${match[1].toUpperCase()}` } };
  match = text.match(/^FACE\s+(NORTH|EAST|SOUTH|WEST)$/i);
  if (match) {
    if (!isLabFeatureUnlocked("face")) return { error: `Line ${line}: FACE unlocks after Compass Commander.`, line };
    return { command: { type: "FACE", direction: match[1].toUpperCase(), line, text: `FACE ${match[1].toUpperCase()}` } };
  }
  match = text.match(/^SAY\s+(.+)$/i);
  if (match) return { command: { type: "SAY", message: match[1].slice(0, 80), line, text } };
  match = text.match(/^PAINT\s+(PURPLE|MINT|YELLOW|CORAL|BLUE|GREEN|ORANGE|PINK)$/i);
  if (match) return { command: { type: "PAINT", color: match[1].toUpperCase(), line, text: `PAINT ${match[1].toUpperCase()}` } };
  return { error: `Line ${line} needs a small repair: “${escapeHtml(text)}” is not a command Byte knows yet.`, line };
}

function parseLabProgram(code) {
  const rawLines = code.split("\n");
  if (rawLines.length > 20) return { error: "Your program has more than 20 lines. Remove a few lines and try again." };
  const entries = rawLines.map((raw, index) => ({ text: raw.trim(), line: index + 1 }));
  const definitions = {};
  const main = [];

  for (let index = 0; index < entries.length; index += 1) {
    const entry = entries[index];
    if (!entry.text || entry.text.startsWith("#")) continue;
    if (!/^FUNCTION\b/i.test(entry.text)) {
      main.push(entry);
      continue;
    }
    if (!isLabFeatureUnlocked("function")) return { error: `Line ${entry.line}: FUNCTION unlocks after Build a Navigation Function.`, line: entry.line };
    const signature = entry.text.match(/^FUNCTION\s+([A-Z_][A-Z0-9_]*)\(steps\)$/i);
    if (!signature) return { error: `Line ${entry.line}: use FUNCTION NAME(steps).`, line: entry.line };
    const body = [];
    let foundEnd = false;
    for (index += 1; index < entries.length; index += 1) {
      const bodyEntry = entries[index];
      if (/^END$/i.test(bodyEntry.text)) { foundEnd = true; break; }
      if (bodyEntry.text && !bodyEntry.text.startsWith("#")) body.push(bodyEntry);
    }
    if (!foundEnd) return { error: `Function on line ${entry.line} needs END on its own line.`, line: entry.line };
    if (!body.length) return { error: `Function on line ${entry.line} needs at least one command.`, line: entry.line };
    for (const bodyEntry of body) {
      if (/^(REPEAT|FUNCTION)\b/i.test(bodyEntry.text) || /^[A-Z_][A-Z0-9_]*\(/i.test(bodyEntry.text)) {
        return { error: `Line ${bodyEntry.line}: keep your first functions simple—use MOVE, TURN, FACE, SAY, or PAINT.`, line: bodyEntry.line };
      }
      const validation = parseSimpleLabCommand(bodyEntry, { steps: 1 });
      if (validation.error) return validation;
    }
    const name = signature[1].toUpperCase();
    if (definitions[name]) return { error: `Line ${entry.line}: ${name} already has a definition.`, line: entry.line };
    definitions[name] = { name, body, line: entry.line };
  }

  function compileBlock(block, variables = {}, callStack = []) {
    const compiled = [];
    for (let index = 0; index < block.length; index += 1) {
      const entry = block[index];
      if (!entry.text || entry.text.startsWith("#")) continue;
      const repeat = entry.text.match(/^REPEAT\s+(10|[2-9])\s+TIMES$/i);
      if (repeat) {
        if (!isLabFeatureUnlocked("repeat")) return { error: `Line ${entry.line}: REPEAT unlocks after Loop Lab.`, line: entry.line };
        const body = [];
        let depth = 1;
        let foundEnd = false;
        for (index += 1; index < block.length; index += 1) {
          const bodyEntry = block[index];
          if (/^REPEAT\s+/i.test(bodyEntry.text)) depth += 1;
          if (/^END$/i.test(bodyEntry.text)) {
            depth -= 1;
            if (depth === 0) { foundEnd = true; break; }
          }
          body.push(bodyEntry);
        }
        if (!foundEnd) return { error: `Repeat on line ${entry.line} needs END on its own line.`, line: entry.line };
        const result = compileBlock(body, variables, callStack);
        if (result.error) return result;
        for (let count = 0; count < Number(repeat[1]); count += 1) compiled.push(...result.commands);
        if (compiled.length > 120) return { error: "That program expands to more than 120 actions. Try a smaller repeat count or fewer calls." };
        continue;
      }
      if (/^REPEAT\b/i.test(entry.text)) return { error: `Line ${entry.line}: use REPEAT 2 TIMES through REPEAT 10 TIMES.`, line: entry.line };
      if (/^END$/i.test(entry.text)) return { error: `Line ${entry.line}: this END does not have a matching REPEAT.`, line: entry.line };

      const call = entry.text.match(/^([A-Z_][A-Z0-9_]*)\((10|[1-9])\)$/i);
      if (call) {
        if (!isLabFeatureUnlocked("function")) return { error: `Line ${entry.line}: function calls unlock after Build a Navigation Function.`, line: entry.line };
        const name = call[1].toUpperCase();
        const definition = definitions[name];
        if (!definition) return { error: `Line ${entry.line}: define ${name}(steps) before calling it.`, line: entry.line };
        if (callStack.includes(name)) return { error: `Line ${entry.line}: ${name} cannot call itself in this lab.`, line: entry.line };
        const result = compileBlock(definition.body, { steps: Number(call[2]) }, [...callStack, name]);
        if (result.error) return result;
        compiled.push(...result.commands);
        if (compiled.length > 120) return { error: "That program expands to more than 120 actions. Try a smaller repeat count or fewer calls." };
        continue;
      }

      const result = parseSimpleLabCommand(entry, variables);
      if (result.error) return result;
      compiled.push(result.command);
      if (compiled.length > 120) return { error: "That program expands to more than 120 actions. Try a smaller repeat count or fewer calls." };
    }
    return { commands: compiled };
  }

  const result = compileBlock(main);
  if (result.error) return result;
  if (!result.commands.length) {
    return { error: Object.keys(definitions).length ? "Your function is ready, but it never runs. Add a function call below its END." : "Your program is empty. Add a command or choose an example first." };
  }
  return { commands: result.commands, definitions: Object.keys(definitions) };
}

async function runLabProgram() {
  if (labRunning) return;
  const editor = document.querySelector("#lab-editor");
  state.labCode = editor.value;
  save();
  const program = parseLabProgram(state.labCode);
  const output = document.querySelector("#lab-output");
  const speech = document.querySelector("#lab-speech");
  speech.classList.add("hidden");
  if (program.error) {
    labRobot = { row: 5, column: 2, direction: 0, painted: {} };
    renderLabGrid();
    output.innerHTML = `<div class="lab-error"><strong>Bug found</strong><p>${program.error}</p><small>Check the command guide, change one thing, and run again.</small></div>`;
    playFeedbackSound(false);
    return;
  }
  labRunning = true;
  document.querySelector("#run-lab").disabled = true;
  labRobot = { row: 5, column: 2, direction: 0, painted: {} };
  renderLabGrid();
  output.innerHTML = "";
  let stopped = false;
  for (const command of program.commands) {
    const log = document.createElement("div");
    log.className = "lab-log running";
    log.innerHTML = `<b>Line ${command.line}</b><code>${escapeHtml(command.text.toUpperCase())}</code><span>Running…</span>`;
    output.appendChild(log);
    if (command.type === "MOVE") {
      for (let step = 0; step < command.amount; step += 1) {
        const direction = labDirections[labRobot.direction];
        const nextRow = labRobot.row + direction.row;
        const nextColumn = labRobot.column + direction.column;
        if (nextRow < 0 || nextRow > 9 || nextColumn < 0 || nextColumn > 9) {
          log.className = "lab-log error";
          log.querySelector("span").textContent = "Bump! Byte reached the edge.";
          stopped = true;
          break;
        }
        labRobot.row = nextRow;
        labRobot.column = nextColumn;
        renderLabGrid();
        await pause(220);
      }
    }
    if (command.type === "TURN") {
      labRobot.direction = (labRobot.direction + (command.side === "RIGHT" ? 1 : 3)) % 4;
      renderLabGrid();
    }
    if (command.type === "FACE") {
      labRobot.direction = { EAST: 0, SOUTH: 1, WEST: 2, NORTH: 3 }[command.direction];
      renderLabGrid();
    }
    if (command.type === "SAY") {
      speech.textContent = command.message;
      speech.classList.remove("hidden");
    }
    if (command.type === "PAINT") {
      labRobot.painted[`${labRobot.row}-${labRobot.column}`] = command.color;
      renderLabGrid();
    }
    if (stopped) break;
    log.className = "lab-log done";
    log.querySelector("span").textContent = "Done ✓";
    await pause(170);
  }
  if (!stopped) {
    output.insertAdjacentHTML("beforeend", `<div class="lab-success"><strong>Program finished!</strong><span>${program.commands.length} ${program.commands.length === 1 ? "command" : "commands"} ran successfully.</span></div>`);
    playFeedbackSound(true);
  }
  labRunning = false;
  document.querySelector("#run-lab").disabled = false;
}

function openCodeLab() {
  if (!isLabUnlocked()) return;
  renderLabFeatures();
  stopReading();
  homeView.classList.add("hidden");
  lessonView.classList.add("hidden");
  labView.classList.remove("hidden");
  const editor = document.querySelector("#lab-editor");
  editor.value = state.labCode;
  updateLabGutter();
  labRobot = { row: 5, column: 2, direction: 0, painted: {} };
  renderLabGrid();
  document.querySelector("#lab-output").innerHTML = '<p>Press “Run my code” to see what Byte does.</p>';
  document.querySelector("#lab-speech").classList.add("hidden");
  document.querySelector("#command-reference").classList.add("hidden");
  document.querySelector("#command-toggle").setAttribute("aria-expanded", "false");
  document.querySelector("#command-toggle").innerHTML = 'Show commands <span aria-hidden="true">+</span>';
  document.querySelector("#lab-title").focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  stopReading();
  lessonView.classList.add("hidden"); labView.classList.add("hidden"); homeView.classList.remove("hidden");
  renderMap(); window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-go='home']").forEach(button => button.addEventListener("click", goHome));
document.querySelector("#course-view-toggle").addEventListener("click", () => {
  state.showFullMap = !state.showFullMap;
  save();
  renderMap();
});
document.querySelector("#code-lab-button").addEventListener("click", openCodeLab);
document.querySelector("#command-toggle").addEventListener("click", event => {
  const button = event.currentTarget;
  const reference = document.querySelector("#command-reference");
  const willOpen = reference.classList.contains("hidden");
  reference.classList.toggle("hidden", !willOpen);
  button.setAttribute("aria-expanded", String(willOpen));
  button.innerHTML = willOpen
    ? 'Hide commands <span aria-hidden="true">−</span>'
    : 'Show commands <span aria-hidden="true">+</span>';
});
document.querySelectorAll("[data-lab-command]").forEach(button => button.addEventListener("click", () => {
  const help = labCommandHelp[button.dataset.labCommand];
  document.querySelectorAll("[data-lab-command]").forEach(item => item.classList.toggle("selected", item === button));
  document.querySelector("#command-detail").innerHTML = `<strong>${help.title}</strong><p>${help.copy}</p><code>${help.example}</code><small>${help.tip}</small>`;
}));
document.querySelectorAll("[data-paint-color]").forEach(button => button.addEventListener("click", () => {
  const editor = document.querySelector("#lab-editor");
  const command = `PAINT ${button.dataset.paintColor}`;
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const before = editor.value.slice(0, start);
  const prefix = before && !before.endsWith("\n") ? "\n" : "";
  editor.setRangeText(`${prefix}${command}`, start, end, "end");
  state.labCode = editor.value;
  save();
  updateLabGutter();
  editor.focus();
}));
document.querySelector("#lab-editor").addEventListener("input", event => {
  state.labCode = event.target.value;
  save();
  updateLabGutter();
});
document.querySelectorAll("[data-lab-example]").forEach(button => button.addEventListener("click", () => {
  state.labCode = labExamples[button.dataset.labExample];
  document.querySelector("#lab-editor").value = state.labCode;
  save();
  updateLabGutter();
  document.querySelector("#lab-editor").focus();
}));
document.querySelector("#run-lab").addEventListener("click", runLabProgram);
document.querySelector("#reset-lab").addEventListener("click", () => {
  state.labCode = labStarter;
  document.querySelector("#lab-editor").value = state.labCode;
  save();
  updateLabGutter();
  labRobot = { row: 5, column: 2, direction: 0, painted: {} };
  renderLabGrid();
  document.querySelector("#lab-output").innerHTML = "<p>Starter program restored. Change it or run it as-is.</p>";
  document.querySelector("#lab-speech").classList.add("hidden");
});
document.querySelector("[data-start]").addEventListener("click", () => {
  const next = recommendedNextMission();
  if (next) openMission(next.id);
  else openToolkit();
});
document.querySelector("#check-button").addEventListener("click", checkAnswer);
document.querySelector("#hint-button").addEventListener("click", revealHelp);
const readButton = document.querySelector("#read-aloud");
let reading = false;
function stopReading() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  reading = false;
  readButton.setAttribute("aria-pressed", "false");
  readButton.innerHTML = '<span aria-hidden="true">▶</span> Read aloud';
}
function toggleReadAloud() {
  if (!("speechSynthesis" in window)) return;
  if (reading) return stopReading();
  const mission = currentMission();
  if (!mission) return;
  const speech = new SpeechSynthesisUtterance(`${mission.title}. ${mission.goal}. Today's challenge. ${mission.prompt}`);
  speech.rate = .9;
  speech.pitch = 1.05;
  speech.onend = stopReading;
  speech.onerror = stopReading;
  reading = true;
  readButton.setAttribute("aria-pressed", "true");
  readButton.innerHTML = '<span aria-hidden="true">■</span> Stop reading';
  window.speechSynthesis.speak(speech);
}
if (!("speechSynthesis" in window)) readButton.classList.add("hidden");
readButton.addEventListener("click", toggleReadAloud);
const resetDialog = document.querySelector("#reset-dialog");
function closeResetDialog() {
  resetDialog.classList.add("hidden");
  document.querySelector("#reset-progress").focus();
}
document.querySelector("#reset-progress").addEventListener("click", () => {
  resetDialog.classList.remove("hidden");
  document.querySelector("#cancel-reset").focus();
});
document.querySelector("#cancel-reset").addEventListener("click", closeResetDialog);
document.querySelector("#confirm-reset").addEventListener("click", () => {
  state.completed = [];
  state.labCode = labStarter;
  state.designer = emptyDesigner();
  state.debugDesigner = { scenario: "", type: "", released: false, repair: null, note: "", reportFiled: false };
  state.reflections = {};
  state.replayingFresh = false;
  state.restartConfirmation = false;
  state.showFullMap = false;
  state.starter = { aiRan: false, aiIssue: "", aiRepair: "", aiFixedRun: false };
  state.level3 = {
    patternRound: 0, patternSelection: [], patternRun: false, patternSolved: false,
    loopStage: 0, loopCount: 3, loopCommands: [], loopPrediction: "", loopHasRun: false,
    studioStage: 0, runawayStopped: false, runawayCookies: 0, runawayManualStop: false, runawayReason: "", repairStarted: false, repairCount: null, repairRun: false,
    creation: { title: "", count: 3, commands: [], hasRun: false, safetyCheck: "" }
  };
  state.level4 = {
    compassStart: "EAST", compassProgram: "A", compassTrials: [],
    builderDirection: "", builderMovement: "", builderCall: "", builderRan: false, builderTestSteps: 2, builderResults: [],
    routeFunction: "GO_EAST", routeSteps: 5, routeCalls: [], routeRan: false, routeResult: null, routeReason: ""
  };
  save(); renderProgress(); renderMap(); closeResetDialog();
});
resetDialog.addEventListener("click", event => {
  if (event.target === resetDialog) closeResetDialog();
});

const guide = document.querySelector("#guide");
function closeGuide() {
  guide.classList.add("hidden");
  document.querySelector("#guide-button").focus();
}
document.querySelector("#guide-button").addEventListener("click", () => {
  guide.classList.remove("hidden");
  document.querySelector("#close-guide").focus();
});
document.querySelector("#close-guide").addEventListener("click", closeGuide);
guide.addEventListener("click", event => { if (event.target === guide) closeGuide(); });

const certificateDialog = document.querySelector("#certificate-dialog");
function closeCertificate() {
  certificateDialog.classList.add("hidden");
  (document.querySelector("[data-open-certificate]") || document.querySelector("#certificate-button")).focus();
}
function openCertificate() {
  document.querySelector("#celebration").classList.add("hidden");
  document.querySelector("#toolkit").classList.add("hidden");
  document.querySelector("#certificate-date").textContent = new Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(new Date());
  certificateDialog.classList.remove("hidden");
  document.querySelector("#certificate-name").focus();
}
document.querySelector("#certificate-button").addEventListener("click", openCertificate);
document.querySelector("#close-certificate").addEventListener("click", closeCertificate);
document.querySelector("#print-certificate").addEventListener("click", () => window.print());
certificateDialog.addEventListener("click", event => { if (event.target === certificateDialog) closeCertificate(); });
document.querySelector("#sound-toggle").addEventListener("click", event => {
  soundOn = !soundOn;
  writeStoredValue("codeQuestSound", soundOn ? "on" : "off");
  updateSoundButton();
  if (soundOn) playFeedbackSound(true);
});
document.querySelector("#celebration-badges").addEventListener("click", () => {
  document.querySelector("#celebration").classList.add("hidden");
  openToolkit();
});
document.querySelector("#close-celebration").addEventListener("click", event => {
  document.querySelector("#celebration").classList.add("hidden");
  const nextId = event.currentTarget.dataset.nextMission;
  if (nextId) openMission(nextId);
  else goHome();
});
document.querySelector("#toolkit-button").addEventListener("click", openToolkit);
document.querySelector("#close-toolkit").addEventListener("click", closeToolkit);
document.querySelector("#toolkit").addEventListener("click", event => {
  if (event.target.id === "toolkit") closeToolkit();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !document.querySelector("#toolkit").classList.contains("hidden")) closeToolkit();
  if (event.key === "Escape" && !resetDialog.classList.contains("hidden")) closeResetDialog();
  if (event.key === "Escape" && !guide.classList.contains("hidden")) closeGuide();
  if (event.key === "Escape" && !certificateDialog.classList.contains("hidden")) closeCertificate();
});

save();
updateSoundButton();
renderMap();
renderProgress();
