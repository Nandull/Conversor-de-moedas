function converter() {
    var moeda = document.getElementById('moeda').value //Select
    var valor = document.getElementById('valor').value //valor digitado
    if (moeda == 'dolar') {
        var resultado = parseFloat(valor) * 5.50
    } else {
        var resultado = parseFloat(valor) * 6.58
    }

    document.getElementById('resultado').innerHTML = "O valor em real é: R$" + resultado.toFixed(2)
}