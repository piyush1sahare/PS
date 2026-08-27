const hearts = document.getElementById("hearts");

const symbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💓",
    "🌸"
];

/* Create floating hearts */

for (let i = 0; i < 28; i++) {

    const h = document.createElement("div");

    h.className = "heart";

    h.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    h.style.left =
        Math.random() * 100 + "%";

    h.style.animationDelay =
        Math.random() * 7 + "s";

    h.style.animationDuration =
        5 + Math.random() * 5 + "s";

    h.style.fontSize =
        14 + Math.random() * 18 + "px";

    hearts.appendChild(h);
}


/* Forgive button */

function forgive() {

    const el = document.getElementById("forgive");

    el.classList.remove("hidden");


    /* Create extra hearts */

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            const h = document.createElement("div");

            h.className = "heart";

            h.textContent = "❤️";

            h.style.left =
                35 + Math.random() * 30 + "%";

            h.style.animationDuration = "3s";

            h.style.fontSize =
                18 + Math.random() * 20 + "px";

            hearts.appendChild(h);


            setTimeout(() => {

                h.remove();

            }, 3500);

        }, i * 90);

    }
}