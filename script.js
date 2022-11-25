const numero1 = document.querySelector("#input1");
const numero2 = document.querySelector("#input2");
const calcular = document.querySelector("#enviar");
const Resultado = document.querySelector("#P_resultado");


function BtnClick(){
    const sumar = parseInt(numero1.value) + parseInt(numero2.value);
    Resultado.innerText = sumar;
}