import fs from 'fs';

const caminhoComprar = './comprar.json';
const caminhoComprado = './comprado.json';

//Cadastra itens no arquivo de itens para comprar
function itemComprar(item) {
    const conteudo = item;
    try{
        fs.writeFileSync(caminhoComprar, JSON.stringify(conteudo));
        console.log('Item cadastrado com sucesso');
        return true;
    }catch (error){
        console.log('Não foi possivel cadastrar seu item');
        return false;
    }
}
//Cadastra os itens no arquivo de itens comprados
function itemComprado(item) {
    try{
        const conteudo = JSON.stringify(item);
        fs.writeFileSync(caminhoComprado, conteudo);
        console.log('Item cadastrado com sucesso');
        return true;
    }catch (error){
        console.log('Não foi possivel cadastrar seu item');
        return false;
    }
}
//Puxa a lista de arquivo dos itens comprados
function listaComprado(){
    try {
        const lista = JSON.parse(fs.readFileSync(caminhoComprado));
        return lista;
      } catch (err) {
        console.log('Não existem itens na lista');
        return false;
      }
}
//Puxa a lista de arquivo de itens para comprar
function listaComprar(){
    try {
        const lista = JSON.parse(fs.readFileSync(caminhoComprar));
        return lista;
      } catch (err) {
        console.log('Não existem itens na lista');
        return false;
      }
}