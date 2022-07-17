"use strict";
var button = document.getElementById('button');
var input = document.getElementById('input');
var input1 = document.getElementById('input1');
function adicionarNumero(numero1, numero2) {
    return numero1 + numero2;
}
if (button) {
    button.addEventListener('click', function () {
        if (input && input1) {
            console.log(adicionarNumero(Number(input), Number(input1)));
        }
    });
}
//# sourceMappingURL=app.js.map