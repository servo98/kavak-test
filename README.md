# kavak-test

## Notas importantes

* Es necesario usar tener instalado node v12.18.0
* Se usó la version de sequelize v^5.21.11 la cual tiene un error al implementar el LIMITER y el OFFSET al mismo tiempo, por lo que se hizo un una función de ayuda para solventar es issue https://github.com/sequelize/sequelize/issues/12277 

## Instalación
 __(Se recomienda tener instaldo nvm)__
 *  `$ nvm install 12 && nvm use 12` (opcional)
 * `$ npm i`
 * (Si se quiere confiurar ejecutar y editar el archivo .env) 
 ```BASH
    cp .env.example .env
```
 * `npm run dev` **(Correrá en el puerto 3000 por default)**

 ## POSTMAN
 Se adjunta el archivo `kavak.postman_collection.json` el cual se puede importar en postman para provar el servicio