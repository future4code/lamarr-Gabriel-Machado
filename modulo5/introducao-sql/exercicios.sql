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
