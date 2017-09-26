# SIGAEE FRONT #


## Ambiente de desarrollo ##

### Git ###
https://git-for-windows.github.io/

### Node.js ###
Windows https://nodejs.org/en/download/
Instalar msi 64/32 bits
Seguir los pasos del instalador hasta terminar.
Verificar que se encuentre en las variables de entorno

### Gulp ###
En terminal ingresar el comando 
$npm install -g gulp

### Bower ###
En terminal ingresar el comando
$npm install –g bower

## Deployar Ambiente ##

Instalar dependencias de node
$npm install

Instalar dependencias de bower 
$bower install

## Tareas programadas ##

Levantar servidor en desarrollo 
$gulp serve 

Crear app 
$gulp dist

Deployar app en servidor
$gulp serve-dist