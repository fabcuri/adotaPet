function cadastrar(event){
    event.preventDefault()

    const foto = document.getElementById('foto').value
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const cor = document.getElementById('cor').value
    const descricao = document.getElementById('descricao').value
    const tipo = document.getElementById('tipo').value
    
    if(nome === ""){
        console.log("oi")
        //alert("Nome é obrigatório")
        document.getElementById('nome').style.borderColor = "red"
        document.getElementById('error-nome').innerText = 'Nome é obrigatorio'
    }
    

    const pet = {
        foto: foto,
        nome: nome,
        idade: idade,
        cor: cor,
        descricao: descricao,
        tipo: tipo
    }
    // // localStorage.setItem("perfil",JSON.stringify(pet))

    console.log(pet)
    
}

document
.getElementById('form-pet')
.addEventListener('submit', cadastrar )

// function alterarImagem(event) {
//     const valorUrl = event.srcElement.value 
//     document.getElementById("catImagePreview").src = valorUrl
//     document.getElementById("catImagePreview").style.borderRadius = "50%"
// }

// document
// .getElementById("catImage")
// .addEventListener("input", alterarImagem)