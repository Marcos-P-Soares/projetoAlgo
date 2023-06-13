import { prompt } from "readline-sync"

function janelaBusca(dados) {
    console.log(`
================================================================
-----------------------     BUSCA   ----------------------------
================================================================
`);
    do{
        const itensExibir = dados.filter((item) => item.estado == escolherBusca())
        itensExibir.sort((a,b) => a.nome - b.nome);
        for(let i=0; i<itensExibir.length; i++){
            console.log(`Item: ${itensExibir[i].nome} Valor: ${itensExibir[i].valor}`)
            console.log(`Estado: ${itensExibir[i].estado}`);
        }
    }while(confirmacao());
}

function escolherBusca(){
    console.log('|------------------------------------------|');
    console.log('|   Qual lista de produtos deseja ver?     |');
    console.log('|------------------------------------------|');
    console.log('|        Para COMPRADO, presse 1           |');
    console.log('|------------------------------------------|');
    console.log('|       Para item a COMPRAR, presse 0      |');
    console.log('|------------------------------------------|');
    
    let escolha = Number(prompt())
    switch(escolha){
        case 1:
            return 'COMPRADO'
        case 0:
            return 'COMPRAR'
        default:
            console.log('Opção inválida, tente novamente');
            return escolherBusca();
    }
}

export default {janelaBusca}