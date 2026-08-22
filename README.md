# Code Quest

A playful introduction to coding, debugging, functions, and responsible AI use for young learners.

**[Play Code Quest](https://ejohnwood.github.io/code-quest/)**

Code Quest guides learners through 15 short missions with Byte, a friendly robot companion. Each activity encourages kids to predict what will happen, test their thinking, learn from mistakes, and try again.

## Highlights

- 15 missions designed for approximately 5–10 minutes each
- Kid-friendly instructions written around a fifth-grade reading level
- A visual Code Lab with a 10-by-10 robot world
- Commands that unlock gradually, including movement, loops, compass directions, and functions
- Helpful hints, immediate feedback, optional read-aloud, badges, and a completion certificate
- No account, installation, build process, or external services required
- Progress saved only in the learner's browser

## Learning journey

| Stage | Focus |
| --- | --- |
| Starter Quest | Exact instructions, debugging, and checking AI-generated answers |
| Level 1: Clear Instructions | Sequencing, prediction, and algorithm design |
| Level 2: Debugging Detective | Evidence, careful testing, and explaining repairs |
| Level 3: Pattern Power | Repeating patterns, loops, and safe stopping conditions |
| Level 4: Command Creator | Compass navigation, reusable functions, and parameters |

Code Lab unlocks after Starter Quest. Its available tools grow alongside the course: `MOVE`, `TURN`, `SAY`, and `PAINT` come first, followed by `REPEAT`, `FACE`, and reusable `FUNCTION` definitions.

## Run locally

Clone the repository and open `index.html` in a modern browser:

```sh
git clone https://github.com/ejohnwood/code-quest.git
cd code-quest
```

You can also serve the folder with any simple local web server. There are no dependencies to install and no build command to run.

## Privacy and safety

Code Quest does not collect or transmit learner information. Mission progress, creative work, and Code Lab drafts stay in browser storage on the current device. Optional read-aloud uses the device's built-in speech voice.

Programs in Code Lab are intentionally limited: source programs can contain up to 20 lines, and expanded programs stop after 120 actions. Errors identify the relevant line and provide learner-friendly guidance.

## For parents and teachers

The built-in Grown-up Guide explains timing, learning goals, privacy, and useful coaching prompts. Hints are part of the learning process, completed missions remain available for replay, and mistakes never cause a learner to lose progress.

## Technology

Code Quest is built with plain HTML, CSS, and JavaScript. The site is hosted with GitHub Pages and works without a backend or database.

## Publishing updates

Changes pushed to the `main` branch are published from the repository root through GitHub Pages. Because learner progress belongs to the site's web address, moving to a different domain will not automatically transfer existing browser progress.
