

 //O escopo léxico que dizer que a variavel conhece o local onde foi declarada e seus vizinhos e os vizinhuos acima dela e acima dela e assim por diante até o escopo global.
 //Importande dizer que quando utilizado um variavel na função ela seguirá esta ordem para achar a variavel.
 //No caso abaixo a função imprimira 'Gabriel' pois é o nome atribuido a variavel nome quando a função foi declarada.
const nome = 'Gabriel'
 function falaNome() {
     console.log(nome)
 }
 
 function usaFalaNome() {
    const nome = 'Otávio'
     falaNome()
 }

 usaFalaNome()