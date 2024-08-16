CREATE DATABASE mercadoLibre;

USE mercadoLibre;

CREATE TABLE productos (
    id VARCHAR(50) PRIMARY KEY,
    titulo VARCHAR(255),
    imagen VARCHAR(255),
    permalink VARCHAR(255),
    precio FLOAT
);