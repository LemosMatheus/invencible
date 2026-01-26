card1 = document.getElementById("p1");
card2 = document.getElementById("p2");
card3 = document.getElementById("p3");
card4 = document.getElementById("p4");
card5 = document.getElementById("p5");
card6 = document.getElementById("p6");
card_principal = document.getElementById("card_p")
cards = [card1,card2,card3,card4,card5,card6]
imagens = ["../img/cards_principal/image.png", "../img/cards_principal/AtomEve_v2-scaled-1-scaled.webp","../img/cards_principal/Bulletproof_v3-scaled-1-scaled.webp","../img/cards_principal/Thula_v3-scaled-1-_1_.png", "../img/cards_principal/REXSPLODE-scaled-1-scaled.webp","../img/cards_principal/BattleBeast-scaled-1-scaled.webp"]
cards.forEach(element => {
    element.addEventListener("click", ()=> {
        cards.forEach(card => {
            card.classList.remove("show");
            // card.classList.remove("active");
        });
        for (let i =0; i<7; i++) {
            if (element===cards[i]) {
                card_principal.style.backgroundImage = `url(${imagens[i]})`;
                card_principal.classList.add("show");
                element.classList.add("show");
            }
        }
    })
});
