# Code Quest

A playful, browser-based course that teaches coding habits and AI literacy to new computer learners at about a fifth-grade reading level.

Code Quest contains 15 short missions, a visual coding playground, progressive command unlocks, badges, and a printable completion certificate. It requires no account and stores learner progress only in that browser on that device.

## Run it

Open `index.html` in a modern browser. No account, build step, or internet connection is required.

For the most reliable local experience, serve the folder with any simple local web server and open the address it provides.

## Publish with GitHub Pages

This repository is ready to publish directly—there is no build step.

1. Push the files to the `main` branch of a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. Open the address GitHub provides after the deployment finishes.

For a project repository named `code-quest`, the default address is:

```text
https://YOUR-USERNAME.github.io/code-quest/
```

Enable **Enforce HTTPS** in the Pages settings when the option becomes available. If you later switch to a custom domain, previously saved learner progress will not move automatically because browsers keep local progress separate for each web address.

## Course content

### Starter Quest

1. Robot Instructions — sequencing, testing, and watching Byte act out the result
2. Debugging Detective — testing and debugging
3. AI Said What? — running, inspecting, repairing, and retesting an AI-generated program

### Level 1: Clear Instructions

1. Lost Robot — commands, prediction, testing, and evidence
2. The Missing Step — reading and finding gaps
3. Robot Task Designer — creating, reading back, and self-reviewing an original algorithm

### Level 2: Debugging Detective

1. Bug Museum — comparing evidence, classifying bugs, and reviewing why each diagnosis fits
2. Change One Thing — predicting an outcome, testing one repair, and updating from evidence
3. Sneaky Bug Lab — releasing and repairing a generated bug, then filing a structured detective report

### Level 3: Pattern Power

1. Pattern Party — finding repeating units and translating each one into a loop
2. Loop Lab — predicting, expanding, and testing loops before correcting an AI-generated repeat count
3. Runaway Robot — explaining a forever-loop failure, repairing it safely, and creating a finite loop animation

### Level 4: Command Creator

1. Compass Commander — connecting loops to reusable functions through reliable compass commands
2. Build a Navigation Function — assembling and reading `GO_NORTH(steps)`, then testing multiple parameter values
3. Function Delivery — tracing three named function calls, collecting energy, and explaining why reuse makes code clearer

Progress is stored only in the browser using local storage. No learner information is collected or transmitted.

## Learner support

- Optional read-aloud uses the device's built-in speech voice and sends no text online.
- Hints progress from a clue to a stronger clue and then a complete solution.
- Completed missions remain available for replay without changing saved progress.
- The map highlights one recommended next mission, even when learners complete activities out of order.
- The home screen focuses on the current level by default, with an optional full-course map and a welcome-back summary.
- Saved creative activities can be reviewed or explicitly restarted while completed badges remain safe.
- Level transitions, badges, and Byte's reactions celebrate effort and growth.

## Code Lab

Code Lab unlocks after the three Starter Quest missions. It gives learners a safe, visual place to write and run Byte commands on a 10-by-10 world. The available tools grow with the course: `MOVE`, `TURN`, `SAY`, and `PAINT` unlock first; `REPEAT` unlocks after Loop Lab; `FACE` unlocks after Compass Commander; and reusable `FUNCTION` definitions unlock after Build a Navigation Function. The explorer and examples update as new tools unlock. Programs are limited to 20 lines, expanded programs stop safely at 120 actions, errors point to a specific line, and the current draft is stored only on the learner's device.

## For grown-ups

The in-game Grown-up Guide summarizes timing, skills, privacy, and helpful coaching prompts. Learners who complete all 15 missions can personalize and print a Code Quest Champion certificate.
