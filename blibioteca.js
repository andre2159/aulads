
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
console.log("livro adicionado:",livro.nome)

    },//funcao
    //2. Mostrar todos os livros da estante
    mostrarLivros(){
        for(let i=0;i<this.estante.length;i++){
            const livro=this.estante[i];
            console.log("livro",livro.nome);
            console.log("preço",livro.preço);
            console.log("categoria",livro.categoria);
            console.log("estoque",livro.estoque);  
        } 
        }
}// biblioteca
biblioteca.adicionarlivro(
"a era de um deus",
10
,"ficção científica",
10  
)



biblioteca.mostrarLivros()
   