
document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const userIcon = document.getElementById("userIcon");
    const dropdown = document.getElementById("userDropdown");
    const loginArea = document.getElementById("loginArea");
    const welcomeArea = document.getElementById("welcomeArea");
    const usernameInput = document.getElementById("usernameInput");
    const submitName = document.getElementById("submitName");
    const welcomeText = document.getElementById("welcomeText");
    const removeUser = document.getElementById("removeUser");
    const achievementList = document.getElementById("achievementList");
    const quizScoreList = document.getElementById("quizScoreList");

    // ========== TOGGLE DROPDOWN ==========
    userIcon.addEventListener("click", () => {
        if (dropdown.style.display === "flex") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "flex";
            dropdown.style.flexDirection = "column";
        }
    });

    // ========== LOAD USER ==========
    function loadUser() {
        const name = localStorage.getItem("storymazeUser");
        if (name) {
            loginArea?.style.setProperty("display", "none");
            welcomeArea?.style.setProperty("display", "block");
            welcomeText.innerText = "⚡ Welcome " + name + " ⚡";
        }
    }

    // ========== LOGIN ==========
    submitName?.addEventListener("click", () => {
        const name = usernameInput.value.trim();
        if (!name) return;
        localStorage.setItem("storymazeUser", name);
        loadUser();
    });

    // ========== LOGOUT ==========
    removeUser?.addEventListener("click", () => {
        localStorage.removeItem("storymazeUser");
        localStorage.removeItem("storymazeQuizScores");
        localStorage.removeItem("storymazeAchievements");

        welcomeArea?.style.setProperty("display", "none");
        loginArea?.style.setProperty("display", "block");

        if (quizScoreList) quizScoreList.innerHTML = "No scores yet";
        if (achievementList) achievementList.innerHTML = "No achievements yet";
    });

    // ========== LOAD ACHIEVEMENTS ==========
    function loadAchievements() {
        const achievements = JSON.parse(localStorage.getItem("storymazeAchievements")) || [];
        if (!achievements.length) {
            if (achievementList) achievementList.innerHTML = "No achievements yet";
            return;
        }
        if (achievementList) achievementList.innerHTML = "";
        achievements.forEach(item => {
            const div = document.createElement("div");
            div.textContent = "🏆 " + item;
            achievementList.appendChild(div);
        });
    }

    // ========== ADD ACHIEVEMENT ==========
    window.addAchievement = function (name) {
        const achievements = JSON.parse(localStorage.getItem("storymazeAchievements")) || [];
        if (!achievements.includes(name)) {
            achievements.push(name);
            localStorage.setItem("storymazeAchievements", JSON.stringify(achievements));
        }
        loadAchievements();
    };

    // ========== LOAD QUIZ SCORES ==========
    function loadQuizScores() {
        const scores = JSON.parse(localStorage.getItem("storymazeQuizScores")) || {};
        if (!Object.keys(scores).length) {
            if (quizScoreList) quizScoreList.innerHTML = "No scores yet";
            return;
        }
        if (quizScoreList) quizScoreList.innerHTML = "";
        for (let quiz in scores) {
            const div = document.createElement("div");
            div.textContent = `${quiz} : ${scores[quiz]}`;
            quizScoreList.appendChild(div);
        }
    }

    // ========== SAVE QUIZ SCORE ==========
    window.saveQuizScore = function (name, score) {
        const scores = JSON.parse(localStorage.getItem("storymazeQuizScores")) || {};
        if (!scores[name] || score > scores[name]) {
            scores[name] = score;
            localStorage.setItem("storymazeQuizScores", JSON.stringify(scores));
        }
        loadQuizScores();
    };

    // ========== INIT ==========
    loadUser();
    loadAchievements();
    loadQuizScores();
});