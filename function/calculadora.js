//triangulo
function calcularAreaTriangulo(base, altura){
    return base*altura/2
}

//retangulo
function calcularAreaRetangulo(base, altura){
    return base*altura
}

//quadrado
function calcularAreaQuadrado(lado, lado){
    return lado * lado
}

//trapezio
function calcularAreaTrapezio(baseMaior, baseMenor, altura){
    return (baseMaior+baseMenor)*altura/2
}

//circulo
function calcularAreaCirculo(raio){
    const pi = 3.14 
    return pi * (raio*raio)
}

//opçoes
function exibirMenu(){
    const opcao = parseFloat(prompt("Qual operação você deseja executar?\n" + 
        "1. Calcular área de um triângulo\n"+
        "2. Calcular área de um retângulo\n"+
        "3. Calcular área de um quadrado\n"+
        "4. Calcular área de um trapézio\n"+
        "5. Calcular área de um círculo\n"+
        "6. ENCERRAR PROGRAMA\n"
    ))
    return opcao
}

//opcoes switch case
function execucaoOpcoes (){
    let opcao
    let resultado = 0
    do{
        opcao = exibirMenu()
        switch(opcao){
            //calculo triangulo
            case 1:
                const baseTriangulo = parseFloat(prompt("Digite o valor da base: \n"))
                const alturaTriangulo = parseFloat(prompt("Digite o valor da altura: \n\n"))
                resultado = calcularAreaTriangulo(baseTriangulo, alturaTriangulo)
                alert("Resultado: " + resultado)
                break
            //calculo retangulo
            case 2:
                const baseRetangulo = parseFloat(prompt("Digite o valor da base: \n"))
                const alturaRetangulo = parseFloat(prompt("Digite o valor da altura: \n\n"))
                resultado = calcularAreaRetangulo(baseRetangulo, alturaRetangulo)
                alert("Resultado: " + resultado)
                break
            //calculo quadrado
            case 3:
                const lado = parseFloat(prompt("Digite o valor do lado: \n\n"))
                resultado = calcularAreaQuadrado(lado, lado)
                alert("Resultado: " + resultado)
                break
            //calculo trapezio
            case 4:
                const baseMaior = parseFloat(prompt("Digite o valor da base maior: \n"))
                const baseMenor = parseFloat(prompt("Digite o valor da base menor: \n"))
                const altura = parseFloat(prompt("Digite o valor da altura: \n\n"))
                resultado = calcularAreaTrapezio(baseMaior, baseMenor, altura)
                alert("Resultado: " + resultado)
                break
            //calculo circulo
            case 5:
                const raio = parseFloat(prompt("Digite o valor do raio: \n\n"))
                resultado = calcularAreaCirculo(raio)
                alert("Resultado: " + resultado)
                break
            case 6:
                alert("Encerrando programa")
                break
            //retorno padrão 
            default:
                alert("Opção inválida. Tente novamente.")
                break
        }
    } while (opcao !== 6)
}
//execucao

//exibir menu e escolher opcoes
execucaoOpcoes()
