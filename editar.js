import bd from './bancoDados.js';
import { menu } from './index.js';
import { prompt } from 'readline-sync';

function janelaEditar(){
    console.log(`
================================================================
-----------------------    EDITAR   ----------------------------
================================================================
`); 
    do {
        const dados = bd.lerArquivos();
        if(dados.length ===0){
            console.log('Não há arquivos armazenados no momento')
            return menu();
        }
        console.log('Os itens armazenados na sua lista de compra são:\n');
        for(let i=0; i< dados.length; i++){
            console.log(`${i+1} -> ${dados[i].nome}`);
        }
        console.log('\n');
        

    } while (confirmacao());
}

function editarRemover(){
    console.log(`
|----------------------------------------------------------------|
| Presse 1 para editar        | Presse 2 para remover            |
|----------------------------------------------------------------|
`);
    let escolha = Number(prompt());
    switch(escolha){
        case 1:
            return editando();
        case 2:
            return removendo();
        default:
            console.log('Opção inválida, tente novamente');
            return  editarRemover();
    }
}

function confirmacao(){
    console.log('|------------------------------------------|');
    console.log('|     Para repetir a operação, presse 1    |');
    console.log('|------------------------------------------|');
    console.log('|  Para voltar ao menu principal, presse 2 |');
    console.log('|------------------------------------------|');
    console.log('|   Para sair do aplicativo, presse 0      |');
    console.log('|------------------------------------------|');
    let escolha = Number(prompt())
    switch(escolha){
        case 0:
            return false;
        case 1:
            return true;
        case 2:
            return menu();
        default:
            console.log('Opção inválida, tente novamente.');
        return confirmacao();
    }
}