function ad(){
    let n1 = Number(window.prompt("Digite o primeiro número:"))
    let n2 = Number(window.prompt("Digite o segundo número:"))
    n3 = n1+n2

    let res = document.getElementById('resultado')
    res.innerHTML = `<p> O resultado da soma é ${n3}.`
}