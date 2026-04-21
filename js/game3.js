const sceneImage = document.getElementById("sceneImage");
const sceneTitle = document.getElementById("sceneTitle");
const sceneText = document.getElementById("sceneText");
const choicesDiv = document.getElementById("choices");
const heartsDiv = document.getElementById("hearts");

const quizModal = document.getElementById("quizModal");
const quizQuestion = document.getElementById("quizQuestion");
const quizAnswers = document.getElementById("quizAnswers");
const quizTimer = document.getElementById("quizTimer");

const jungleScenes = [
    "scene1", "scene2", "scene4", "scene5", "scene6",
    "scene8", "scene10", "scene12", "scene13",
    "scene18", "scene21", "scene22"
];

const riverScenes = ["scene7", "scene9", "scene15"];

let hearts = 2;

/* UPDATE HEARTS */
function updateHearts() {
    heartsDiv.innerHTML = "";
    for (let i = 0; i < hearts; i++) {
        heartsDiv.innerHTML += '<i class="fa-solid fa-heart"></i>';
    }
}

/* CHECK IF GAME OVER */
function checkGameOver() {
    if (hearts <= 0) {
        alert("Your 3 lives are gone. You will need to restart the game!");
        hearts = 2;               // reset hearts
        updateHearts();
        loadScene("scene1");      // send back to beginning
        return true;
    }
    return false;
}

/* PLAYER DEATH - GENERAL */
function playerDeath() {
    hearts--;
    updateHearts();
    if (checkGameOver()) return;    // check if all lives are gone
    alert("The monster catches you and you die! One heart lost!");
    loadScene("scene20");
}


/* SCENE16 SPECIFIC DEATH */
function scene16Death() {
    hearts--;
    updateHearts();
    if (checkGameOver()) return; // if all hearts gone, game resets to scene1
    alert("The Shadow Figure takes your soul! One heart lost!");
}

function waterfallDeath() {
    hearts--;
    updateHearts();

    if (checkGameOver()) return;

    alert("You fell from the waterfall! One heart lost.");
}

/* STORY */

const story = {

    scene1: {
        title: "The Jungle Entrance",
        text: "You stand at the edge of a dense, foreboding jungle. The tall trees sway as a chilling wind whispers secrets of unknown dangers. Your adventure begins here, and every choice could lead to glory or peril.",
        image: "../img/g3p1.png",
        choices: [
            { text: "Step Into The Jungle", next: "scene2" }
        ]
    },

    scene2: {
        title: "Whispers Among the Trees",
        text: "The jungle grows thicker with every step. Strange noises echo in the shadows, and the feeling of being watched prickles your skin. Each movement feels heavier as the jungle seems alive around you.",
        image: "../img/g3p2.png",
        choices: [
            { text: "Move Forward", next: "scene3" },
            { text: "Go Back", next: "scene1" }
        ]
    },

    scene3: {
        title: "Fork in the Path",
        text: "You reach a clearing bathed in soft green light. A dark, ominous cave yawns ahead, while a glowing river winds peacefully nearby with a small boat bobbing at the shore. Every path promises adventure, yet danger lurks.",
        image: "../img/g3p3.png",
        choices: [
            { text: "Go Into The Cave", next: "scene4" },
            { text: "Go Into The River", next: "scene5" },
            { text: "Go Back", next: "scene2" }
        ]
    },

    scene4: {
        title: "Cave of Shadows",
        text: "Cold, stale air flows from the cave entrance, and darkness seems to swallow the light behind you. The faint sound of dripping water echoes ominously, making every step uncertain.",
        image: "../img/g3p4.png",
        choices: [
            { text: "Enter The Cave", next: "scene6" },
            { text: "Go Back", next: "scene3" }
        ]
    },

    scene5: {
        title: "Mystic River",
        text: "The glowing river shimmers under a dim canopy of jungle trees. The water sparkles as though enchanted, and the wooden boat waits, inviting you to sail away from the unknown dangers lurking in the forest.",
        image: "../img/g3p5.png",
        choices: [
            { text: "Get Into The Boat", next: "scene7" },
            { text: "Go Back", next: "scene3" }
        ]
    },

    scene6: {
        title: "Into the Darkness",
        text: "Inside the cave, darkness thickens with every step. The air grows colder and your footsteps echo loudly. Shadows stretch across jagged walls, making it impossible to tell what lies ahead.",
        image: "../img/g3p6.png",
        choices: [
            { text: "Move Forward", next: "scene8" },
            { text: "Go Back", next: "scene4" }
        ]
    },

    scene7: {
        title: "Sailing Into The River",
        text: "You step into the fragile wooden boat and begin drifting down the glowing river. The water shimmers with an unnatural light as the jungle canopy closes above you. The deeper you travel, the more mysterious the river becomes.",
        image: "../img/g3p7.png",
        choices: [
            { text: "Move Forward", next: "scene9" },
            { text: "Go Back", next: "scene5" }
        ]
    },

    scene8: {
        title: "Two Cave Paths",
        text: "The cave splits into two tunnels, each shadowy and foreboding. A sense of unease fills the air as if unseen eyes are watching your every move. The wrong choice here could cost you dearly.",
        image: "../img/g3p8.png",
        choices: [
            { text: "Go Left", next: "scene10" },
            { text: "Go Right", next: "scene12" },
            { text: "Go Back", next: "scene6" }
        ]
    },

    scene9: {
        title: "The Magic River",
        text: "The river grows quieter and the mist thickens around you. Strange ripples appear in the glowing water and the boat gently rocks as something unseen moves beneath the surface.",
        image: "../img/g3p9.png",
        choices: [
            { text: "Move Forward", next: "scene11" },
            { text: "Go Back", next: "scene7" }
        ]
    },

    scene10: {
        title: "Deep Cave",
        text: "You venture deeper into the cave, the light from the entrance now a distant memory. Every sound seems amplified: a drip of water, the scrape of stone, a whisper of movement behind you.",
        image: "../img/g3p10.png",
        choices: [
            { text: "Move Forward", next: "scene14" },
            { text: "Go Back", next: "scene8" }
        ]
    },

    scene11: {
        title: "River Monster Attack",
        text: "Suddenly the water explodes behind you! A terrifying river monster rises from the depths and begins chasing your boat. To escape, you must answer the questions before the monster catches you.",
        image: "../img/g3p11.png",
        choices: [
            { text: "Start Quiz", next: "riverQuiz" }
        ]
    },

    scene12: {
        title: "Dark Tunnel",
        text: "The tunnel narrows, and cold air bites at your skin. Shadows dance along the walls, and you feel the oppressive weight of the cave pressing in. Every step must be careful and deliberate.",
        image: "../img/g3p12.png",
        choices: [
            { text: "Move Forward", next: "scene18" },
            { text: "Go Back", next: "scene8" }
        ]
    },


    scene13: {
        title: "Escaped From River Monster",
        text: "Your quick thinking helps you outsmart the monster. The creature sinks back into the depths while your boat continues drifting forward through the misty jungle river.",
        image: "../img/g3p13.png",
        choices: [
            { text: "Move Forward", next: "scene15" }
        ]
    },

    scene14: {
        title: "Shadow Figure",
        text: "A dark silhouette emerges from the shadows, its form shifting and unnatural. You can feel its gaze upon you, cold and merciless. Your heart pounds as the tension builds, every instinct screaming to flee.",
        image: "../img/g3p14.png",
        choices: [
            { text: "Move Forward", next: "scene16" },
            { text: "Go Back", next: "scene10" }
        ]
    },

    scene15: {
        title: "Waterfall Dead End",
        text: "The river suddenly begins rushing faster. Ahead you see a massive waterfall crashing into darkness below. There is barely time to decide what to do.",
        image: "../img/g3p15.png",
        choices: [
            { text: "Move Forward", next: "scene17" },
            { text: "Turn Back", next: "scene3" }
        ]
    },

    scene16: {
        title: "Shadow Figure Takes Your Soul",
        text: "The shadow lunges with terrifying speed. A chilling force grips you, and you feel the warmth of life slipping away. One of your hearts is lost!",
        image: "../img/g3p16.png",
        choices: [
            // Remove any next scene here so player must restart after death
            { text: "Restart Adventure", next: "scene1" }
        ],
        onEnter: scene16Death
    },

    scene17: {
        title: "Falling From The Waterfall",
        text: "The boat is pulled over the roaring waterfall. You fall endlessly into the mist below. Your adventure ends here.",
        image: "../img/g3p17.png",
        choices: [
            { text: "Restart Adventure", next: "scene1" }
        ],
        onEnter: waterfallDeath
    },

    scene18: {
        title: "Cave Exit",
        text: "A faint glimmer of light appears ahead, promising escape. Yet something unseen stalks you through the shadows. Every step feels urgent, and the thrill of the chase quickens your heartbeat.",
        image: "../img/g3p18.png",
        choices: [
            { text: "Move Forward", next: "scene20" },
            { text: "Go Back", next: "scene12" }
        ]
    },

    scene20: {
        title: "Monster Chase",
        text: "The monstrous figure chases you relentlessly. To escape, you must answer three challenging questions correctly before time runs out. Your mind must be as sharp as your legs are fast.",
        image: "../img/g3p20.png",
        choices: [
            { text: "Start Quiz", next: "quiz" }
        ]
    },

    scene21: {
        title: "Escaped the Cave",
        text: "You finally break free from the cave, inhaling the fresh jungle air. The monster's roar fades in the distance as sunlight glints through the leaves, offering a moment of triumph and relief.",
        image: "../img/g3p21.png",
        choices: [
            { text: "Move Forward", next: "scene22" }
        ]
    },

    scene22: {
        title: "The Lost Relic",
        text: "Deep within ancient jungle ruins, you discover the legendary Lost Relic glowing with mystical energy. Its light dances across moss-covered stones, casting long shadows in the dense forest. The adventure's end feels near, yet awe and wonder fill you.",
        image: "../img/g3p22.png",
        choices: [
            { text: "Explore", next: "scene23" }
        ]
    },

    scene23: {
        title: "Treasure Discovered",
        text: "You have finally claimed the Lost Relic, a reward for your courage and cunning. The jungle seems to bow in quiet respect as your adventure concludes. Victory and wonder fill your senses.",
        image: "../img/g3p23.png",
        choices: [
            { text: "Download Achievement", action: "download" },
            { text: "Restart Game", next: "scene1" },
            { text: "Exit Game", action: "exit" }
        ]
    }

};

/* ---------------- SOUND SYSTEM ---------------- */

let soundUnlocked = false;

const sounds = {
    jungle: new Audio("/Web_Technology_Project/sounds/jungle.mp3"),
    caveRiver: new Audio("/Web_Technology_Project/sounds/caveriver.mp3"),
    riverMonster: new Audio("/Web_Technology_Project/sounds/rivermonster.mp3"),
    shadowFigure: new Audio("/Web_Technology_Project/sounds/shadowfigure.mp3"),
    waterfall: new Audio("/Web_Technology_Project/sounds/waterfall.mp3"),
    died: new Audio("/Web_Technology_Project/sounds/died.mp3"),
    monster: new Audio("/Web_Technology_Project/sounds/monster.mp3"),

    footstep: new Audio("/Web_Technology_Project/sounds/footstep.mp3"),
    boatSplash: new Audio("/Web_Technology_Project/sounds/boatsplash.mp3"),

    click: new Audio("/Web_Technology_Project/sounds/click.mp3"),

    survived: new Audio("/Web_Technology_Project/sounds/survived.mp3")
};

/* LOOP SETTINGS */
sounds.jungle.loop = true;
sounds.caveRiver.loop = true;

/* VOLUME */
Object.values(sounds).forEach(s => s.volume = 0.6);

/* UNLOCK AUDIO */
function unlockAudio() {
    if (soundUnlocked) return;
    soundUnlocked = true;

    sounds.jungle.play().catch(() => { });
}

document.addEventListener("pointerdown", unlockAudio, { once: true });
document.addEventListener("keydown", unlockAudio, { once: true });

/* STOP ALL */
function stopAll() {
    Object.values(sounds).forEach(s => {
        s.pause();
        s.currentTime = 0;
    });
}

/* SAFE PLAY */
function playSound(sound) {
    if (!sound) return;
    sound.cloneNode().play().catch(() => { });
}


function updateSceneSound(sceneName) {

    // stop everything except jungle (handled separately)
    Object.values(sounds).forEach(s => {
        if (s !== sounds.jungle) {
            s.pause();
            s.currentTime = 0;
        }
    });

    // JUNGLE
    // JUNGLE
    if (jungleScenes.includes(sceneName) || riverScenes.includes(sceneName)) {

        sounds.caveRiver.pause();

        if (sounds.jungle.paused) {
            sounds.jungle.currentTime = 0;
            sounds.jungle.play().catch(() => { });
        }
    }
    else {
        sounds.jungle.pause();
    }

    // CAVE + RIVER AMBIENCE
    if (sceneName === "scene3") {
        sounds.caveRiver.loop = true;
        sounds.caveRiver.play().catch(() => { });
    }

    // RIVER MONSTER
    if (sceneName === "scene11") {
        sounds.riverMonster.play().catch(() => { });
    }

    // SHADOW FIGURE
    if (sceneName === "scene14") {
        sounds.shadowFigure.play().catch(() => { });
    }

    // WATERFALL
    if (sceneName === "scene15") {
        sounds.waterfall.play().catch(() => { });
    }

    // DEATH
    if (["scene16", "scene17"].includes(sceneName)) {
        sounds.died.play().catch(() => { });
    }

    // FINAL MONSTER
    if (sceneName === "scene20") {
        sounds.monster.play().catch(() => { });
    }


}

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



/* LOAD SCENE */

function loadScene(sceneName) {


    if (sceneName === "quiz") {
        startQuiz();
        return;
    }

    if (sceneName === "riverQuiz") {
        startRiverQuiz();
        return;
    }

    const scene = story[sceneName];

    sceneImage.src = scene.image;
    sceneTitle.innerText = scene.title;
    sceneText.innerText = scene.text;

    updateSceneSound(sceneName);

    // Call onEnter if it exists
    if (scene.onEnter) {
        scene.onEnter();
    }

    choicesDiv.innerHTML = "";

    scene.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.innerText = choice.text;

        btn.onclick = () => {

            const nextScene = choice.next;

            // FOOTSTEP (JUNGLE ONLY)
            if (jungleScenes.includes(nextScene)) {
                playSound(sounds.footstep);
            }

            // BOAT SPLASH (RIVER ONLY)
            if (riverScenes.includes(nextScene) || nextScene === "scene11") {
                playSound(sounds.boatSplash);
            }

            loadScene(nextScene);
        };

        if (choice.action === "download") {
            btn.onclick = downloadAchievement;
        }

        if (choice.action === "exit") {
            btn.onclick = () => window.location.href = "gamepage.html";
        }

        choicesDiv.appendChild(btn);
    });

    if (sceneName === "scene23") {
        window.addAchievement("FOUND THE LOST RELIC");
        stopAll(); 
        playSound(sounds.survived);
    }
}

/* QUIZ SYSTEM */

function startQuiz() {

    quizModal.style.display = "flex";


    let questions = [

        {
            question: "Where did the adventure begin?",
            answers: ["The Jungle", "The Desert", "The Ocean"],
            correct: 0
        },

        {
            question: "What did you find in the jungle clearing?",
            answers: ["Castle and bridge", "Village and tower", "Cave and glowing river"],
            correct: 2
        },

        {
            question: "What creature chased you in the cave?",
            answers: ["A dragon", "A shadow monster", "A giant snake"],
            correct: 1
        }

    ];

    let current = 0;
    let time = 30;

    quizTimer.innerText = "Time: 30s";

    let timer = setInterval(() => {

        time--;
        quizTimer.innerText = "Time: " + time + "s";

        if (time <= 0) {
            clearInterval(timer);
            quizModal.style.display = "none";
            playerDeath();
        }

    }, 1000);

    function showQuestion() {

        if (current >= questions.length) {

            clearInterval(timer);
            quizModal.style.display = "none";

            alert("You escaped the monster!");

            loadScene("scene21");

            return;

        }

        let q = questions[current];

        quizQuestion.innerText = q.question;
        quizAnswers.innerHTML = "";

        q.answers.forEach((answer, index) => {

            let btn = document.createElement("button");
            btn.classList.add("quiz-btn");
            btn.innerText = answer;

            btn.onclick = () => {

                playSound(sounds.click);

                if (index === q.correct) {

                    current++;
                    showQuestion();

                } else {

                    btn.classList.add("shake");

                    setTimeout(() => {
                        btn.classList.remove("shake");
                    }, 400);

                }

            };

            quizAnswers.appendChild(btn);

        });

    }

    showQuestion();

}


function startRiverQuiz() {

    quizModal.style.display = "flex";

    let questions = [

        {
            question: "Where are you traveling during this part of the adventure?",
            answers: ["A mountain", "A desert", "A river"],
            correct: 2
        },

        {
            question: "What attacked you from the water?",
            answers: ["Anaconda", "A shark", "A crocodile"],
            correct: 2
        },

        {
            question: "What vehicle are you using on the river?",
            answers: ["A raft", "A boat", "A ship"],
            correct: 1
        }

    ];

    let current = 0;
    let time = 20;

    quizTimer.innerText = "Time: 20s";

    let timer = setInterval(() => {

        time--;
        quizTimer.innerText = "Time: " + time + "s";

        if (time <= 0) {
            clearInterval(timer);
            quizModal.style.display = "none";

            hearts--;
            updateHearts();

            if (checkGameOver()) return;

            alert("The river monster catches your boat! One heart lost!");

            loadScene("scene11"); // restart at river monster
        }

    }, 1000);

    function showQuestion() {

        if (current >= questions.length) {

            clearInterval(timer);
            quizModal.style.display = "none";

            alert("You escaped the river monster!");

            loadScene("scene13");

            return;

        }

        let q = questions[current];

        quizQuestion.innerText = q.question;
        quizAnswers.innerHTML = "";

        q.answers.forEach((answer, index) => {

            let btn = document.createElement("button");
            btn.classList.add("quiz-btn");
            btn.innerText = answer;

            btn.onclick = () => {

                playSound(sounds.click);

                if (index === q.correct) {
                    current++;
                    showQuestion();
                } else {
                    btn.classList.add("shake");

                    setTimeout(() => {
                        btn.classList.remove("shake");
                    }, 400);
                }

            };

            quizAnswers.appendChild(btn);

        });

    }

    showQuestion();
}

/* ACHIEVEMENT DOWNLOAD */

function downloadAchievement() {

    const link = document.createElement("a");

    link.href = "../img/g3achievement.png";
    link.download = "Lost_Relic_Achievement.png";

    link.click();

}

updateHearts();
loadScene("scene1");


/* CHECK IF GAME OVER - MODIFIED */
function checkGameOver() {
    if (hearts <= 0) {
        // Show game over modal instead of alert
        const gameOverModal = document.getElementById("gameOverModal");
        gameOverModal.style.display = "flex";

        // Retry button
        const retryBtn = document.getElementById("retryGameBtn");
        retryBtn.onclick = () => {
            hearts = 2;
            updateHearts();
            loadScene("scene1");
            gameOverModal.style.display = "none";
        };

        // Exit button
        const exitBtn = document.getElementById("exitGameBtn");
        exitBtn.onclick = () => {
            window.location.href = "gamepage.html"; // change as needed
        };

        return true;
    }
    return false;
}