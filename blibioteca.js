
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
        },
        //3. Alugar um livro
        aluguel(nome){
            for(let i=0;i<this.estante.length;i++){
                const livro=this.estante[i];
                if(livro.nome===nome){
                    if(livro.disponivel){
                        livro.disponivel=false;
                        livro.alugado=true;
                        livro.vezesalugado++;
                        console.log("livro alugado:",livro.nome);
                    }else{
                        console.log("livro indisponivel:",livro.nome);
                    }
                }
            }
        },
        devolver (nome){
            for(let i=0;i<this.estante.length;i++){
                const livro=this.estante[i];
                if(livro.nome===nome){
                    if(livro.disponivel===false){
                        livro.disponivel=true;
                        livro.alugado=false;
                        livro.estoque+=1.
                        console.log("livro",+nome,+"delvovido");
                        return;}
                        else{console.log("o",+nome,+"ja está disponivel");
                            return;
                        }
                    }
                    }
                    console.log("o",+nome,+"não foi encontrado");
                },
removerlivro(nome){
    for(let i=0;i<this.estante.length;i++){
        if (this.estante[i].nome.toLowerCase() === nome.toLowerCase()) {

        
            const removido=this.estante[i]
            this.estante.splice(i,1);
            console.log("livro removido",+removido.nome);
            return;
        }}
        console.log("livro não encontrado");
    }
};



// biblioteca
biblioteca.adicionarlivro(
"a era de um deus",
10
,"ficção científica",
10  
)



biblioteca.mostrarLivros()
biblioteca.aluguel("a era de um deus");
biblioteca.devolver("a era de um deus");
biblioteca.removerlivro("a era de um deus");


