document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    function getRandomColor() {
        // Générer des valeurs aléatoires pour les composantes RGB
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    // Ajouter un écouteur d'événement au bouton pour changer la couleur
    changeColorBtn.addEventListener("click", function() {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
});
