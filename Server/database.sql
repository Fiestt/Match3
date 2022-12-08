 create database player;
 
 create TABLE player(
    id SERIAL PRIMARY KEY,
    playerName VARCHAR(255),
    surname VARCHAR(255),
    score INTEGER,
    scoreDate DATE
 ); 
 
ALTER TABLE player
   ADD email VARCHAR(255),
   ADD password VARCHAR(255);