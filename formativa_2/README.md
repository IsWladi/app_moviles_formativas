# Levantar proyecto
1. con Docker se levanta la BD de MongoDB y la api de FastApi.
2. La app de ionic se levanta de manera local.

### Docker: MongoDB y FastApi
- docker compose build
- docker compose up -d
- en mongoCompass hacer una nueva conexion(str de conexion: mongodb://localhost:27017)
    - con username: admin, password: thisIsAVeryGoodPasswordSHHHHHH
- en la conexion, crear una bd llamada skeleton y una coleccion llamada usuarios
- importar el usuarios.json en la coleccion de usuarios para tener datos para trabajar
- ir a carpeta ./SkeletonApp/ y ejecutar comando: `ionic serve`
