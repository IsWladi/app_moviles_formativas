# Levantar proyecto
1. con Docker se levanta la BD de MongoDB y la api de FastApi.
2. La app de ionic se levanta de manera local.

### Docker: MongoDB y FastApi
- docker compose build
- docker compose up -d
- docker exec -it SkeletonApp_bd mongo --authenticationDatabase admin -u admin -p thisIsAVeryGoodPasswordSHHHHHH
- use skeleton
- db.createCollection("usuarios")
- pegar el archivo de usuarios.json
- exit(esto cerrara la shell de mongo)

### Local: Ionic app
- ir a carpeta ./SkeletonApp/ y ejecutar comando: `nmp install`
- ir a carpeta ./SkeletonApp/ y ejecutar comando: `ionic serve`

