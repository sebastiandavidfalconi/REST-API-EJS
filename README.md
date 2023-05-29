# Ejemplo MERN Stack

Este repositorio contiene un proyecto de ejemplo que muestra el uso del stack MERN. El stack MERN está compuesto por las siguientes tecnologías: MongoDB, Express.js, React.js y Node.js. En este proyecto, construiremos una aplicación web simple utilizando estas tecnologías.

Este código es basado por el desarrollado por Fazt Web, con algunas modificaciones propias.
## Instalación

Para ejecutar este proyecto de forma local, asegúrate de tener los siguientes requisitos previos instalados:

- Node.js: [Descargar e instalar Node.js](https://nodejs.org/)
- MongoDB: [Descargar e instalar MongoDB](https://www.mongodb.com/)

Luego, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

   ```
   git clone https://github.com/tu-nombre-usuario/mern-stack-ejemplo.git
   ```

2. Navega al directorio del proyecto:

   ```
   cd mern-stack-ejemplo
   ```

3. Instala las dependencias utilizando npm:

   ```
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```
   npm start
   ```

   El servidor se ejecutará en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

El proyecto sigue una estructura simple con los siguientes archivos y directorios:

- `server.js`: Punto de entrada del servidor de Node.js.
- `views/`: Contiene las vistas de EJS para el frontend.
- `public/`: Contiene los archivos estáticos públicos, como estilos CSS y archivos JavaScript.

## Uso

El proyecto de ejemplo demuestra operaciones básicas de CRUD (Crear, Leer, Actualizar, Eliminar) para una colección de productos. Las rutas disponibles son:

- `GET /products`: Obtiene todos los productos.
- `GET /products/:id`: Obtiene un producto específico por su ID.
- `POST /products`: Crea un nuevo producto.
- `PUT /products/:id`: Actualiza un producto específico por su ID.
- `DELETE /products/:id`: Elimina un producto específico por su ID.
