# Rock Paper Scissors

## About

This is my solution for the **Rock Paper Scissors** project from **The Odin Project**.

The game is played directly in the browser using a graphical user interface. The player chooses between Rock, Paper, or Scissors by clicking a button, while the computer makes a random choice.

The first player to reach **5 points** wins the game.

This project helped me practice JavaScript fundamentals, DOM manipulation, event handling, and Git workflow.

---

## Features

- Play Rock, Paper, Scissors directly from the browser.
- Three buttons for the player's choices.
- Random computer choices.
- Round result displayed directly on the page.
- Live score tracking.
- Winner announcement when a player reaches 5 points.
- Game stops automatically when a player reaches 5 points.
- Dynamic interface using JavaScript and the DOM.

---

## Skills Practiced

During this project I practiced:

- JavaScript functions
- Conditional statements (`if`, `else if`, `else`)
- Variables and scope
- Parameters and return values
- Template literals
- DOM manipulation
- `document.getElementById()`
- Event listeners with `addEventListener()`
- Handling `click` events
- Updating HTML with `textContent`
- Random number generation with `Math.random()`
- Problem solving with pseudocode
- Breaking a problem into smaller tasks
- Organizing code into reusable functions
- Git branches and merging
- Making small, descriptive commits

---

## Technologies

- HTML
- JavaScript
- Git
- GitHub

---

## How It Works

The player chooses an option by clicking one of the three buttons:

- Rock
- Paper
- Scissors

JavaScript generates a random choice for the computer and passes both choices to the `playRound()` function.

The function determines the winner of the round and updates the corresponding score.

The result and score are then displayed dynamically on the page using DOM manipulation.

When either the player or the computer reaches **5 points**, the game announces the winner and stops accepting new rounds.

---

## What I Learned

The biggest lesson from this project was learning how to think before writing code.

Instead of trying to solve the whole problem at once, I divided the project into smaller parts, created pseudocode, tested each function separately, and then combined everything into the final game.

I also learned how to connect JavaScript with an HTML interface using the DOM and event listeners.

Another important part of this project was learning how to work with Git branches. I developed the user interface in a separate `rps-ui` branch, made small commits throughout the process, and then merged the completed feature back into `main`.

This helped me understand how Git can be used to organize changes while developing a project.

---

## Git Workflow

For the user interface, I worked on a separate feature branch:

```bash
git checkout -b rps-ui
```

I made small commits while developing the interface and then merged the completed feature into `main`:

```bash
git checkout main
git merge rps-ui
git push origin main
```

After the merge was completed, the feature branch was removed locally and remotely:

```bash
git branch -d rps-ui
git push origin --delete rps-ui
```

---

## Author

Developed by Franco Ariel Brasa while learning JavaScript through **The Odin Project**.
