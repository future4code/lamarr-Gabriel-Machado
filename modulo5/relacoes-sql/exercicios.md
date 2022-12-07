filmes
avaliações

notas
comentarios

1- 
a) Chave estrangeira é para referenciar a ligação de uma tabela com a outra. Ela deve fazer referência a uma chave primária de outra tabela.

b)
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("001", "Filme bacana", 7, "002"),
       ("002", "O enredo me pegou desprevenido", 8.9, "002"),
       ("003", "não gostei da historia", 8.8, "003");

c)Como não temos esse id, deu erro já que o banco não consegue adicionar o que passamos a ele, a chave estrangeira tem uma restrição.


d)ALTER TABLE Movies DROP COLUMN rating;

e)Não conseguimos apagar pois como o id é referenciado de outra tabela isso nos impede, por questão de hierarquia.

2-
a)É uma tabela que contém duas colunas. Uma vai recerber a id do filme e a outra a id do ator. Como as ids originalmente não fazem parte dessa tabela, elas serão uma chave estrangeira, e serão relacionadas por esta tabela.

b)INSERT INTO MovieCast(movie_id, actor_id)
VALUES
	("001", "004"),
	("001", "005"),
	("001", "003"),
	("002", "001"),
	("002", "002"),
	("003", "002");
 
 c) Os ids não existem, assim ele não consegue referenciar os valores.

d) DELETE FROM MovieCast WHERE id = 1;

Não é possível deletar ou atualizar uma linha pai: falha de restrição de chave estrangeira

3- 
a)Está selecionando a tabela Movie com a tabela Rating e o operador ON está indicando qual condição é para ser comparado nas duas tabelas para impimir o resultado.

b)SELECT  m.name as name, m.id as movies_id, r.rate as rating 
FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;


