/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [2,4,6,8,10];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function ninja(qualquer){
return qualquer;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

  console.log(ninja (qualquer) [1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var arrei= ['Weslley',1,'a',4];

function ninja2(arrei, index){
  return arrei[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrei2=['Ninja', 'weslley', true, 6, [1,2],{b:2}];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(ninja2(arrei2, 0) ); 
console.log(ninja2(arrei2, 1) ); 
console.log(ninja2(arrei2, 2) ); 
console.log(ninja2(arrei2, 3) ); 
console.log(ninja2(arrei2, 4) ); 
console.log(ninja2(arrei2, 5) );
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
var obj = {
  'nome1':{
    quantidadePaginas:'400',
    autor:'Weslley',
    editora:'eumesmo'
  },
  'nome2':{
    quantidadePaginas:'200',
    autor:'Cardoso',
    editora:'Sextante'
  },
  'nome3':{
  quantidadePaginas:'600',
    autor:'dos Santos',
    editora:'Saraiva'
  }
 };
  if(!bookName){
    return book
  }
  return book[bookName];
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName='nome1';
console.log("O livro" +/ bookName + "tem"+ book(bookName).quantidadePaginas + "páginas");
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( "O autor do livro" + bookName + "é" + book(bookName).autor");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro" + bookName + "foi publicado pela editora"+ book(bookName").editora);
/*                                        
