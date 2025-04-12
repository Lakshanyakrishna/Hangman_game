const wordSets = {
    easy: [
      { word: "cat", hint: "Says meow and ignores you." },
      { word: "dog", hint: "Barks and wags its tail." },
      { word: "sun", hint: "Bright, hot, and always on time." },
      { word: "hat", hint: "Sits on your head." },
      { word: "cup", hint: "Holds tea or coffee." },
      { word: "pen", hint: "Used for messy handwriting." },
      { word: "bat", hint: "Flies at night or hits a ball." },
      { word: "fan", hint: "Spins to cool you off." },
      { word: "egg", hint: "Shell outside, breakfast inside." },
      { word: "bus", hint: "Big yellow or red roller coaster." },
      { word: "box", hint: "Perfect for hiding surprises." },
      { word: "cow", hint: "Moo-ves slowly, gives milk." },
      { word: "car", hint: "Goes vroom on the road." },
      { word: "toy", hint: "Kid's best distraction." },
      { word: "key", hint: "Unlocks more than just doors." },
      { word: "bed", hint: "Your sleepy headquarters." },
      { word: "zip", hint: "Goes up and down on jackets." },
      { word: "ice", hint: "Frozen water for cool moments." },
      { word: "jam", hint: "Sticky and sweet—or traffic!" },
      { word: "map", hint: "Helps when you're lost." },
      { word: "net", hint: "Catches fish or bad Wi-Fi." },
      { word: "pan", hint: "Where eggs meet their fate." },
      { word: "tap", hint: "Water wizard in kitchens." },
      { word: "pig", hint: "Oinks and loves mud baths." },
      { word: "hen", hint: "Gives you breakfast eggs." },
      { word: "toy", hint: "Loves getting stepped on." },
      { word: "bag", hint: "Carries your chaos." },
      { word: "jam", hint: "Sweet mess on toast." },
      { word: "pot", hint: "Boiling point lives here." },
      { word: "bee", hint: "Buzzes and gives honey." },
      { word: "man", hint: "Not a boy anymore." },
      { word: "run", hint: "Faster than walking." },
      { word: "fox", hint: "Sly and bushy-tailed." },
      { word: "lip", hint: "Used for sipping and smiling." },
      { word: "leg", hint: "Keeps you moving." },
      { word: "toe", hint: "Ten tiny foot soldiers." },
      { word: "rat", hint: "Stealthy snack thief." },
      { word: "mop", hint: "Hero of wet floors." },
      { word: "bat", hint: "Baseball buddy or night flyer." },
      { word: "bug", hint: "Tiny terror or software flaw." },
      { word: "zip", hint: "No words, just fast close." },
      { word: "top", hint: "Spins like it's dizzy." },
      { word: "mud", hint: "Slippery brown fun." },
      { word: "toy", hint: "Child’s favorite distraction." },
      { word: "lid", hint: "Covers your mess." },
      { word: "bow", hint: "Used on gifts or violins." },
      { word: "row", hint: "You do it in a boat." },
      { word: "dot", hint: "Tiny but important." },
      { word: "owl", hint: "Wise night bird." },
      { word: "cup", hint: "Sips and spills." }
    ],
  
    medium: [
      { word: "banana", hint: "Monkey’s favorite weapon." },
      { word: "pencil", hint: "Graphite wizard with an eraser hat." },
      { word: "window", hint: "You stare through it when bored." },
      { word: "bottle", hint: "Holds your drink or message." },
      { word: "button", hint: "Tiny circle of responsibility." },
      { word: "rocket", hint: "Sky-bound metal bird." },
      { word: "circle", hint: "Shape that never ends." },
      { word: "laptop", hint: "Your digital sidekick." },
      { word: "cookie", hint: "Internet uses and eats it." },
      { word: "shower", hint: "Best idea spot." },
      { word: "wallet", hint: "Keeps your broke organized." },
      { word: "guitar", hint: "Six-string stress reliever." },
      { word: "silver", hint: "Second place metal." },
      { word: "forest", hint: "Tree party place." },
      { word: "pirate", hint: "Arr matey with eyepatch." },
      { word: "animal", hint: "Not plant, not robot." },
      { word: "vacuum", hint: "Sucks for a living." },
      { word: "parrot", hint: "Repeats and repeats..." },
      { word: "planet", hint: "We live on one." },
      { word: "mirror", hint: "Reveals your sleepy face." },
      { word: "candle", hint: "Mood light with a melt." },
      { word: "singer", hint: "Mic-hugger on stage." },
      { word: "castle", hint: "Big fancy rock house." },
      { word: "scooter", hint: "Tiny ride, big vibes." },
      { word: "market", hint: "Wallet cries here." },
      { word: "rocket", hint: "Zooms beyond clouds." },
      { word: "cotton", hint: "Fluffy plant stuff." },
      { word: "button", hint: "Holds shirts together." },
      { word: "magnet", hint: "Metal’s biggest fan." },
      { word: "kitten", hint: "Purrfect mini floof." },
      { word: "garden", hint: "Dirt where magic grows." },
      { word: "window", hint: "Look out, not in." },
      { word: "mobile", hint: "Rings and distracts." },
      { word: "wallet", hint: "Money's comfy hideout." },
      { word: "helmet", hint: "Brain protector." },
      { word: "flower", hint: "Smells good, dies fast." },
      { word: "bucket", hint: "Carries water or sand." },
      { word: "rabbit", hint: "Bouncy and twitchy." },
      { word: "camera", hint: "Steals your soul." },
      { word: "remote", hint: "TV dictator." },
      { word: "pickle", hint: "Sour green mystery." },
      { word: "monkey", hint: "Jungle jester." },
      { word: "cheese", hint: "Smells like foot, tastes great." },
      { word: "salmon", hint: "Pink river ninja." },
      { word: "trains", hint: "Choo-choo champion." },
      { word: "balloon", hint: "Full of hot air." },
      { word: "carpet", hint: "Floor fashion." },
      { word: "closet", hint: "Secret mess room." },
      { word: "peanut", hint: "Tiny, crunchy trouble." }
    ],
  
    hard: [
      { word: "triangle", hint: "Angled shape with three corners." },
      { word: "whistle", hint: "Makes sound with a blow." },
      { word: "penguin", hint: "Formal bird that can’t fly." },
      { word: "cactus", hint: "Spiky green survivor." },
      { word: "zipline", hint: "Fast jungle escape." },
      { word: "kitchen", hint: "Smells like food and fire." },
      { word: "blanket", hint: "Cozy sheet of sleep." },
      { word: "tornado", hint: "Spinning wind drama queen." },
      { word: "avocado", hint: "Hipster’s favorite toast item." },
      { word: "library", hint: "Book storage and whisper battles." },
      { word: "pumpkin", hint: "Halloween’s round star." },
      { word: "diamond", hint: "Forever shiny and expensive." },
      { word: "plumber", hint: "Fixes your toilet tantrums." },
      { word: "battery", hint: "Keeps things alive silently." },
      { word: "station", hint: "Train rest stop." },
      { word: "glasses", hint: "Helps your eyes cheat." },
      { word: "dresser", hint: "Clothes hide here." },
      { word: "mailbox", hint: "Awaiting love letters daily." },
      { word: "journey", hint: "Every hero takes one." },
      { word: "sandbox", hint: "Grainy childhood battlefield." },
      { word: "shampoo", hint: "Foamy head potion." },
      { word: "charity", hint: "Giving with good vibes." },
      { word: "texture", hint: "Touchy-feely surface feeling." },
      { word: "mosquito", hint: "Buzzing blood thief." },
      { word: "umbrella", hint: "Rain’s arch nemesis." },
      { word: "notebook", hint: "Brain’s backup drive." },
      { word: "fireman", hint: "Flame’s worst enemy." },
      { word: "iceberg", hint: "What sunk the Titanic." },
      { word: "journey", hint: "Life is one, too." },
      { word: "mailman", hint: "Delivers joy or bills." },
      { word: "volcano", hint: "Mountain with mood swings." },
      { word: "cabinet", hint: "Where snacks hide." },
      { word: "fortune", hint: "Cookie’s best secret." },
      { word: "lightbulb", hint: "Bright idea starter." },
      { word: "freezer", hint: "Cold cube kingdom." },
      { word: "trousers", hint: "Leg prisons." },
      { word: "chimney", hint: "Santa’s shortcut." },
      { word: "refrigerator", hint: "Cold food vault." },
      { word: "calendar", hint: "Keeps your excuses in order." },
      { word: "keyboard", hint: "Typewriter's cooler cousin." },
      { word: "popcorn", hint: "Movie snack explosions." },
      { word: "snorkel", hint: "Breathing tube for fish wannabes." },
      { word: "triangle", hint: "Math symbol or metal music." },
      { word: "printer", hint: "Paper puker." },
      { word: "gravity", hint: "What keeps us grounded." },
      { word: "headache", hint: "Brain’s protest signal." },
      { word: "backpack", hint: "Shoulder buddy for books." },
      { word: "hospital", hint: "Ouch fix station." },
      { word: "vacation", hint: "Work escape mode." },
      { word: "pothole", hint: "Road’s sneaky trap." }
    ]
  };
  const usedWords = {
    easy: [],
    medium: [],
    hard: []
  };
  
  const maxWrong = 6;
  let selectedWord = '';
  let hint = '';
  let correctGuesses = [];
  let allGuessedLetters = [];
  let wrongCount = 0;
  let difficulty = 'easy';
  
  const wordDisplay = document.getElementById("wordDisplay");
  const hintText = document.getElementById("hintText");
  const wrongDisplay = document.getElementById("wrongCount");
  const canvas = document.getElementById("hangmanCanvas");
  const ctx = canvas.getContext("2d");
  const popup = document.getElementById("popup");
  const popupMsg = document.getElementById("popupMessage");
  
  document.getElementById("difficulty").addEventListener("change", (e) => {
    difficulty = e.target.value;
  });
  
  document.getElementById("start-btn").addEventListener("click", startGame);
  
  document.addEventListener("keydown", (e) => {
    const letter = e.key.toUpperCase();
    if (/^[A-Z]$/.test(letter) && selectedWord) {
      handleGuess(letter);
    }
  });
  
  function startGame() {
    const wordObj = getRandomWord();
    selectedWord = wordObj.word.toUpperCase();
    hint = wordObj.hint;
    correctGuesses = [];
    allGuessedLetters = [];
    wrongCount = 0;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.classList.remove("swing");
  
    drawBase();
    updateWordDisplay();
    hintText.textContent = "Hint: " + hint;
    wrongDisplay.textContent = wrongCount;
  
    document.getElementById("gameArea").style.display = "block";
  }
  
  function getRandomWord() {
    const words = wordSets[difficulty];
    let used = usedWords[difficulty];
  
    if (used.length === words.length) {
      usedWords[difficulty] = [];
      used = [];
    }
  
    const unused = words.filter(word => !used.some(u => u.word === word.word));
    const chosen = unused[Math.floor(Math.random() * unused.length)];
    usedWords[difficulty].push(chosen);
  
    return chosen;
  }
  
  function updateWordDisplay() {
    let display = selectedWord
      .split('')
      .map((l, i) =>
        correctGuesses.some(g => g.letter === l && g.index === i) ? l : '_'
      )
      .join(' ');
    wordDisplay.textContent = display;
  
    if (!display.includes('_')) {
      showPopup("🎉 You won!", true);
    }
  }
  
  function handleGuess(letter) {
    const isCorrect = selectedWord.includes(letter);
  
    if (!isCorrect && allGuessedLetters.includes(letter)) return;
  
    if (!allGuessedLetters.includes(letter)) {
      allGuessedLetters.push(letter);
    }
  
    if (!isCorrect) {
      wrongCount++;
      wrongDisplay.textContent = wrongCount;
      drawHangman(wrongCount);
  
      if (wrongCount === maxWrong) {
        endGameLoss();
      }
      return;
    }
  
    const indexes = [...selectedWord]
      .map((l, i) => l === letter ? i : -1)
      .filter(i => i !== -1);
    const revealed = correctGuesses
      .filter(g => g.letter === letter)
      .map(g => g.index);
  
    const unrevealed = indexes.find(i => !revealed.includes(i));
  
    if (unrevealed !== undefined) {
      correctGuesses.push({ letter, index: unrevealed });
      updateWordDisplay();
    }
  }
  
  function endGameLoss() {
    canvas.classList.add("swing");
    let message = "💀 Game Over!";
    if (correctGuesses.length >= 3) message = "👏 You did better!";
    else if (correctGuesses.length >= 1) message = "😓 Not bad.";
  
    setTimeout(() => {
      showPopup(message, false);
    }, 500);
  }
  
  function drawBase() {
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(10, 190);
    ctx.lineTo(140, 190);
    ctx.moveTo(40, 190);
    ctx.lineTo(40, 10);
    ctx.lineTo(100, 10);
    ctx.lineTo(100, 30);
    ctx.stroke();
  }
  
  function drawHangman(stage) {
    ctx.beginPath();
    switch (stage) {
      case 1: ctx.arc(100, 50, 20, 0, Math.PI * 2); break;
      case 2: ctx.moveTo(100, 70); ctx.lineTo(100, 120); break;
      case 3: ctx.moveTo(100, 80); ctx.lineTo(80, 100); break;
      case 4: ctx.moveTo(100, 80); ctx.lineTo(120, 100); break;
      case 5: ctx.moveTo(100, 120); ctx.lineTo(80, 150); break;
      case 6: ctx.moveTo(100, 120); ctx.lineTo(120, 150); break;
    }
    ctx.stroke();
  }
  
  function showPopup(msg, isWin) {
    popupMsg.innerHTML = msg;
    popup.style.display = "flex";
  
    // Clear previous buttons
    popup.querySelectorAll("button").forEach(btn => btn.remove());
  
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.onclick = () => {
      popup.style.display = "none";
      resetToInitialState();
    };
    popup.appendChild(closeButton);
  
    const actionButton = document.createElement("button");
    actionButton.textContent = isWin ? "▶️ Play Next" : "🔁 Try Again";
    actionButton.onclick = () => {
      popup.style.display = "none";
      startGame();
    };
    popup.appendChild(actionButton);
  }
  
  function resetToInitialState() {
    selectedWord = '';
    hint = '';
    correctGuesses = [];
    allGuessedLetters = [];
    wrongCount = 0;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    wordDisplay.textContent = '';
    hintText.textContent = 'Hint: ';
    wrongDisplay.textContent = '0';
    document.getElementById("gameArea").style.display = "none";
  }