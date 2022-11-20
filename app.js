const section = document.querySelector("section");
const playerLives = document.querySelector("span");
const Lives = 6;

playerLives.textContent = Lives;

const getImages = () => [
    {imgSrc: "./img/budgie.jpg", name: "budgie"},
    {imgSrc: "./img/crow.jpg", name: "crow"},
    {imgSrc: "./img/cockatiel.jpg", name: "cockatiel"},
    {imgSrc: "./img/cockatiel-header.jpg", name: "cockatiel-header"},
    {imgSrc: "./img/cockatoo.jpg", name: "cockatoo"},
    {imgSrc: "./img/macaw.jpg", name: "macaw"},
    {imgSrc: "./img/budgie.jpg", name: "budgie"},
    {imgSrc: "./img/crow.jpg", name: "crow"},
    {imgSrc: "./img/cockatiel.jpg", name: "cockatiel"},
    {imgSrc: "./img/cockatiel-header.jpg", name: "cockatiel-header"},
    {imgSrc: "./img/cockatoo.jpg", name: "cockatoo"},
    {imgSrc: "./img/macaw.jpg", name: "macaw"},
];

const shuffle = () => {
    const cardData = getImages();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

const generator = () => {
    const cardData = shuffle();
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
};

const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        } else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1500);
            });
        } 
    }
};

generator();