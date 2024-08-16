function carregarDados() {
    const petsMemoria = JSON.parse(localStorage.getItem("pets")) /*peguei a string do localstorage e transformei em array e guardei na variavel*/
    const lista = document.getElementById("lista-pets")
    // const meuH1 = document.createElement("h1")
    // meuH1.innerText = "testando"
    // lista.append(meuH1)
    const div = document.createElement("div")
    div.classList.add("item-pet")/*geração da div e atribuição da classe*/

    const img = document.createElement("img")
    img.setAttribute("width", "150px")
    img.setAttribute("src", "https://s1.static.brasilescola.uol.com.br/be/e/Ra%C3%A7as-de-cachorros.jpg")

    div.append(img)

    const h2 = document.createElement("h2")
    h2.innerText = "testando"

    div.append(h2)

    const button = document.createElement("button")
    button.innerText = "Adotar"

    div.append(button)
    lista.append(div)
    console.log(div)


}


document.addEventListener("DOMContentLoaded", carregarDados) /*dom funciona quando a pagina for renderizada, dispara a função*/