# BITCOIN VALUE

## Información de la aplicación
BitcoinValue es el nombre de la aplicación web capaz de convertir el valor del bitcoin a distintas divisas tales como: (**USD, CLP, BRL, EUR, CNY**), con el fin de facilitar la conversion de esta moneda; La aplicación además cuenta con una sección de registro en el cual se detalla todo el historico de cada divisa, que es representada mediante graficos.

## MODO DE USO

La aplicación esta desarrollada con docker por lo tanto es importante seguir los siguientes pasos:

1. **Descargar o clonar este repositorio.**
2. **Abrir el terminal e ingresar a la ruta de la carpeta donde se encuentra el archivo `docker-compose.yml`**
3. **Construir una imagen con el siguiente comando:**
> sudo docker-compose build
4. **Finalizado esto, procedemos al siguiente comando:**
> sudo docker-compose up
5. **Listo, puedes ingresar a la API a traves del puerto `1337` y a la aplicacion en el puerto `8080`.**

### Planteamiento

Se analizó el problema y definió la arquitectura para poder desarrollar esta aplicación. Luego de definir la arquitectura, se definió qué tecnologías ocupar; para el lado del **BACKEND** se utilizó **SAILS.JS** donde se construyó una **API REST** de distintas divisas, también, **MONGOLAB** como base de datos. Mientras que, por el lado del **FRONTEND** , se utilizó **ANGULAR**.

Finalmente, al tener claro las tecnologías a ocupar, se trabajó en el diseño de la aplicación (Frontend), para luego dar paso al (Backend) construyendo la API y la base de datos.

![](https://i.ibb.co/FKsRykd/Arq.png)

A continuación se detallan todas las tecnologías utilizadas en esta aplicación:


**Backend:**

1. Sails JS
2. MongoLAB

**Front-end:**

1. Angular
2. Boostrap 4
3. Sass
4. Angular Material

> Nota: En esta aplicación se utilizo Docker :whale:


