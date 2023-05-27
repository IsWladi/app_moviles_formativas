# Levantar proyecto
1. con Docker se levanta la BD de MongoDB y la api de FastApi.
2. La app de ionic se levanta de manera local.

### Requisitos
- Docker desktop o Docker engine
- node v18.16.0
- npm v9.5.1
- ionic v7.1.1

### Docker: MongoDB y FastApi
- en la raiz del proyecto ejecutar en la terminal `docker compose build` para construir la imagen de FastApi(Definido en ./api/Dockerfile)
- en la raiz del proyecto ejecutar en la terminal `docker compose up -d` para levantar los servicios definidos en `docker-compose.yml`
- Configurar la base de datos sin descargar interfaz grafica de mongo:
  - conectarse al container de mongo: `docker exec -it SkeletonApp_bd mongo --authenticationDatabase admin -u admin -p myPassword123`
  - ya conectado a la shell de mongo con el comando anterior, ejecutar los siguientes comandos en la misma shell:
    1. crear base de datos: `use skeleton`
    2. crear coleccion de usuarios: `db.createCollection("usuarios")`
    3. importar usuarios: copiar contenido de `usuarios.txt` y pegar en la shell de mongo y dar a enter si es necesario
    4. (opcional) comprobar/ver usuarios insertados: `db.usuarios.find().pretty()`
    4. `exit` (esto cerrara la shell de mongo)

### Local: Ionic app
- en la carpeta `/SkeletonApp/` ejecutar comando: `npm install`
- en la carpeta `/SkeletonApp/` ejecutar comando: `ionic serve`

