// Array of countries and their information
const countries = [
  { country: "France", capital: "Paris", famousLandmark: "Eiffel Tower", currency: "Euro" },
  { country: "Spain", capital: "Madrid", famousLandmark: "Sagrada Familia", currency: "Euro" },
  { country: "Italy", capital: "Rome", famousLandmark: "Colosseum", currency: "Euro" },
  { country: "Japan", capital: "Tokyo", famousLandmark: "Mount Fuji", currency: "Japanese Yen" },
  { country: "Brazil", capital: "Brasília", famousLandmark: "Christ the Redeemer", currency: "Brazilian Real" },
  { country: "Germany", capital: "Berlin", famousLandmark: "Brandenburg Gate", currency: "Euro" },
  { country: "United Kingdom", capital: "London", famousLandmark: "Big Ben", currency: "Pound Sterling" },
  { country: "Australia", capital: "Canberra", famousLandmark: "Sydney Opera House", currency: "Australian Dollar" },
  { country: "India", capital: "New Delhi", famousLandmark: "Taj Mahal", currency: "Indian Rupee" },
  { country: "China", capital: "Beijing", famousLandmark: "Great Wall of China", currency: "Chinese Yuan" },
  { country: "Canada", capital: "Ottawa", famousLandmark: "Niagara Falls", currency: "Canadian Dollar" },
  { country: "United States", capital: "Washington, D.C.", famousLandmark: "Statue of Liberty", currency: "US Dollar" },
  { country: "Mexico", capital: "Mexico City", famousLandmark: "Chichén Itzá", currency: "Mexican Peso" },
  { country: "Russia", capital: "Moscow", famousLandmark: "St. Basil's Cathedral", currency: "Russian Ruble" },
  { country: "Egypt", capital: "Cairo", famousLandmark: "Great Pyramid of Giza", currency: "Egyptian Pound" },
  { country: "Argentina", capital: "Buenos Aires", famousLandmark: "Casa Rosada", currency: "Argentine Peso" },
  { country: "South Africa", capital: "Pretoria", famousLandmark: "Table Mountain", currency: "South African Rand" },
  { country: "South Korea", capital: "Seoul", famousLandmark: "Gyeongbokgung Palace", currency: "South Korean Won" },
  { country: "Indonesia", capital: "Jakarta", famousLandmark: "Borobudur Temple", currency: "Indonesian Rupiah" },
  { country: "Nigeria", capital: "Abuja", famousLandmark: "National Mosque", currency: "Nigerian Naira" },
  { country: "Saudi Arabia", capital: "Riyadh", famousLandmark: "Kaaba", currency: "Saudi Riyal" },
  { country: "Turkey", capital: "Ankara", famousLandmark: "Hagia Sophia", currency: "Turkish Lira" },
  { country: "Iran", capital: "Tehran", famousLandmark: "Naqsh-e Jahan Square", currency: "Iranian Rial" },
  { country: "Pakistan", capital: "Islamabad", famousLandmark: "Badshahi Mosque", currency: "Pakistani Rupee" },
  { country: "Vietnam", capital: "Hanoi", famousLandmark: "Ha Long Bay", currency: "Vietnamese Dong" },
  { country: "Thailand", capital: "Bangkok", famousLandmark: "Grand Palace", currency: "Thai Baht" },
  { country: "Philippines", capital: "Manila", famousLandmark: "Intramuros", currency: "Philippine Peso" },
  { country: "Colombia", capital: "Bogotá", famousLandmark: "Salt Cathedral of Zipaquirá", currency: "Colombian Peso" },
  { country: "Peru", capital: "Lima", famousLandmark: "Machu Picchu", currency: "Peruvian Sol" },
  { country: "Chile", capital: "Santiago", famousLandmark: "Easter Island", currency: "Chilean Peso" },
  { country: "Venezuela", capital: "Caracas", famousLandmark: "Angel Falls", currency: "Venezuelan Bolívar" },
  { country: "Algeria", capital: "Algiers", famousLandmark: "Casbah of Algiers", currency: "Algerian Dinar" },
  { country: "Morocco", capital: "Rabat", famousLandmark: "Jardin Majorelle", currency: "Moroccan Dirham" },
  { country: "Tunisia", capital: "Tunis", famousLandmark: "The Medina of Tunis", currency: "Tunisian Dinar" },
  { country: "Libya", capital: "Tripoli", famousLandmark: "Arch of Marcus Aurelius", currency: "Libyan Dinar" },
  { country: "Sudan", capital: "Khartoum", famousLandmark: "Pyramid of Meroë", currency: "Sudanese Pound" },
  { country: "Ethiopia", capital: "Addis Ababa", famousLandmark: "Rock-Hewn Churches of Lalibela", currency: "Ethiopian Birr" },
  { country: "Kenya", capital: "Nairobi", famousLandmark: "Masai Mara National Reserve", currency: "Kenyan Shilling" },
  { country: "South Sudan", capital: "Juba", famousLandmark: "Nimule National Park", currency: "South Sudanese Pound" },
  { country: "Ghana", capital: "Accra", famousLandmark: "Kwame Nkrumah Mausoleum", currency: "Ghanaian Cedi" },
  { country: "Cameroon", capital: "Yaoundé", famousLandmark: "Mount Cameroon", currency: "Central African CFA Franc" },
  { country: "Democratic Republic of the Congo", capital: "Kinshasa", famousLandmark: "Kinshasa Cathedral", currency: "Congolese Franc" },
  { country: "Tanzania", capital: "Dodoma", famousLandmark: "Mount Kilimanjaro", currency: "Tanzanian Shilling" },
  { country: "Mozambique", capital: "Maputo", famousLandmark: "Tofo Beach", currency: "Mozambican Metical" },
  { country: "Madagascar", capital: "Antananarivo", famousLandmark: "Avenue of the Baobabs", currency: "Malagasy Ariary" },
  { country: "Angola", capital: "Luanda", famousLandmark: "Fortaleza de São Miguel", currency: "Angolan Kwanza" },
  // Add more countries here! 
  { country: "Portugal", capital: "Lisbon", famousLandmark: "Jerónimos Monastery", currency: "Euro" },
  { country: "Netherlands", capital: "Amsterdam", famousLandmark: "Anne Frank House", currency: "Euro" },
  { country: "Sweden", capital: "Stockholm", famousLandmark: "Stockholm Palace", currency: "Swedish Krona" },
  { country: "Finland", capital: "Helsinki", famousLandmark: "Helsinki Cathedral", currency: "Euro" },
  { country: "Norway", capital: "Oslo", famousLandmark: "Oslo Opera House", currency: "Norwegian Krone" },
  { country: "Denmark", capital: "Copenhagen", famousLandmark: "Little Mermaid Statue", currency: "Danish Krone" },
  { country: "Poland", capital: "Warsaw", famousLandmark: "Warsaw Old Town", currency: "Polish Złoty" },
  { country: "Czech Republic", capital: "Prague", famousLandmark: "Prague Castle", currency: "Czech Koruna" },
  { country: "Hungary", capital: "Budapest", famousLandmark: "Hungarian Parliament Building", currency: "Hungarian Forint" },
  { country: "Romania", capital: "Bucharest", famousLandmark: "Palace of the Parliament", currency: "Romanian Leu" },
  { country: "Bulgaria", capital: "Sofia", famousLandmark: "Alexander Nevsky Cathedral", currency: "Bulgarian Lev" },
  { country: "Greece", capital: "Athens", famousLandmark: "Acropolis", currency: "Euro" },
  { country: "Belgium", capital: "Brussels", famousLandmark: "Grand Place", currency: "Euro" },
  { country: "Switzerland", capital: "Bern", famousLandmark: "Zurich", currency: "Swiss Franc" },
  { country: "Austria", capital: "Vienna", famousLandmark: "Schönbrunn Palace", currency: "Euro" },
  { country: "Ireland", capital: "Dublin", famousLandmark: "Guinness Storehouse", currency: "Euro" },
  { country: "Iceland", capital: "Reykjavík", famousLandmark: "Hallgrímskirkja Church", currency: "Icelandic Króna" },
  { country: "Luxembourg", capital: "Luxembourg City", famousLandmark: "Grand Ducal Palace", currency: "Euro" },
  { country: "Cyprus", capital: "Nicosia", famousLandmark: "Kyrenia Castle", currency: "Euro" },
  { country: "Malta", capital: "Valletta", famousLandmark: "Upper Barrakka Gardens", currency: "Euro" }
];

// Array of mythical creatures and their corresponding time thresholds
const mythicalCreatures = [
  {
    time: 5,
    creature: "Dragon",
    info: {
      origin: "Celtic and European folklore",
      speed: "Variable, depending on size and type",
      lifespan: "Hundreds to thousands of years"
    }
  },
  {
    time: 10,
    creature: "Phoenix",
    info: {
      origin: "Ancient Egypt and Greek mythology",
      speed: "Uncertain, but likely fast",
      lifespan: "Regenerates after death, essentially immortal"
    }
  },
  {
    time: 15,
    creature: "Griffin",
    info: {
      origin: "Ancient Mesopotamia and Greek mythology",
      speed: "Fast, able to fly and run",
      lifespan: "Unknown, but likely long"
    }
  },
  {
    time: 20,
    creature: "Mermaid",
    info: {
      origin: "Various cultures, including Greek and Norse mythology",
      speed: "Swift swimmers",
      lifespan: "Unknown, but possibly long due to connection to the sea"
    }
  },
  {
    time: 25,
    creature: "Centaur",
    info: {
      origin: "Greek mythology",
      speed: "Fast runners, able to gallop",
      lifespan: "Unknown, but likely long due to their connection to horses"
    }
  }
];

let score = 0;
let timeRemaining = 30;
let timerInterval;

document.addEventListener("DOMContentLoaded", function() {
  startGame();
});

function startGame() {
  // Choose a random country from the array
  const randomIndex = Math.floor(Math.random() * countries.length);
  const currentCountry = countries[randomIndex];

  // Choose a random category
  const categories = ["capital", "famousLandmark", "currency"];
  const randomCategoryIndex = Math.floor(Math.random() * categories.length);
  const chosenCategory = categories[randomCategoryIndex];

  // Display the hint based on the chosen category
  document.getElementById("hints").textContent = `Hint: ${currentCountry[chosenCategory]}`;

  // Store the information for checking the guess
  window.currentCountryIndex = randomIndex;
  window.chosenCategory = chosenCategory;

  // Reset the result message
  document.getElementById("result").textContent = "";

  // Clear the input field
  document.getElementById("userInput").value = "";

  // Focus on the input field
  document.getElementById("userInput").focus();

  // Display the chosen category (already capitalized)
  document.getElementById("category").textContent = `Category: ${chosenCategory.charAt(0).toUpperCase() + chosenCategory.slice(1)}`;

  // Show the navbar when the game starts
  const navbar = document.querySelector(".navbar");
  navbar.style.display = "flex";

  // Reset timer
  timeRemaining = 30;
  document.getElementById("timer").textContent = `Time: ${timeRemaining}`;

  // Start timer
  clearInterval(timerInterval); // Clear any existing interval
  timerInterval = setInterval(updateTimer, 1000);

  // Hide the next button
  document.getElementById("nextButton").style.display = "none";

  // Reset the mythical creature display
  document.getElementById("mythicalCreature").innerHTML = ""; 
  document.getElementById("creatureInfo").innerHTML = ''; // Clear previous info
}

function checkGuess() {
  const userGuess = document.getElementById("userInput").value.trim().toLowerCase();
  const correctCountry = countries[window.currentCountryIndex].country.toLowerCase();
  const resultElement = document.getElementById("result");

  if (userGuess === correctCountry) {
    resultElement.textContent = "Correct!";
    resultElement.style.color = "green";

    const correctSound = new Audio("./ding-126626.mp3");
    correctSound.play();

    score++;
    document.getElementById("score").textContent = `Score: ${score}`;

    // Check time to award mythical creature
    mythicalCreatures.forEach(creature => {
      if (timeRemaining <= creature.time) {
        alert(`You've earned a ${creature.creature}!`);
        const creatureElement = document.getElementById("mythicalCreature");
        creatureElement.textContent = `Mythical Creature: ${creature.creature}`; // Update this line

        // Display creature information
        const creatureInfo = document.getElementById("creatureInfo");
        creatureInfo.innerHTML = `
          <p><strong>Origin:</strong> ${creature.info.origin}</p>
          <p><strong>Speed:</strong> ${creature.info.speed}</p>
          <p><strong>Lifespan:</strong> ${creature.info.lifespan}</p>
        `;
      }
    });

  } else {
    resultElement.textContent = "Incorrect.";
    resultElement.style.color = "red";

    const incorrectSound = new Audio("./buzzer-or-wrong-answer-20582.mp3");
    incorrectSound.play();
  }

  clearInterval(timerInterval);
  document.getElementById("nextButton").style.display = "block";
}

function updateTimer() {
  timeRemaining--;
  document.getElementById("timer").textContent = `Time: ${timeRemaining}`;

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    document.getElementById("result").textContent = "Time's up!";
    document.getElementById("result").style.color = "red";
  }
}

function nextRound() {
  clearInterval(timerInterval);
  startGame();
}

// Display the mythical creature section by default
document.getElementById("mythicalCreatureSection").style.display = "block";
