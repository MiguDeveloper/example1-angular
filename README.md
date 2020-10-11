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

Desplegando aplicaciones a producción

- Si queremos tener una versión de pre-producción podemos y usar lo siguiente `ng build`
- Si queremo un compilado para producción ejecutamos lo siguiente:
- Primero debemos de modificar nuestro `enviromen.ts` y en la propiedad producción la ponemos en true de esta forma `production: true`
- Luego ejecutamos el comando `ng build --prod`
