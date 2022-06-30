/*
fetch('https://618e6a1850e24d0017ce1294.mockapi.io/api/v1/products').then(resposta=>{

   return resposta.json();

}).then(corpo=>{

    console.log(corpo);    
})*/

/*fazendo conexão com a url*/
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

/* montando função de população*/ 
function criaDivisao(usuario) {
    console.log(usuario)
    
    divisao = document.createElement("div");
    
    tagImage = document.createElement('img');
    tagNome = document.createElement("h2");
    tagPrice = document.createElement("h2");
    
   
    tagImage.innerHTML = usuario.image
    tagNome.innerHTML = usuario.name
    tagPrice.innerHTML = usuario.price
   


    divisao.appendChild(tagImage);
    divisao.appendChild(tagNome);
    divisao.appendChild(tagPrice);
   


    return divisao;
}


/*montando função main */


function main() {
    let data = fazGet("https://618e6a1850e24d0017ce1294.mockapi.io/api/v1/products");
    let usuarios = JSON.parse(data);
    let produto = document.getElementById("produto");
    usuarios.forEach(element => {
        let divisao = criaDivisao(element);
        divisoria.appendChild(divisao);
    });
        // Para cada usuario
        // criar uma divisao
        // adicionar no produto
}

main()
