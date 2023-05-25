const a = document.querySelector(".encriptador");
const b = document.querySelector(".mensaje");
const cp = document.querySelector(".copiar");

function btnencriptar() {
    let texto = encriptar(a.value);
    b.value = texto;
    a.value = "";
    b.style.backgroundImage = "none";
    b.style.zIndex ="+0";
}
function btndesencriptar() {
    let texto = descencriptar(a.value);
    b.value = texto;
    a.value = "";
    b.style.backgroundImage = "none";
    b.style.zIndex ="+0";
}

function btncopiar() {
    const texto = b.value;
    navigator.clipboard.writeText(texto)
}



    

function encriptar(text) {
    let matriz = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    for (let i = 0; i < matriz.length; i++) {
        if (text.includes(matriz[i][0])) {
            text = text.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return text;
}
function descencriptar(text) {
    let matriz = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    for (let i = 0; i < matriz.length; i++) {
        if (text.includes(matriz[i][1])) {
            text = text.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return text;
}
