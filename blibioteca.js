
const biblioteca= {
    estante: [], //Array (lista) de livros
    adicionarlivro(nome,preço,categoria,estoque){
        const livro={
            nome:nome,
            preço:preço,
            categoria:categoria,
            estoque:estoque,
            disponivel:true,
            alugado:false,
            vezesalugado:0,
        };
        this.estante.push(livro);
console.log("livro adicionado:0",livro.nome)

    }//funcao
}// biblioteca
biblioteca.adicionarlivro(
"a era de um deus",
10
,"ficção científica",
10  
)

