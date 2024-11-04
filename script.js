function buscar(){
    const input1= parseInt(document.getElementById('valor1').value);
    const input2= parseInt ( document.getElementById('valor2').value);
    const valor= document.querySelector('input[name="operaction"]:checked').value;
    const h1=document.querySelector('#h1')
    let operacao, calculo ;

    if(valor === 'adicao'){
        operacao= 'Adição'
        calculo= input1 + input2
    }else if(valor === 'subtracao'){
        operacao= 'Subtração'
        calculo= input1 - input2
    }else if(valor === 'multiplicacao'){
        operacao= 'Multiplicação'
        calculo= input1 * input2
    } else {
        operacao= 'Divisão'
        calculo= input1 / input2
    }

    h1.innerHTML= `Valor: ${calculo}`


}