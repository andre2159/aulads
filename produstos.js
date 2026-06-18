const produtos={
    nome:"arroz",
    preço: 10,
    marca : "fazenda"

};
for (let chave in produtos){
    console.log (`${chave}: ${produtos[chave]}`);
}
console.log(Object.keys(produtos));
console.log(Object.values(produtos));