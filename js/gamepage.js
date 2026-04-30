document.addEventListener("DOMContentLoaded", function () {

    new Swiper(".gamesSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2.7,  
        loop: true,

        coverflowEffect: {
            rotate: 0,
            stretch: 10,  
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });

});


document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("gameModal");
    const modalImage = document.getElementById("modalImage");
    const enterGameBtn = document.getElementById("enterGameBtn");
    const exitGameBtn = document.getElementById("exitGameBtn");
    const loadingOverlay = document.getElementById("loadingOverlay");

    let currentGameLink = null;

    const games = [
        { selector: ".game-card:nth-of-type(1) .play-btn", image: "../img/game1en.png", link: "game1.html" },
        { selector: ".game-card:nth-of-type(2) .play-btn", image: "../img/game3en.png", link: "game3.html" },
    ];

    modal.style.display = "none";
    loadingOverlay.style.display = "none";

    // open modal
    games.forEach(game => {
        const btn = document.querySelector(game.selector);
        if (!btn) return;

        btn.addEventListener("click", (e) => {
            e.preventDefault();

            modalImage.src = game.image;
            modal.style.display = "flex";

            currentGameLink = game.link; // save link
        });
    });

    // ENTER GAME → spinner → then redirect
    enterGameBtn.addEventListener("click", () => {

        loadingOverlay.style.display = "flex";
        enterGameBtn.disabled = true;

        setTimeout(() => {

            loadingOverlay.style.display = "none";
            modal.style.display = "none";
            enterGameBtn.disabled = false;

            // redirect AFTER loading
            if (currentGameLink) {
                window.location.href = currentGameLink;
            }

        }, 3500);
    });

    // exit modal
    exitGameBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // click outside
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});