# Aplicación React para consultar criptomonedas.

Proyecto para el curso de Udemy:

<a href="https://www.udemy.com/learn-react-by-building-and-deploying-production-ready-app">Learn React by building and deploying production ready app</a> Course.

### Modo producción.

```
$ npm run build
```

Para servir la página con <a href="https://www.npmjs.com/package/serve">serve</a> 
ejecutamos:

```
$ serve -s build
```

También podemos servirla con express, para lo cual ejecutamos:

```
$ node server.js
```

Para deplegar en now.sh primero instalamos now:

```
$ npm install now -g
```

Luego debemos acceder con nuestro email.

```
$ now login example@mail.com
```

Ahora contruimos la aplicación en modo producción

```
$ npm run build
```

Ingresamos al directorio  ` /build` y ejecutamos:

```
$ now
```

Esto despliega la aplicación en la nube. Para evitar el error de pagina no encontrada causada por BrowserRoute instalamos serve:

```
$ npm i -s serve
```

y agregamos dos script en nuestro package.json

```
"now-start": "serve -s ./build",
"now-build": "react-scripts build",

```

También debemos tener en cuenta el archivo `now.json`  como se indica en el tutorial de Zeit.  <a href="https://zeit.co/examples/create-react-app/">Tutorial</a> 

Ahora debemos volve a ejecutar `now` pero esta vez desde la raiz de nuestro proyecto, no dentro del directorio `./build`.

En este caso tenemos el deploy en la direccion:

<a href="https://react-coin-8ywm7h78g.now.sh">https://react-coin-8ywm7h78g.now.sh</a> 

