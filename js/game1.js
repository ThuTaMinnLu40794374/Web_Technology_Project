const sceneImage = document.getElementById("sceneImage");
const sceneTitle = document.getElementById("sceneTitle");
const sceneText = document.getElementById("sceneText");
const choicesDiv = document.getElementById("choices");

/* STORY */

const story = {

    scene1: {
        title: "Halloween Night",
        text: "It is a cold Halloween night. Pumpkins glow across the neighborhood and spooky decorations cover every house. You carry your pumpkin basket and begin your magical candy adventure.",
        image: "../img/g1p1.png",
        choices: [{ text: "Continue", next: "scene2" }]
    },

    scene2: {
        title: "Candy Basket Ready",
        text: "You grab your pumpkin basket and step outside. Orange lights glow along the street and mysterious laughter echoes in the distance.",
        image: "../img/g1p2.png",
        choices: [{ text: "Walk Forward", next: "scene3" }]
    },

    scene3: {
        title: "Dark Street",
        text: "You walk through decorated houses and foggy sidewalks. One crooked house looks darker than the rest.",
        image: "../img/g1p3.png",
        choices: [{ text: "Approach the House", next: "scene4" }]
    },

    scene4: {
        title: "The Witch's House",
        text: "A crooked wooden house glows with green smoke. A witch appears behind the door.",
        image: "../img/g1p4.png",
        choices: [{ text: "Knock", next: "scene5" }]
    },

    scene5: {
        title: "The Witch Appears",
        text: "The witch smiles mysteriously. 'Answer my quiz correctly and I shall reward you with magical candy!'",
        image: "../img/g1p5.png",
        choices: [{ text: "Start Quiz", next: "witchQuiz" }]
    },

    scene7: {
        title: "Candy Reward",
        text: "The witch laughs loudly and fills your basket with glowing magical candy.",
        image: "../img/g1p6.png",
        choices: [{ text: "Continue", next: "scene8" }]
    },

    /* WOLF */

    scene8: {
        title: "Walking Forward",
        text: "You continue walking through the spooky street until another strange house appears.",
        image: "../img/g1p8.png",
        choices: [{ text: "Go to next house", next: "scene9" }]
    },

    scene9: {
        title: "Wolf's House",
        text: "The door has claw marks. You hear deep howling from inside.",
        image: "../img/g1p9.png",
        choices: [{ text: "Knock", next: "scene10" }]
    },

    scene10: {
        title: "The Wolf Appears",
        text: "A giant wolf opens the door slowly. 'Answer my questions if you want my candy.'",
        image: "../img/g1p10.png",
        choices: [{ text: "Start Quiz", next: "wolfQuiz" }]
    },

    scene12: {
        title: "Wolf Candy Reward",
        text: "The wolf tosses candies into your basket before disappearing into the darkness.",
        image: "../img/g1p12.png",
        choices: [{ text: "Continue", next: "scene13" }]
    },

    /* FRANK */

    scene13: {
        title: "Storm House",
        text: "Further down the road lightning flashes above a metal house.",
        image: "../img/g1p13.png",
        choices: [{ text: "Approach", next: "scene14" }]
    },

    scene14: {
        title: "Frankenstein House",
        text: "The door creaks open and sparks flash along the walls.",
        image: "../img/g1p14.png",
        choices: [{ text: "Knock", next: "scene15" }]
    },

    scene15: {
        title: "Frankenstein Appears",
        text: "A giant green monster slowly opens the door.",
        image: "../img/g1p15.png",
        choices: [{ text: "Start Quiz", next: "frankQuiz" }]
    },

    scene16: {
        title: "Frankenstein Candy",
        text: "Frankenstein smiles and gives you electric candy.",
        image: "../img/g1p16.png",
        choices: [{ text: "Continue", next: "scene17" }]
    },

    /* MUMMY */

    scene17: {
        title: "Ancient Alley",
        text: "You walk into a dusty alley where a strange house covered in cloth stands.",
        image: "../img/g1p17.png",
        choices: [{ text: "Go Forward", next: "scene18" }]
    },

    scene18: {
        title: "Mummy House",
        text: "Sand falls from the doorway as the door opens slowly.",
        image: "../img/g1p18.png",
        choices: [{ text: "Knock", next: "scene19" }]
    },

    scene19: {
        title: "The Mummy Appears",
        text: "A mummy wrapped in ancient bandages stares at you.",
        image: "../img/g1p19.png",
        choices: [{ text: "Start Quiz", next: "mummyQuiz" }]
    },

    scene20: {
        title: "Mummy Candy",
        text: "The mummy places golden candies into your basket.",
        image: "../img/g1p20.png",
        choices: [{ text: "Continue", next: "scene21" }]
    },

    /* DRACULA */

    scene21: {
        title: "The Final Castle",
        text: "At the end of the street stands a giant castle with bats flying around it.",
        image: "../img/g1p21.png",
        choices: [{ text: "Enter Castle", next: "scene22" }]
    },

    scene22: {
        title: "Castle Hall",
        text: "The massive castle doors open slowly as fog enters the hallway.",
        image: "../img/g1p22.png",
        choices: [{ text: "Knock", next: "scene23" }]
    },

    scene23: {
        title: "Dracula Appears",
        text: "Dracula smiles with glowing red eyes.",
        image: "../img/g1p23.png",
        choices: [{ text: "Start Quiz", next: "draculaQuiz" }]
    },

    scene24: {
        title: "Legendary Candy",
        text: "Dracula rewards you with the rarest candy in the world.",
        image: "../img/g1p24.png",
        choices: [{ text: "Continue", next: "scene25" }]
    },

    scene25: {
        title: "Candy Master",
        text: "You collected ALL the magical candies in the neighborhood. You have completed the Halloween adventure!",
        image: "../img/g1p25.png",
        choices: [
            { text: "Download Achievement", next: "downloadAchievement" },
            { text: "Retry Game", next: "scene1" },
            { text: "Exit Game", next: "exitGame" }
        ]
    },

    scene0: {
        title: "Game Over",
        text: "Time ran out. Your candy hunt failed.",
        image: "../img/g1p0.png",
        choices: [
            { text: "Try Again", next: "scene1" },
            { text: "Exit Game", next: "exitGame" }
        ]
    }

};


/* ---------------- ADD ACHIEVEMENT FUNCTION ---------------- */
window.addAchievement = function (name) {

    if (!localStorage.getItem("storymazeUser")) {
        alert("Please login to save achievements!");
        return;
    }

    let achievements = JSON.parse(localStorage.getItem("storymazeAchievements")) || [];

    if (!achievements.includes(name)) {
        achievements.push(name);
        localStorage.setItem("storymazeAchievements", JSON.stringify(achievements));
    }

    // refresh list
    if (typeof loadAchievements === "function") {
        loadAchievements();
    }
};

/* ---------------- LOAD SCENE ---------------- */
function loadScene(sceneName) {

    if (sceneName === "witchQuiz") return startWitchQuiz();
    if (sceneName === "wolfQuiz") return startWolfQuiz();
    if (sceneName === "frankQuiz") return startFrankQuiz();
    if (sceneName === "mummyQuiz") return startMummyQuiz();
    if (sceneName === "draculaQuiz") return startDraculaQuiz();
    if (sceneName === "downloadAchievement") return downloadAchievement();
    if (sceneName === "exitGame") return window.location.href = "gamepage.html";

    const scene = story[sceneName];

    sceneImage.src = scene.image;
    sceneTitle.innerText = scene.title;
    sceneText.innerText = scene.text;
    choicesDiv.innerHTML = "";

    scene.choices.forEach(choice => {
        let btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerText = choice.text;
        btn.onclick = () => loadScene(choice.next);
        choicesDiv.appendChild(btn);
    });

    // Automatically add achievement when scene25 loads
    if (sceneName === "scene25") {
        window.addAchievement("CANDY MASTER");
    }
}



/* RANDOMIZE ANSWERS */

function shuffleAnswers(q) {

    let answers = q.a.map((ans, i) => ({ text: ans, correct: i === q.c }));

    answers.sort(() => Math.random() - 0.5);

    let correctIndex = answers.findIndex(a => a.correct);

    return {
        question: q.q,
        answers: answers.map(a => a.text),
        correct: correctIndex
    };

}


/* QUIZ ENGINE */

function runQuiz(questions, successScene) {

    questions = questions.map(q => shuffleAnswers(q));

    let current = 0;
    let time = 20;

    sceneText.innerHTML = `Time: <span id="timer">20</span>s`;
    choicesDiv.innerHTML = "";

    let timerDisplay = document.getElementById("timer");

    let timer = setInterval(() => {
        time--;
        timerDisplay.innerText = time;

        if (time <= 0) {
            clearInterval(timer);
            loadScene("scene0");
        }
    }, 1000);


    function showQuestion() {

        let q = questions[current];

        sceneText.innerHTML = `${q.question}<br><br>
            <div class="timer-box">
                Time: <span id="timer">${time}</span>s
            </div>`;
        timerDisplay = document.getElementById("timer");

        choicesDiv.innerHTML = "";

        q.answers.forEach((ans, i) => {

            let btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.innerText = ans;

            btn.onclick = () => {

                if (i === q.correct) {

                    current++;

                    if (current === questions.length) {
                        clearInterval(timer);
                        loadScene(successScene);
                    } else {
                        showQuestion();
                    }

                } else {

                    btn.classList.add("shake");

                    setTimeout(() => {
                        btn.classList.remove("shake");
                    }, 400);

                }

            };

            choicesDiv.appendChild(btn);

        });

    }

    showQuestion();

}


/* QUIZZES */

function startWitchQuiz() {

    sceneImage.src = "../img/g1p5.png";
    sceneTitle.innerText = "Witch Quiz";

    runQuiz([
        { q: "What do witches ride to travel in the sky?", a: ["Broomstick", "Horse", "Flying Carpet"], c: 0 },
        { q: "What animal is commonly a witch's companion?", a: ["Black Cat", "Dog", "Owl"], c: 0 },
        { q: "What do witches usually brew in their cauldron?", a: ["Potion", "Soup", "Coffee"], c: 0 }
    ], "scene7");

}

function startWolfQuiz() {

    sceneImage.src = "../img/g1p10.png";
    sceneTitle.innerText = "Wolf Quiz";

    runQuiz([
        { q: "Which animal is famous for howling at the moon?", a: ["Wolf", "Fox", "Dog"], c: 0 },
        { q: "A group of wolves is called a?", a: ["Pack", "Herd", "Team"], c: 0 },
        { q: "What type of animal is a wolf?", a: ["Carnivore", "Herbivore", "Omnivore"], c: 0 }
    ], "scene12");

}

function startFrankQuiz() {

    sceneImage.src = "../img/g1p15.png";
    sceneTitle.innerText = "Frankenstein Quiz";

    runQuiz([
        { q: "Frankenstein's monster was created by a?", a: ["Scientist", "Wizard", "Doctor"], c: 0 },
        { q: "What famous feature does Frankenstein have?", a: ["Bolts in neck", "Wings", "Horns"], c: 0 },
        { q: "What powered the monster to life?", a: ["Electricity", "Fire", "Magic"], c: 0 }
    ], "scene16");

}

function startMummyQuiz() {

    sceneImage.src = "../img/g1p19.png";
    sceneTitle.innerText = "Mummy Quiz";

    runQuiz([
        { q: "Mummies are strongly connected with which civilization?", a: ["Ancient Egypt", "Rome", "Greece"], c: 0 },
        { q: "What are mummies wrapped in?", a: ["Bandages", "Leaves", "Paper"], c: 0 },
        { q: "Where were mummies buried?", a: ["Tombs", "Caves", "Houses"], c: 0 }
    ], "scene20");

}

function startDraculaQuiz() {

    sceneImage.src = "../img/g1p23.png";
    sceneTitle.innerText = "Dracula Quiz";

    runQuiz([
        { q: "Dracula is known as a?", a: ["Vampire", "Ghost", "Zombie"], c: 0 },
        { q: "What do vampires drink?", a: ["Blood", "Water", "Juice"], c: 0 },
        { q: "What do vampires fear most?", a: ["Sunlight", "Rain", "Snow"], c: 0 }
    ], "scene24");

}


/* DOWNLOAD ACHIEVEMENT */

function downloadAchievement() {

    let link = document.createElement("a");
    link.href = "../img/g1achievement.png";
    link.download = "Escaped_Halloween.png";
    link.click();

}


/* START */

loadScene("scene1");