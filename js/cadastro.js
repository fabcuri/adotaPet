function cadastrar(event) {
    event.preventDefault()

    const foto = document.getElementById('foto').value
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const cor = document.getElementById('cor').value
    const descricao = document.getElementById('descricao').value
    const tipo = document.getElementById('tipo').value

    if (foto === "") {
        document.getElementById('foto').style.borderColor = "red"
        document.getElementById('error-foto').innerText = 'Foto é obrigatoria'
    }else{
         document.getElementById('foto').style.borderColor = ""
        document.getElementById('error-foto').innerText = ""
    }

    if (!nome) { //veja uma outra forma de declarar a variavel vazia
        document.getElementById('nome').style.borderColor = "red"
        document.getElementById('error-nome').innerText = 'Nome é obrigatorio'
    }else{
        document.getElementById('nome').style.borderColor = ""
       document.getElementById('error-nome').innerText = ""
   }

    if (cor === "") {
        document.getElementById('cor').style.borderColor = "red"
        document.getElementById('error-cor').innerText = 'Cor é obrigatoria'
    }else{
        document.getElementById('cor').style.borderColor = ""
       document.getElementById('error-cor').innerText = ""
   }
    if (descricao === "") {
        document.getElementById('descricao').style.borderColor = "red"
        document.getElementById('error-descricao').innerText = 'Descrição  é obrigatoria'
    }else{
        document.getElementById('descricao').style.borderColor = ""
       document.getElementById('error-descricao').innerText = ""
   }
    if (tipo === "") {
        document.getElementById('tipo').style.borderColor = "red"
        document.getElementById('error-tipo').innerText = 'Tipo é obrigatorio'
    }else{
        document.getElementById('tipo').style.borderColor = ""
       document.getElementById('error-tipo').innerText = ""
   }


    const pet = {
        // id:crypto.randomUUID() //numero aleatorio que nunca se repete ou
        id: Date.now(),  //isso somente porque não tem back ....recurso didatico pra fazer o exercicio
        foto: foto,
        nome: nome,
        idade: idade,
        cor: cor,
        descricao: descricao,
        tipo: tipo
    }
    const listaNoLocalStorage = JSON.parse(localStorage.getItem("pets"))|| []//vai no localstorage e pegua a lista
//se o valor for nulo...pq nao tem informação ainda....ele vai atribuir um array vazio
    listaNoLocalStorage.push(pet)

    localStorage.setItem("pets",JSON.stringify(listaNoLocalStorage)) //esse comando salva a informação em string no localstorage

}

document
    .getElementById('form-pet')
    .addEventListener('submit', cadastrar)

// function alterarImagem(event) {
//     const valorUrl = event.srcElement.value
//     document.getElementById("catImagePreview").src = valorUrl
//     document.getElementById("catImagePreview").style.borderRadius = "50%"
// }

// document
// .getElementById("catImage")
// .addEventListener("input", alterarImagem)