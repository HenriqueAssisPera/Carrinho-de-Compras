/*
function adicionarCarrinho (objeto, quantidade, carrinho) {

        let carrinho.find()

       return carrinho.push({
            produto:objeto, 
            quantidade:quantidade,           
             
        });

}*/

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}




//Carrinho atualizando
atualizarCarrinho = (val) =>{

            console.log(val);
            var containerCarrinho = document.getElementById('Carrinho');
            containerCarrinho.innerHTML = "";
            val.forEach((val) => {
                    
			if(val.quantidade >0){
			containerCarrinho.innerHTML+= `
			<p>`+val.name+` |quantidade: `+val.quantidade+`</p>
			
		`;
                
            }
		})
    }


function main() {
    let data = fazGet("https://618e6a1850e24d0017ce1294.mockapi.io/api/v1/products/");
    const val = JSON.parse(data);
    var containerProdutos = document.getElementById("Produtos");   

    val.forEach(val => {
        containerProdutos.innerHTML+=`
        <div class="produto-single">
            <img src="https://loremflickr.com/640/480/food" />
            <a key = "`+val.id+`" href ="#"> + </a>
            <p>`+val.name+`</p>
            <p>`+val.price+`</p>
            
        </div>`
    });

    

    //registrando item no carrinho
    var quantidade=0;
    var links = document.getElementsByTagName('a');

    
    for (var i= 0; i < links.length; i++) {
        links[i].addEventListener("click",function(){
            
            let key = this.getAttribute('key');
            val[key].quantidade++;
            atualizarCarrinho(val);
            return false;
            
	})
	
	
}
    
}

main()
