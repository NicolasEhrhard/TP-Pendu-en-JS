class Partie {

    constructor() {
        let toutesLesLettres = [];

        let word = DICTIONARY[Math.floor(Math.random() * DICTIONARY.length)];
        console.log(word.key);

        for (let i = 0; i < word.key.length; i++) {
            new Lettre(word.key.charAt(i));
            toutesLesLettres.push(word.key.charAt(i));
        }
        console.log(toutesLesLettres);

    }

}





