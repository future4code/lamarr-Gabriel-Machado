-- 1)
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- a) varchar(n) - string com no maximo N caracteres
-- date - Representa data (YYYY-MM-DD)
-- PRIMARY KEY - Chave primária (chave única na tabela)
-- NULL / NOT NULL - Indica se a coluna pode ser ou não pode ser nula

-- b) Quando utilizo o comando SHOW DATABASES ele retorna database e information schema. Quando se utiliza SHOW TABLE ele mostra as tabelas criadas.

-- c) Quando utilizo o comando DESCRIBE Actor ele retorna as informações da tabela Actor.

-- 2)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

--a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

--b) Duplicate entry '002' for key 'PRIMARY'( Entrada duplicada '002' para a chave 'PRIMARY'), esse erro acontece pois id é uma chave primária, um identificador daquele objeto, ele deve ser único.

--c)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- Column count doesn't match value count at row 1(A contagem de colunas não corresponde à contagem de valores na linha 1). O erro está dizendo que os valores que tentamos inserir não correspondem com os parâmetros passados.

--d)
INSERT INTO Actor (id, name,salary, birth_date, gender)
VALUES(
	"004",
	"Antônio Fagundes",
	400000,
	"1949-04-18", 
	"male"
);

-- Field 'name' doesn't have a default value(O campo 'nome' não tem um valor padrão). Nome não está sendo passado e é um valor que não pode ser null.

--e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- Incorrect date value(Valor de data incorreto). O valor não está sendo passado entre aspas.

-- 3)
-- a) 
SELECT * FROM Actor WHERE gender = "female";

-- b)
SELECT salary FROM Actor WHERE name = "Tony Ramos";

-- c)
SELECT * FROM Actor WHERE gender = "invalid";

-- Retornou uma linha com tudo nulo, ou seja, sem retorno, pois não há na tabela com esse valor.

-- d)
SELECT id, name, salary FROM Actor WHERE salary <= 500000;

-- e)
SELECT id, name, salary FROM Actor WHERE id = "002";

-- Unknow columns 'nome' in 'field list'( Colunas desconhecidas 'nome' na 'lista de campos'). O campo nome está errado, na tabela existe apenas o campo 'name'.

-- 4)
-- a) A query irá retornar o valor onde os dados especificados serão compatíveis, caso contrário não terá retorno.

-- b)
SELECT * FROM Actor 
WHERE (name NOT LIKE "A%" AND salary > 350000);

-- c)
SELECT * FROM Actor 
WHERE (name LIKE "%G%" OR name LIKE "%g%");

-- d)
SELECT * FROM Actor 
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;

-- 5

-- a) A query irá retornar a quantidade de linhas que atendem a condição.

CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliação INT NOT NULL
);

-- b)
INSERT INTO Movies (id, name, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

-- c)
INSERT INTO Movies (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
);

-- d)
INSERT INTO Movies (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);

-- e)
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES (
	"004",
    "Tropa de Elite",
    "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano.",
    "2007/10/05",
    10
);

-- 6 - a)
SELECT id, nome, avaliacao FROM Movies 
WHERE id = "002";

--b)
SELECT * FROM Movies
WHERE nome = "Tropa de Elite";

--c)
SELECT id, nome, sinopse FROM Movies 
WHERE avaliacao > 7;

-- 7
-- a)
SELECT * FROM Movies
WHERE nome LIKE "%vida%";

-- b)
SELECT * FROM Movies
WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%";

-- c) 
SELECT * FROM Movies
WHERE data_de_lancamento < "2022-11-08";

-- d)
SELECT * FROM Movies
WHERE data_de_lancamento < CURDATE() 
AND (nome LIKE "%vida%" OR sinopse LIKE "%vida%")
AND avaliacao > 7;
