 create database player;
 
 create TABLE player(
    id SERIAL PRIMARY KEY,
    playername VARCHAR(255),
    surname VARCHAR(255),
    score INTEGER,
    scoreDate DATE,
    email VARCHAR(255)
 ); 
 
ALTER TABLE player
   ADD email VARCHAR(255),
   ADD password VARCHAR(255);