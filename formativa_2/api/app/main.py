# This api will be requested by the ionic app
from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from bson import ObjectId
from bson.json_util import dumps
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# Configurar los orígenes permitidos en los encabezados CORS
origins = [
    "http://localhost:8100",  # Reemplaza con la URL de tu aplicación Angular
]

# Agregar el middleware CORS a la aplicación
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

# Configurar las credenciales de autenticación
username = "admin"
password = "myPassword123"
# Crear una instancia del cliente de MongoDB
mongo_client = MongoClient("mongodb://SkeletonApp_bd:27017/",
                           username=username,
                           password=password)

# Obtener una referencia a la base de datos
mongo_db = mongo_client["skeleton"]
usuarios_collection = mongo_db["usuarios"]

# retorna el id del usuario si es valido el login y false si no lo es


@app.get("/usuario/login/{nombre}/{password}")
def usuarioLogin(nombre: str, password: str):
    login = usuarios_collection.find_one(
        {"nombre": nombre, "password": password}, {"nombre": True,
                                                   "apellido": True, "educacion": True, "fechaNacimiento": True}
    )

    if login:

        # armar el json de retorno
        dict_return = {}
        dict_return["id"] = str(login["_id"])
        dict_return["username"] = login["nombre"]

        if "apellido" in login:
            dict_return["surname"] = login["apellido"]

        if "educacion" in login:
            dict_return["education"] = login["educacion"]

        if "fechaNacimiento" in login:
            dict_return["date"] = login["fechaNacimiento"]

        return dict_return

    else:
        return str("invalid")
