let button = document.getElementById('button');
let input = document.getElementById('input');
let input1 = document.getElementById('input1');

function adicionarNumero (numero1: number, numero2: number) {
    return numero1 + numero2;
}
if(button){
    button.addEventListener('click', () =>{
        if(input && input1) {
            console.log (adicionarNumero(Number(input), Number(input1)));
        }
    })
}