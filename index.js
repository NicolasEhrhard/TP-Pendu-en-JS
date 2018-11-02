new Partie();
let png = 0;
let tentatives = 0;

document.getElementById('image').src = 'assets/' + png + '.png';
document.getElementById("tentatives").innerText = tentatives + ' tentatives';

function search() {
    tentatives ++;
    document.getElementById("tentatives").innerText = tentatives + ' tentatives';

    let value = document.getElementById("inp").value;

    let elem = document.getElementsByClassName('lettre-cachée');

    let find = false;
    for (i = 0; i < elem.length; i++) {

        if (elem[i].innerHTML == value) {
            console.log("BONNE LETTRE");
            elem[i].className = 'lettre';
            find = true;
        }
    }

    if (!find){
        png++;
        document.getElementById('image').src = 'assets/' + png + '.png';

        if (png == 11) {
            alert("VOUS AVEZ PERDU !");
        }
    }

    if (document.getElementsByClassName('lettre-cachée').length == 0) {
        alert('VOUS AVEZ GAGNE !')
    }

    document.getElementById("inp").value = '';
    event.preventDefault();
}


let form = document.getElementById("formPendu");
form.addEventListener("submit", search, true);