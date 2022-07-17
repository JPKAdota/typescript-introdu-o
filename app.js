let button = document.getElementById('button');
let input = document.getElementById('input');
let input1 = document.getElementById('input1');

function SomarNumeros(numero1, numero2) {
    if(typeof numero1 === 'number' && typeof numero2 === 'number') {
        return numero1 + numero2
    } else {
        return Number(numero1) + Number(numero2);
    }
}

button.addEventListener('click', () =>{
    console.log(SomarNumeros(input.value, input1.value));
})