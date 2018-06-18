# Platzi video aplicando Redux

### Redux

Es una librería creada por **@dan_abramov**, para manipular los datos de una forma separada de la interfaz, similar a lo que hace webpack con la opción hot-reload <br>
Es un **contenedor** del *estado predecible* para aplicaciones de JavaScript de front-end complejas. <br>


### Componentes en Redux:

**Store:** Es el centro y la verdad de todo, con métodos para actualizar, obtener y escuchar datos. <br>
**Actions:** Son bloques de información que envian datos desde la aplicación hacia el store. <br>
**Reducers:** Cambian el estado de la aplicación. <br> <br>


### Tres principios de Redux:

**Única fuente de verdad:** El estado de toda tu aplicación esta almacenado en un árbol guardado en un único store lo que hace mas fácil el proceso de depuración. <br>

**Solo Lectura:** La única forma de modificar el estado es emitiendo una acción, un objeto que describe que ocurrió. <br>

**Los cambios se realizan con funciones puras:** Los reduces son funciones puras que toman el estado anterior y una acción, y devuelven un nuevo estado. <br>


### Instalar redux:

`npm install --save redux`



### Entendiendo y agregando un Store
Es la parte más importante de entender cuando estamos haciendo algo en Redux. <br><br>


**Datos importantes del Store:** <br><br>

- Contiene el estado de la aplicación.
- Se puede acceder al estado con el método **getState()**
- Se puede actualizar el estado con el método **dispatch(action)**
- Escucha cambios con el método **subscribe(listener)**
- Deja de escuchar cambios retornando la función del método **subscribe(listener)**


El storage se importa de la siguiente forma: <br>
```javascript
import { createStore } from'redux'
```

**Reducer** => Función pura que retorna el próximo estado.<br>
**PreloadState / InitialState** => Es el estado inicial de la aplicación, la primera carga, el llamado a una data. Puede ser cualquier tipo de dato.<br>
**Enhancer** => Función que puede extender redux con capacidades añadidas por librerías externas. Es opcional. Eg. Añadir las dev-tools<br>

Además, debemos crear una constante que será la que utilicemos en la aplicación.
```javascript
const store = createStore(
  reducer,
  initialState,
  enhancer
)
```


<br><br><br>
### Enlaces de interes:

[Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) <br>
[Redux DevTools Extension - Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) <br>

