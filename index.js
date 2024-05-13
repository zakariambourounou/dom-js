document.addEventListener("DOMContentLoaded", function() {
    const color_box = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change_color");

    function changement_couleur() {
        // Générer des valeurs aléatoires pour les composantes RGB
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    // Ajouter un écouteur d'événement au bouton pour changer la couleur
    changeColorBtn.addEventListener("click", function() {
        const application_color = changement_couleur();
        color_box.style.backgroundColor = application_color;
    });
});
