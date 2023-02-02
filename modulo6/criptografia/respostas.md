1- a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?

respostas: 

Round: É o número de iterações que o algoritmo de hash irá executar. O valor recomendado é 12, mas pode ser alterado de acordo com a necessidade. O valor que eu usei foi 12. Por que mais que isso o tempo de processamento aumenta muito.

Salt: É uma string aleatória que é adicionada ao hash.

2- a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

respostas:

O cadastro, pois o login é o que vai ser comparado com o cadastro.

d) No exercício da aula anterior, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.

respostas:

não, pois o endpoint user/profile não tem nenhuma informação sensível.