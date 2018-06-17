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

