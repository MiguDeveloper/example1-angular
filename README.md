# Angular basic 1

Todos los fundamentos de angular.

Generacion de pipes
```js
ng g p pipes/capitalizado
```

Generación de directivas
```js
ng g d directives/resaltado
```

Ciclo de vida de un componente

- ```ngOnInit``` => cuando el componente esta incializado.
- ```ngOnchanges``` => cuando la data de propiedades relacionadas cambian.
- ```ngDoCheck``` => durante cada revision del ciclo de detección de cambios.
- ```ngAfterContentInit``` => despues de insertar cualquier contenido (<app-un-componente>).
- ```ngAfterContentChecked``` => despues de la revisión del contenido insertado.
- ```ngAfterViewInit``` => después de la inicialización del componente/hijos.
- ```ngAfterViewChecked``` => después de cada revisión de los componentes/hijos.
- ```ngOnDestroy``` => justo antes que se destruya el componente o directiva.
