-- 1

-- a) Resposta: Tira da tabela a coluna "salary".

-- b) Resposta: Altera o campo "gender" para "sex", e define um VARCHAR de 6 caracteres.

-- c) Resposta: Erro pois "gender" foi alterado anteriormente para "sex".

-- d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- 2) a)
UPDATE Actor 
SET name = "Moacyr Franco", birth_date = "2020-02-10"
WHERE id = "003";

-- b)
UPDATE Actor
SET name = UPPER(name) 
WHERE name LIKE "juliana paes";

UPDATE Actor
SET name = "Juliana Paes" 
WHERE name LIKE "juliana paes";

-- c)
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male"
WHERE id = "005";

-- d) ele não alterou e não exibiu nenhum erro.

-- 3) a)
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

--b)
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

-- 4) a)
SELECT MAX(salary) FROM Actor;

--b)
SELECT MIN(salary) FROM Actor
WHERE gender = "female";

--c)
SELECT COUNT(*) FROM Actor
WHERE gender = "female";

--d)
SELECT SUM(salary) FROM Actor;

-- 5) a) faz a soma por genero e agrupa os diferentes gerenos existentes na tabela.

--b)
SELECT id, name FROM Actor 
ORDER BY name DESC;

--c)
SELECT * FROM Actor 
ORDER BY salary ASC;

--d)
SELECT * FROM Actor 
ORDER BY salary DESC
LIMIT 3;

--e)
SELECT gender, AVG(salary) FROM Actor
GROUP BY gender;

-- 6) a)
ALTER TABLE Movies ADD playing_limit_date DATE;

--b)
ALTER TABLE Movies CHANGE avaliacao avaliacao FLOAT;

--c)
UPDATE Movies
SET playing_limit_date = CURDATE()
WHERE id = "004";

UPDATE Movies
SET playing_limit_date = "2021/08/05"
WHERE id = "001";

--d) Resposta: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0. Ele executou o comando, porém não encontrou nenhuma linha com o id determinado, então na não fez alterações na tabela Movies.