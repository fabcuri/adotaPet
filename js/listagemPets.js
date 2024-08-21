function deletar(id) {
    const petsAtuais = JSON.parse(localStorage.getItem("pets"))
    const petsFiltrados = petsAtuais.filter((item) => item.id !== id) /*filter percorre o array e remove conforme a condição e devolve um novo array*/
    localStorage.setItem("pets", JSON.stringify(petsFiltrados))/*insere no localstorage a nova listagem*/
    document.getElementById("lista-pets").innerText = "" /*limpa tudo o que tem na lista*/
    carregarDados()
}

function carregarDados() {
    const petsNaMemoria = JSON.parse(localStorage.getItem("pets")) /*peguei a string do localstorage e transformei em array e guardei na variavel*/
    const lista = document.getElementById("lista-pets")
    // const meuH1 = document.createElement("h1")
    // meuH1.innerText = "testando"
    // lista.append(meuH1)
    petsNaMemoria.forEach((pet) => {
        console.log(pet.nome)
        const div = document.createElement("div")
        div.classList.add("item-pet")/*geração da div e atribuição da classe*/

        const img = document.createElement("img")
        img.setAttribute("width", "150px")
        img.setAttribute("src", pet.foto)

        div.append(img)

        const h2 = document.createElement("h2")
        h2.innerText = pet.nome

        div.append(h2)

        const buttonDeletar = document.createElement("button")
        buttonDeletar.innerText = "Deletar"
        buttonDeletar.onclick = () => deletar(pet.id)/*passando com arrayfuction não executa ate clicar, isso porque a função tem parametro*/
        /*se a função fosse sem parametro, deveria estar tb sem parentese*/

        const buttonAdotar = document.createElement("button")
        buttonAdotar.innerText = "Adotar"
        buttonAdotar.onclick = () => window.location.href = "././detalhes-pet.html?id = " + pet.id

        const divBotoes = document.createElement("div")
        divBotoes.classList.add("pet-card-botoes")


        divBotoes.append(buttonDeletar)
        divBotoes.append(buttonAdotar)

        div.append(divBotoes)

        lista.append(div)

    });




}


document.addEventListener("DOMContentLoaded", carregarDados) /*dom funciona quando a pagina for renderizada, dispara a função*/