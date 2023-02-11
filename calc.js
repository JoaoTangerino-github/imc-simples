// Variavel global para todo o programa

let nome = prompt('Digite seu nome para comessar: ')

// função para fazer o cálculo do imc
function calcularIMC(){
    
   
    let peso = document.getElementById('peso').value
    let alt = document.getElementById('altura').value
    let imc = peso / alt ** 2

    if(imc < 18.5){
        alert(`${nome}, você está abaixo do peso!\n${imc.toFixed(2)}`)
    }
    else if(imc > 18.6 && imc <= 24.9){
        alert(`${nome}, você está com o peso ideal!\n${imc.toFixed(2)}`)
    }
    else if(imc > 25 && imc <= 29.9){
        alert(`${nome}, você está levemente acima do peso!\n${imc.toFixed(2)}`)
    }
    else if(imc > 30 && imc <= 34.9){
        alert(`${nome}, você está com obesidade grau 1!\n${imc.toFixed(2)}`)
    }
    else if(imc > 35 && imc <= 39.9){
        alert(`${nome}, você está com obesidade grau 2!\n${imc.toFixed(2)}`)
    }
    else if(imc > 39.9) {
        alert(`${nome}, você está com obesidade grau mórbita!\n${imc.toFixed(2)}`)
    }
    else{
        alert('Dados incorretos')
    }

}



// funções criadas apenas para aprendizagem de manipulação do css via JS.
/*
function corBotao(){
    
    let altCor = document.getElementById('calcular')
    altCor.style.backgroundColor = "rgba(0, 0, 0, 0.438)"
}
// função para retornar a cor original do botão
function corOriginal(){

    let altCor = document.getElementById('calcular')
    altCor.style.backgroundColor = "rgba(247, 46, 46)"
}
*/