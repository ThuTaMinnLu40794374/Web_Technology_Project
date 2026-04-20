

const quizzes = {

    island: {
        name: "Island of Decay",
        image: "../img/quiz1.png",
        questions: [
            {
                question: "💀 The undead are at your door. How do you react?",
                answers: [
                    { text: "Fortify the shelter and plan defense", score: 4 },
                    { text: "Sneak out quietly", score: 2 },
                    { text: "Freeze in panic", score: 1 }
                ]
            },
            {
                question: "💀 Supplies are scarce. What’s your strategy?",
                answers: [
                    { text: "Save for emergencies", score: 3 },
                    { text: "Use everything now", score: 0 },
                    { text: "Share with strangers", score: 2 }
                ]
            },
            {
                question: "💀 A bitten survivor begs for help. What do you do?",
                answers: [
                    { text: "Make a careful mercy decision", score: 3 },
                    { text: "Ignore them", score: 1 },
                    { text: "Trust them blindly", score: 2 }
                ]
            },
            {
                question: "💀 A storm hits the island. Your move?",
                answers: [
                    { text: "Wander around aimlessly", score: 0 },
                    { text: "Secure shelter immediately", score: 4 },
                    { text: "Search for more supplies", score: 1 }
                ]
            },
            {
                question: "💀 Escape chance appears. What’s your approach?",
                answers: [
                    { text: "Wait for others", score: 2 },
                    { text: "Lead and take charge", score: 5 },
                    { text: "Do nothing", score: 0 }
                ]
            }
        ],

        getResult(score) {
            if (score >= 13) {
                return {
                    title: "🛡 SURVIVED",
                    message: "Against overwhelming odds, you escaped the Island of Decay as a legendary survivor. Your courage, strategy, and sharp instincts ensured your survival. Tales of your bravery will echo among those who remain, and you will forever be remembered as the one who outsmarted the undead."
                };
            } else if (score >= 7) {
                return {
                    title: "⚠ Barely Survived",
                    message: "You made it out… but the island has left its mark on you. Scarred and exhausted, your journey was a battle of wits and willpower. The memories of close calls will haunt your dreams, yet you carry the lesson that survival requires both caution and courage."
                };
            } else {
                return {
                    title: "💀 You Died",
                    message: "The undead consumed your fate, and no one remembers your name. Your shelter fell, and the island claimed yet another soul. Let this be a reminder: even in desperation, every decision matters — sometimes, one misstep is all it takes."
                };
            }
        }
    },

    cursed: {
        name: "Cursed Wanderer",
        image: "../img/quiz2.png",
        questions: [
            {
                question: "🗡️ A cursed knight blocks your path. What do you do?",
                answers: [
                    { text: "Observe carefully before acting", score: 4 },
                    { text: "Charge recklessly", score: 1 },
                    { text: "Step back immediately", score: 2 }
                ]
            },
            {
                question: "🗡️ Dark magic saps your energy. Your choice?",
                answers: [
                    { text: "Push through the pain", score: 2 },
                    { text: "Collapse in despair", score: 0 },
                    { text: "Conserve and manage stamina", score: 3 }
                ]
            },
            {
                question: "🗡️ You find a forbidden spellbook. How do you handle it?",
                answers: [
                    { text: "Use it carefully", score: 3 },
                    { text: "Destroy it", score: 4 },
                    { text: "Read without thinking", score: 0 }
                ]
            },
            {
                question: "🗡️ The curse whispers in your mind. How do you react?",
                answers: [
                    { text: "Resist firmly", score: 4 },
                    { text: "Listen briefly", score: 1 },
                    { text: "Embrace it", score: 2 }
                ]
            },
            {
                question: "🗡️ The final boss rises. What’s your strategy?",
                answers: [
                    { text: "Attack blindly", score: 1 },
                    { text: "Find and exploit weaknesses", score: 5 },
                    { text: "Give up", score: 0 }
                ]
            }
        ],

        getResult(score) {
            if (score >= 13) {
                return {
                    title: "⚔ Curse Breaker",
                    message: "You shattered the ancient curse and restored balance to a world teetering on darkness. Your cunning, courage, and resolve turned the tide of fate. Legends will speak of the hero who defied the shadows and brought light back to those trapped under the curse."
                };
            } else if (score >= 7) {
                return {
                    title: "🩸 Corrupted Survivor",
                    message: "You survived… but darkness now whispers in your soul. Though you walked away from the immediate threat, the curse lingers, testing your resolve at every turn. The choices you made shaped your path, and the shadows have claimed a piece of your spirit."
                };
            } else {
                return {
                    title: "☠ Consumed by the Curse",
                    message: "The curse devoured you completely, your soul lost to the shadows forever. Every action you took only tightened the grip of darkness. Your story ends in silence, a warning to all who dare tread where you have fallen."
                };
            }
        }
    },

    grave: {
        name: "Grave Hunt",
        image: "../img/quiz3.png",
        questions: [
            {
                question: "🕸️ Graves open around you. What’s your move?",
                answers: [
                    { text: "Plan an escape route", score: 4 },
                    { text: "Freeze in fear", score: 1 },
                    { text: "Fight the spirits", score: 2 }
                ]
            },
            {
                question: "🕸️ You see strange ritual markings. How do you respond?",
                answers: [
                    { text: "Study them carefully", score: 1 },
                    { text: "Ignore them", score: 0 },
                    { text: "Erase them", score: 3 }
                ]
            },
            {
                question: "🕸️ A ghost offers you power. What do you choose?",
                answers: [
                    { text: "Accept partially", score: 2 },
                    { text: "Refuse completely", score: 4 },
                    { text: "Accept fully", score: 1 }
                ]
            },
            {
                question: "🕸️ Mist blocks your view. How do you proceed?",
                answers: [
                    { text: "Move cautiously", score: 3 },
                    { text: "Run blindly", score: 0 },
                    { text: "Call out loudly", score: 1 }
                ]
            },
            {
                question: "🕸️The final ritual starts. Your decision?",
                answers: [
                    { text: "Disrupt randomly", score: 2 },
                    { text: "Break the ritual components", score: 5 },
                    { text: "Flee in terror", score: 0 }
                ]
            }
        ],

        getResult(score) {
            if (score >= 13) {
                return {
                    title: "🌕 Escaped the Grave",
                    message: "You broke the curse of the graveyard and escaped alive, guided by sharp wits and steady nerves. Every ghostly threat, every ritual marking, you faced head-on and triumphed. The night may have been dark, but your courage illuminated a path to freedom."
                };
            } else if (score >= 7) {
                return {
                    title: "👻 Haunted Survivor",
                    message: "You escaped… but something followed you home. Though alive, shadows linger in your mind and whispers echo where you walk. You survived by luck and skill, yet the graveyard’s curse has left a permanent mark on your soul."
                };
            } else {
                return {
                    title: "🪦 Lost to the Grave",
                    message: "Your name is now etched among the forgotten, swallowed by the darkness of the graveyard. Every spirit you ignored and every wrong step hastened your demise. The night claims yet another soul, and your story ends in silence."
                };
            }
        }
    }

};

/* ===== KEEP YOUR EXISTING JS LOGIC EXACTLY AS IS ===== */
let currentQuiz;
let currentQuizName = "";
let currentQuestion = 0;
let totalScore = 0;

function openQuiz(type) {

    const loader = document.getElementById("loadingOverlay");
    loader.style.display = "flex";

    // Delay 3.5 seconds
    setTimeout(() => {
        loader.style.display = "none";

        currentQuiz = quizzes[type];
        currentQuizName = quizzes[type].name; // FIXED HERE

        document.getElementById("quizImg").src = currentQuiz.image;
        document.getElementById("quizModal").style.display = "flex";
        startQuiz();

    }, 3500);
}

function closeQuiz() {
    document.getElementById("quizModal").style.display = "none";
}

function startQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    document.getElementById("resultContainer").style.display = "none";
    document.getElementById("questionContainer").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const q = currentQuiz.questions[currentQuestion];
    document.getElementById("questionText").innerText = q.question;

    const container = document.getElementById("answersContainer");
    container.innerHTML = "";

    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerText = answer.text;
        btn.onclick = () => selectAnswer(answer.score);
        container.appendChild(btn);
    });
}

function selectAnswer(score) {
    totalScore += score;
    currentQuestion++;

    if (currentQuestion < currentQuiz.questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {

    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";

    const result = currentQuiz.getResult(totalScore);

    document.getElementById("finalScore").innerText = "Final Score: " + totalScore;

    document.getElementById("finalFate").innerHTML =
        "<strong>" + result.title + "</strong><br><br>" + result.message;


    // SAVE QUIZ BEST SCORE
    if (typeof saveQuizScore === "function") {
        saveQuizScore(currentQuizName, totalScore);
    }

}

function restartQuiz() {
    startQuiz();
}
