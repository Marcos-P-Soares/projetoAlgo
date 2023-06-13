import { prompt } from "readline-sync";
import bd from './bancoDados.js';
import cadastro from './cadastro.js'
import busca from './busca.js'

//Menu principal, onde todas as funções serão chamadas
function menu(){
    let dados = bd.lerArquivos();
    console.log('================================================================')
    console.log('-------------------  Lista de Compras  -------------------------')
    console.log('================================================================\n')
    console.log('Olá, seja bem vindo, o que deseja ?\n')
    console.log('1 --> Cadastrar um item')
    console.log('2 --> Verificar itens da lista')
    console.log('3 --> Remover item da lista')
    let escolha = Number(prompt())
    switch(escolha){
        case 1:
            return cadastro.janelaCadastro(dados)//adicionar função de cadastrar itens
        case 2:
            return busca.janelaBusca(dados)//adicionar função de verificar itens na lista
        case 3:
            return //adicionar função de remover itens da lista
        case 0:
            return //encerrar o programa
        default:
            console.log('Opção inválida, por favor, insira escolha uma opção válida.');
            return menu();
    }
}

menu()