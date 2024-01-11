// arrays and variables
const names = [
  "plato",
  "aristotle",
  "confucius",
  "thomas aquinas",
  "immanuel kant",
  "john locke",
  "jean jacques rousseau",
  "albert camus",
  "jean paul sartre",
  "martin heidegger",
  "ludwig wittgenstein",
  "epicurus",
  "gilbert ryle",
  "alain de botton",
  "diogenes",
  "thales",
  "zeno",
  "pyrrho",
  "rudolf carnap",
  "willard quine",
  "aj ayer",
  "karl popper",
  "david hume",
  "thomas hobbes",
  "niccolò machiavelli",
  "laozi",
  "sun tzu",
  "gottfried leibniz",
  "baruch spinoza",
  "st. thomas aquinas",
  "edmund husserl",
  "karl marx",
  "charles darwin",
  "sigmund freud",
  "carl jung",
  "simone weil",
  "johann fichte",
  "friedrich engels",
  "max weber",
  "george orwell",
  "wilhelm reich",
  "albert einstein",
  "blaise pascal",
  "arthur schopenhauer",
  "friedrich nietzsche",
  "avicenna",
  "auguste comte",
  "franz kafka",
  "henry james",
  "john dewey",
  "ludwig feuerbach",
  "michel foucault",
  "friedrich hayek",
  "alfred north whitehead",
  "bertrand russell",
  "john stuart mill"
  "thomas nagel",
    "simone de beauvoir",
    "aristophanes",
    "al-farabi",
    "john rawls",
    "simone de beauvoir",
    "emil cioran",
    "claude levi-strauss",
    "john searle",
    "georg wilhelm friedrich hegel",
    "alasdair macintyre",
    "herbert marcuse",
    "jürgen habermas",
    "william james",
    "martha nussbaum",
    "karl jaspers",
    "alexis de tocqueville",
    "albert schweitzer",
    "søren kierkegaard",
    "mary wollstonecraft",
    "thomas kuhn",
    "edmund burke",
    "edmund burke",
    "w.e.b. du bois",
    "robert nozick",
    "william of ockham",
    "karl jaspers",
    "edmund gettier",
    "george berkeley",
    "otto neurath",
    "henri bergson",
    "ernst mach",
    "peter singer",
    "george edward moore",
    "william kingdon clifford",
    "ludwig von mises",
    "karl mannheim",
    "alfred ayer"
  ];
];

const hints = [
  "Ancient Greek philosopher, student of Socrates, and founder of the Academy. Famous for his dialogues, including 'The Republic.'",
  "Tutor to Alexander the Great, known for his contributions to ethics, metaphysics, and natural philosophy. Founded the Lyceum.",
  "Chinese philosopher emphasizing ethics, morality, and social harmony. His teachings form the basis of Confucianism.",
  "Medieval theologian integrating Aristotelian philosophy with Christian theology. Wrote 'Summa Theologica.'",
  "German philosopher known for his Critique of Pure Reason. Developed the categorical imperative in ethics.",
  "Enlightenment thinker advocating for natural rights, social contract, and empiricism. Influential in political philosophy.",
  "Social contract theorist and philosopher of the Enlightenment. Emphasized the idea of the 'noble savage.'",
  "Existentialist and absurdist philosopher, author of 'The Stranger' and 'The Myth of Sisyphus.'",
  "Existentialist philosopher declaring 'Existence precedes essence.' Emphasized radical freedom and responsibility.",
  "German philosopher associated with existential phenomenology. Known for his complex writings on ontology.",
  "Philosopher of language with two influential phases. Wrote 'Tractatus Logico-Philosophicus' and 'Philosophical Investigations.'",
  "Ancient Greek philosopher advocating for a life of tranquility through the pursuit of pleasure and avoidance of pain.",
  "Analytical philosopher known for his critique of Cartesian dualism and the concept of 'category mistake.'",
  "Contemporary philosopher focusing on popularizing philosophical ideas in everyday life.",
  "Ancient Greek cynic philosopher who embraced a simple lifestyle and famously carried a lantern in daylight.",
  "Pre-Socratic philosopher credited with seeking naturalistic explanations for the cosmos and predicting a solar eclipse.",
  "Founder of Stoicism, promoting virtue as the highest good and teaching resilience in the face of adversity.",
  "Ancient Greek skeptic who advocated for suspending judgment and finding tranquility in perpetual doubt.",
  "Logical positivist known for contributions to the philosophy of language and the verification principle.",
  "American philosopher challenging the analytic-synthetic distinction and advocating for naturalized epistemology.",
  "Logical positivist known for 'Language, Truth, and Logic' and the verification principle.",
  "Philosopher of science emphasizing falsifiability and known for the concept of the 'open society.'",
  "Scottish empiricist and skeptic known for 'A Treatise of Human Nature' and critique of causation.",
  "Political philosopher advocating for social contract theory and a strong central authority.",
  "Political theorist known for 'The Prince,' emphasizing practical political strategies and realism.",
  "Ancient Chinese philosopher and founder of Daoism, author of the 'Tao Te Ching.'",
  "Ancient Chinese military strategist and philosopher known for 'The Art of War.'",
  "German polymath and philosopher known for optimism, calculus, and the idea of monads.",
  "Dutch philosopher advocating for pantheism and known for 'Ethics' and the idea of substance.",
  "Medieval theologian integrating Aristotelian philosophy with Christian theology. Wrote 'Summa Theologica.'",
  "Phenomenologist known for his method of bracketing and founding the philosophical movement of phenomenology.",
  "Historical materialist and co-author of 'The Communist Manifesto,' advocating for class struggle.",
  "Naturalist and biologist famous for 'On the Origin of Species,' introducing the theory of evolution.",
  "Founder of psychoanalysis, exploring the unconscious mind and the Oedipus complex.",
  "Swiss psychiatrist and psychoanalyst known for archetypes, collective unconscious, and analytical psychology.",
  "French philosopher and mystic with contributions to political philosophy and Christian mysticism.",
  "German idealist philosopher known for subjective idealism and the concept of the 'I.'",
  "Existentialist philosopher declaring 'Existence precedes essence' and advocating for radical freedom.",
  "Collaborator of Karl Marx and co-author of 'The Communist Manifesto,' emphasizing historical materialism.",
  "Sociologist and philosopher known for his work on the Protestant Ethic, bureaucracy, and social action.",
  "Author and political thinker known for '1984'. 
  "Contemporary philosopher known for 'What Is It Like to Be a Bat?' and 'The View from Nowhere.'",
    "Existentialist philosopher, feminist, and author of 'The Second Sex.' Partner of Jean-Paul Sartre.",
    "Ancient Greek comic playwright known for works like 'Lysistrata.'",
    "Islamic philosopher, jurist, and scientist. Contributed to political philosophy and metaphysics.",
    "Political philosopher known for 'A Theory of Justice,' developing the concept of the original position.",
    "Existentialist philosopher, feminist, and author of 'The Second Sex.' Partner of Jean-Paul Sartre.",
    "Romanian philosopher known for his pessimistic views, including 'The Trouble with Being Born.'",
    "Anthropologist and structuralist philosopher known for 'The Elementary Structures of Kinship.'",
    "Analytical philosopher and critic of artificial intelligence. Notable for 'Chinese Room' argument.",
    "German idealist philosopher known for dialectical method and 'The Phenomenology of Spirit.'",
    "Ethical philosopher and critic of modernity. Author of 'After Virtue' and 'Whose Justice? Which Rationality?'",
    "Frankfurt School theorist and critical theorist known for 'One-Dimensional Man.'",
    "Contemporary philosopher and critical theorist associated with discourse ethics.",
    "Pragmatist philosopher and psychologist. Known for 'The Varieties of Religious Experience.'",
    "Philosopher and classicist known for her work in ethics, political philosophy, and emotions.",
    "Existentialist philosopher and psychiatrist. Developed the concept of 'existential psychotherapy.'",
    "Existentialist philosopher and playwright. Influential in the development of existentialist thought.",
    "Political theorist known for 'Democracy in America' and analysis of the American political system.",
    "Philosopher, theologian, and medical missionary. Won the Nobel Peace Prize for his humanitarian work.",
    "Danish philosopher known for his existentialist writings, including 'Fear and Trembling.'",
    "Early feminist philosopher and author of 'A Vindication of the Rights of Woman.'",
    "Philosopher of science known for 'The Structure of Scientific Revolutions.'",
    "Irish statesman, political theorist, and philosopher. Influential in conservative political thought.",
    "Irish statesman, political theorist, and philosopher. Influential in conservative political thought.",
    "African-American sociologist, historian, and civil rights activist. Co-founder of the NAACP.",
    "Political philosopher and libertarian. Known for 'Anarchy, State, and Utopia.'",
    "Medieval philosopher known for 'Occam's Razor' and nominalism.",
    "Existentialist philosopher and psychiatrist. Developed the concept of 'existential psychotherapy.'",
    "Philosopher known for the Gettier problem, challenging the traditional definition of knowledge.",
    "Idealist philosopher known for his theory of subjective idealism and 'esse est percipi.'",
    "Logical positivist and philosopher of science. Co-founder of the Vienna Circle.",
    "French philosopher known for his duration theory and critique of scientific mechanism.",
    "Austrian philosopher and physicist. Influential in the Vienna Circle and logical positivism.",
    "Utilitarian philosopher and ethicist. Advocated for animal rights and effective altruism.",
    "Analytical philosopher known for 'Principia Ethica' and the concept of the 'naturalistic fallacy.'",
    "British mathematician and philosopher known for 'The Ethics of Belief.'",
    "Austrian economist and social philosopher. Associated with the Austrian School of Economics.",
    "Sociologist and philosopher known for the concept of 'totalitarianism.'",
    "Logical positivist and philosopher known for 'Language, Truth, and Logic.'"
  ];
  
  // Combine the original and additional arrays
  const combinedPhilosophers = philosophers.concat(additionalPhilosophers);
  const combinedHints = hints.concat(additionalHints);
  
  // Example usage:
  console.log(combinedPhilosophers);
  console.log(combinedHints);
  


const quotes = [
  "The only source of knowledge is experience. - Albert Einstein",
  "Every artist was first an amateur. - Ralph Waldo Emerson",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
  "All the world's a stage, and all the men and women merely players. - William Shakespeare",
];
const startGameSection = document.getElementById("startGameSection");
const gameArea = document.getElementById("game");
const endGameSection = document.getElementById("endGameSection");
let hiddenName = getRandomName().toUpperCase();
const wordDisplay = document.getElementById("wordDisplay");
const letterInput = document.getElementById("letterInput");
const submitLetter = document.getElementById("submitLetter");
const playAnotherRound = document.getElementById("playAnotherRound");
const progressBar = document.getElementById("progressBar");
const title = document.getElementById("title");
const hintIndex = names.indexOf(hiddenName.toLowerCase());

const hintElement = document.getElementById("hint");

let message = document.getElementById("message");
let messageGame = document.getElementById("messageGame");
let attemptsLeftDisplay = document.getElementById("attemptsLeft");
let guessedName = createGuessedNameArray(hiddenName);
let guessedLetters = [];
let initialAttempts; 
let startButtons = document.querySelectorAll(".btn-diff");
let correctGuessCount = 0;
let attemptsLeft;
let noCigar = document.getElementById("noCigar");

// Function to hide or display the three game stages
function hideOrDisplay(element) {
  element.classList.contains("hide") ? element.classList.remove("hide")
    : element.classList.add("hide");
}
// Event listener for the level difficulty selection
for (let button of startButtons) {
  button.addEventListener("click", (event) => {
    initialAttempts = parseInt(event.target.value); // Set the initial number of attempts
    attemptsLeft = initialAttempts;
    attemptsLeftDisplay.textContent = attemptsLeft;
    hideOrDisplay(startGameSection);
    hideOrDisplay(gameArea);
    letterInput.focus();
  });
}
// Displays the hidden name as underscores
wordDisplay.textContent = guessedName.join(" ");
// Submit letter button Event listener
submitLetter.addEventListener("click", handleGuess);
// Enter keypress Event listener
letterInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});
// quit button Event listener
document.getElementById("quitGame").addEventListener("click", function () {
  console.log("Quit button clicked");
  
  correctGuessCount = 0;
  startNewRound();
  hideOrDisplay(startGameSection);
  hideOrDisplay(endGameSection);
});
// back button Event listener
document.getElementById("backButton").addEventListener("click", function () {
  startNewRound();
  hideOrDisplay(gameArea);
  hideOrDisplay(startGameSection);
});
// Random name generator
function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}
// Creates an array of underscores and spaces to display the hidden name
function createGuessedNameArray(name) {
  let guessedName = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      guessedName.push(" ");
    } else {
      guessedName.push("_");
    }
  }
  return guessedName;
}


function provideHint() {
  console.log('where is the hint!');
  if (hintIndex !== -1 && hintIndex < hints.length) {
    hintElement.textContent = `Hint: ${hints[hintIndex]}`;
  }
  console.log(hintIndex, hintElement.textContent, hiddenName);
}







// Handles the guess and displays the appropriate message
function handleGuess() {
  console.log("attemptsLeft:", attemptsLeft); 
  if (attemptsLeft === 0) {
    return;
  }
  if (attemptsLeft === 2) {
    console.log('hint function called')
     provideHint();

   }
  const letter = letterInput.value.toUpperCase();
  // Check if the letter has already been guessed
  if (guessedLetters.includes(letter)) {
    messageGame.innerHTML = `<p>You've already guessed the letter '${letter}'. Try a different one.</p>`;
  } else {
    // Add the letter to the guessed letters array
    guessedLetters.push(letter);
    if (letter.length !== 1 || !/^[A-Z]$/.test(letter)) {
      messageGame.innerHTML = "<p>Please enter a single uppercase letter.</p>";
    } else if (hiddenName.includes(letter) && !guessedName.includes(letter)) {
      for (let i = 0; i < hiddenName.length; i++) {
        if (hiddenName[i] === letter) {
          guessedName[i] = letter;
          updateProgressBar(); // Call the function to update the progress bar
        }
      }
      wordDisplay.textContent = guessedName.join(" ");
      updateProgressBar(); // Call the function to update the progress bar
      
      if (!guessedName.includes("_")) {
        correctGuessCount++;
        updateScoreboard(); // Update the scoreboard when a correct guess is made
        message.innerHTML = `<p>Congratulations! You've guessed our Great Thinker and greatness is yours! Please find your wisdom winnings below: </p>`;
        displayRandomQuote();
        messageGame.innerHTML = `<p>Would you like to play another round?</p>`; 
        backgroundImage();
        document.body.style.backgroundImage =
          "url('assets/images/eureka.webp')";
        hideOrDisplay(gameArea);
        hideOrDisplay(endGameSection);
        submitLetter.disabled = true;
        playAnotherRound.style.display = "block";
        title.style.display = "none";
        noCigar.style.display = "none";
        document.getElementById("quote").classList.remove("hide");
        
        
}
      
    } else {
      attemptsLeft--;
      attemptsLeftDisplay.textContent = attemptsLeft;
      if (attemptsLeft === 0) {
        backgroundImage();
        document.body.style.backgroundImage = "url('assets/images/freud.webp')";
        noCigar.innerHTML = `<p>Close but no Cigar ..... However, as the Greatest of Freudian's once said; "From error to error, one discovers the entire truth and guessing games really are quite delightful”- Sigmund Freud</p>`;
        noCigar.innerHTML = `<p>Close but no Cigar ... the correct Thinker was '${hiddenName}'. However, as the Greatest of Freudian's once said; "From error to error, one discovers the entire truth and guessing games really are quite delightful”- Sigmund Freud</p>`;
        hideOrDisplay(gameArea);
        hideOrDisplay(endGameSection);
        title.style.display = "none";
        noCigar.style.display = "block";
      }
    }
  }
 
 
  // resetting the letterinput on every guess 
  letterInput.value = "";
  //letterInput.focus(); // i dont think this is neeeded 
}


// Displays a random quote from the quotes array
function displayRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = `<p>${randomQuote}</p>`;
}
// Function that Calculates progress based on the number of correctly guessed letters
function updateProgressBar() {
  let correctGuesses = guessedName.filter((letter) => letter !== "_").length;
  let totalLetters = guessedName.length;
  let progress = (correctGuesses / totalLetters) * 100;
  progressBar.value = progress;
}
// Function that starts a new round by resetting the game
function startNewRound() {
  updateScoreboard();
  hiddenName = getRandomName().toUpperCase();
  guessedName = createGuessedNameArray(hiddenName);
  guessedLetters = []; // Clear the guessed letters
  hintElement.textContent = "";
  wordDisplay.textContent = guessedName.join(" ");
  attemptsLeft = initialAttempts;
  attemptsLeftDisplay.textContent = attemptsLeft;
  message.innerHTML = "";
  messageGame.innerHTML = "";
  document.body.style.backgroundImage = ""; // Reset the background image
  submitLetter.disabled = false;
  progressBar.value = 0;
  title.style.display = "block";
}
// Event listener for the play another round button
playAnotherRound.addEventListener("click", function () {
  startNewRound();
  hideOrDisplay(endGameSection);
  hideOrDisplay(gameArea);
  letterInput.focus();
});

// Function to update and display correct guess count on the scoreboard
function updateScoreboard() {
  const scoreboardElements = document.getElementsByClassName("scoreboard");

  for (let i = 0; i < scoreboardElements.length; i++) {
    scoreboardElements[i].textContent = `Correct Guesses: ${correctGuessCount}`;
  }
}

function closeInstructions() {
  
  var modal = document.getElementById("gameInstructionsModal");

  var modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}


// Function to set the background image
function backgroundImage() {
  document.body.style.backgroundSize = "cover"; // Cover the entire page
  document.body.style.backgroundRepeat = "no-repeat"; // Don't repeat the image
  document.body.style.backgroundPosition = "center"; // Center the image
}