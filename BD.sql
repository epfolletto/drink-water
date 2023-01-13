CREATE TABLE users (
	id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    weigth int NOT NULL,
    goal INT NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE historic (
	id VARCHAR(255) PRIMARY KEY,
    id_user VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    goal INT NOT NULL,
    mlRegister INT NOT NULL,
    checkGoal BOOLEAN NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id)
);

SELECT * FROM users;
SELECT * FROM historic;

INSERT
INTO historic (id, id_user, date, time, goal, mlRegister, checkGoal)
VALUES ('1', 'f7b9bdcf-7ed4-4ad0-bfa2-0d3f0c464d4a', '2023-01-10', '01:12:40', 2975, 1000, false);

INSERT
INTO historic (id, id_user, date, time, goal, mlRegister, checkGoal)
VALUES ('2', '5f27bed6-bd3a-4bc2-b29c-768cfd26b9e3', '2023-01-11', '05:17:30', 1750, 800, true);

INSERT
INTO historic (id, id_user, date, time, goal, mlRegister, checkGoal)
VALUES ('3', '5f27bed6-bd3a-4bc2-b29c-768cfd26b9e3', '2023-01-12', '12:32:30', 1750, 1000, false);

INSERT
INTO historic (id, id_user, date, time, goal, mlRegister, checkGoal)
VALUES ('4', '5f27bed6-bd3a-4bc2-b29c-768cfd26b9e3', '2023-01-13', '15:16:49', 1750, 750, false);

INSERT
INTO historic (id, id_user, date, time, goal, mlRegister, checkGoal)
VALUES ('5', '9d64b8b4-ee05-42e6-9fbb-790593417e6e', '2023-01-12', '09:52:53', 3000, 200, false);

INSERT
INTO historic (id, id_user, date, time, goal, mlRegister, checkGoal)
VALUES ('6', 'f2810bc0-a457-4745-9233-f946ff48d664', '2023-01-09', '19:12:44', 3000, 150, false);

INSERT
INTO historic (id, id_user, date, time, goal, mlRegister, checkGoal)
VALUES ('7', 'f2810bc0-a457-4745-9233-f946ff48d664', '2023-01-13', '01:15:40', 3000, 175, false);

INSERT
INTO historic (id, id_user, date, time, goal, mlRegister, checkGoal)
VALUES ('8', 'f2810bc0-a457-4745-9233-f946ff48d664', '2023-01-13', '02:31:42', 3000, 345, false);

INSERT
INTO historic (id, id_user, date, time, goal, mlRegister, checkGoal)
VALUES ('9', 'f2810bc0-a457-4745-9233-f946ff48d664', '2023-01-12', '02:31:42', 3000, 4000, false);

SELECT historic.id_user, historic.mlRegister, SUM(historic.mlRegister)
FROM historic
WHERE historic.id_user = 'f2810bc0-a457-4745-9233-f946ff48d664' AND historic.date = '2023-01-13' 
GROUP BY historic.id_user;

SELECT historic.date, historic.goal, SUM(historic.mlRegister) as sum
FROM historic
WHERE historic.id_user = '5f27bed6-bd3a-4bc2-b29c-768cfd26b9e3'
GROUP BY historic.date
ORDER BY historic.date ASC;
