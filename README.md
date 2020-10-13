# Angular basic 1

Todos los fundamentos de angular.

Si queremos hacer una simulación de lo que se va a crear cuando ejecutamos un comando desde el CLI podemo hacer lo siguiente:

```
ng g s services/nuevo-servicio --dry-run
```

Si necesitamos indicar un modulo por defaul al momento de crear un componente:

```
ng g c components/ejemplo --module=app.module
```

Generacion de pipes

```js
ng g p pipes/capitalizado
```

Generación de directivas

```js
ng g d directives/resaltado
```

Ciclo de vida de un componente

- `ngOnInit` => cuando el componente esta incializado.
- `ngOnchanges` => cuando la data de propiedades relacionadas cambian.
- `ngDoCheck` => durante cada revision del ciclo de detección de cambios.
- `ngAfterContentInit` => despues de insertar cualquier contenido (<app-un-componente>).
- `ngAfterContentChecked` => despues de la revisión del contenido insertado.
- `ngAfterViewInit` => después de la inicialización del componente/hijos.
- `ngAfterViewChecked` => después de cada revisión de los componentes/hijos.
- `ngOnDestroy` => justo antes que se destruya el componente o directiva.

Patrón de correo válido

```js
pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$";
```

Cuando queremos en formulario reactivos tener un arreglo de controles podemos hacer lo siguiente

```js
skills: this.fb.array([]);
```

### Desplegando aplicaciones a producción

- Si queremos tener una versión de pre-producción podemos y usar lo siguiente `ng build`
- Si queremo un compilado para producción ejecutamos lo siguiente:
- Primero debemos de modificar nuestro `enviromen.ts` y en la propiedad producción la ponemos en true de esta forma `production: true`
- Luego ejecutamos el comando `ng build --prod`

### Pruebas automáticas

- Hay que probar siempre la ruta critica de la aplicación o el flujo más importante dentro nuestra app
- para ejecutar los 'test' debemos de ejecutar en consola el comando ng test

### Tipos de pruebas

- Unitarias: se le aplica a un unico componente y son aisladas, como por ejemplo llamadas a un API u otro componente o servicio, con lo cual nos ayudan a probar rápidamente métodos y funciones
- Integración: interviene mas de un componente.
- Extremo a Extremo(end to end): son las más largas de realizar

### Consideraciones importantes en los archivos .spec

```javascript
// si queremos ignorar las pruebas en un determinado componente
// anteponemos la letra 'x'
xdescribe('AppComponent', ...)

```

- Para saltarnos una prueba basta con poner la 'x' delante del describe()
- El describe() nos permite agrupar pruebas it().
- el it() es para hacer una prueba en concreto.
- el ciclo de vida de las pruebas encontramos los métodos:
- beforeAll(): se ejecuta antes de todas las pruebas, solo se hace una vez
- beforeEach(): se ejecuta antes de cada prueba
- afterAll(): se ejecuta luego de haberse realizado todas las pruebas
- afterEach(): se ejecuta luego de cada prueba

### Obtener el coverage

- Para obtener el coverage de nuestras pruebas ejecutamos en consola \$ ng test --code-coverage , este comando generara el reporte de covertura en la carpeta 'coverage' de nuestro proyecto
