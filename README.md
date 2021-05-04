# AngularAvanzado CLI Practica
Apuntes del curso

<!-- 1.- Ayuda el componente-->
ng generate c --help

<!-- 2.-  Para crear un componente sin el testing -->
ng g c --skipTests=true

<!-- 3.- Para crear un servicio sin el archivo Test -->
ng g s --skitTest=true

<!-- 4.- Para simular crear directorios y archivos -->
ng g s services/user --dry-run (-d)shorcut..

<!-- Los servicios desde angular 6 Ya no es necesario invocarlos en el Modulo Principal  -->
SERVICES

<!-- ng g --help  Este comando Puede generar todo eso -->
Available Schematics:
  Collection "@schematics/angular" (default):
    app-shell
    application
    class
    component
    directive
    enum
    guard
    interceptor
    interface
    library
    module
    pipe
    resolver
    service
    service-worker
    web-worker

<!-- 5.- ng g guard  -->
<!-- Toda clase que tenga..  -->
@injectable({
    provided: 'root'
})
<!-- No necesita que se invoque en el modulo principal -->


<!-- Creando uel directorio actual de la aplicacion -->
1.- auth: contiene el login y el register
2.- pages: contendra la pagina 404 y la pagina dsahboard luego de que el login sea correcto.
3.- shared: Contiene todas laas cosas que se van a utilizar globalmente en toda al aplicación.
4.- shared/breadcrumbs: Son las migajas de pan de la aplicación.
5.- shared/sidebar: Es el Sidebar del la plantilla adminPro, este es un componente que se va utilizar globalmente.
5.- shared/sidebar: Es el Header del la plantilla adminPro, este es un componente que se va utilizar globalmente.
5.- shared/footer: Es el Footer del la plantilla adminPro, este es un componente que se va utilizar globalmente.


<!-- Agregando libreria de adminPro al index y copiando los plugins a los assets -->
en assets

<!-- PAGES  -->
Son de usuarios ya autenticados.

<!-- La app principal MAIN se pone  en el componenete principal  -->
pages/pages

<!-- Crear un modulo appRouting -->
en APP
ng g m appRouting --flat


<!-- Separar el template principal Admin pro de la pagina login -->
ng g c pages/pages --flat --skipTests -is <!-- Esta pagina se mostrara cuando se este autentificado -->

<!-- Creacion de un modulo -->
ng g m shared/shared

<!-- Los components son pequequeños pedasos de la aplicacion -->
$ ng g m components/components --flat  // Crear solo el modulo
ng g c components/incrementador --skipTests=true // Crea solo el componente