class Lettre {

    constructor(lettre) {
        let container = document.getElementById("wordContainer");

        let h = document.createElement("H3");
        let l = document.createTextNode(lettre);
        h.className = "lettre-cachée";
        h.appendChild(l);
        container.appendChild(h);

    }

}