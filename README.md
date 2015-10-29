# Práctica 5 STW

## Karma, Travis y Web Workers, despliegue en iaas.ull.es

**Descripción**

Este repositorio aloja la práctica de conversión de tipos, realizada con html, css y javascript, usando tecnologías Mocha, Chai, Sinon, Karma y Travis para pruebas, Blanket para el análisis de cobertura de código y Gulp como sistema de construcción y gestión del proyecto. Además en esta práctica trabajaremos con web workers en javascript.

El despliegue de la práctica será en GitHub Page y el servicio iaas.ull.es de la Universidad de La Laguna.

Esta práctica pertenece a la asignatura Sistemas y Tecnologías Web del grado de Ingeniería Informática de la Universidad de La Laguna, realizada por el alumno David Carlos.

##Tutorial para el despliegue en iaas.ull.es

**Acceso a la maquina del servicio iaas.ull.es**

Accedemos al enlace del iass, e iniciamos sesión con nuestras credenciales de la ULL.

Modificamos el acceso a noVNC para poder visualizar la terminal de la máquina en el navegador o también podemos acceder por SSH mediante un cliente ssh una vez conozcamos nuestra ip, que la averiguaremos con el comando ifconfig cuando accedemos a la máquina.

Las credenciales de sesión de la máquina  será usuario / usuario que posteriormente cambiaremos la contraseña una vez iniciemos por primera vez sesión.

**Instalaciones necesarias**

Ya la máquina cuenta con NodeJS y Git, podremos ver la versión con los comandos.

```
nodejs --version 
git --version
```

Instalaremos npm ya que no está instalado en la máquina.

`sudo apt-get install npm`

**Clonando un repositorio git**

Clonaremos un repositorio git de un proyecto para posteriormente desplegarlo en la máquina.

**Desplegar la aplicación**

Primero instalaremos las dependencias necesarias de nuestra aplicación, especificadas en el package.json con el comando

`nodejs install`

Ejecutaremos nuestro servidor de ficheros estáticos para poder acceder posteriormente desde nuestro navegador a nuestra aplicación.

**Visualizar nuestra web**

Accedemos en nuestro navegador a nuestra ip que ya hemos averiguado anteriormente al acceder a nuestra máquina e indicamos también el puerto que hemos configurado de escucha en el servidor de ficheros estáticos.

##Enlaces

**Repositorio GitHuB**

* [Repositorio](https://github.com/alu0100536652/STW05)

**Página de la práctica GitHub Page**

* [Web](http://alu0100536652.github.io/STW05)

**Página de la test**

* [Test](http://alu0100536652.github.io/STW05/test/)

**Página del autor**

* [Web Author](http://alu0100536652.github.io)

## Travis

* [Travis](https://travis-ci.org/alu0100536652/STW05)

[![Build Status](https://travis-ci.org/alu0100536652/STW05.svg)](https://travis-ci.org/alu0100536652/STW05)

## Página de la práctica en el servidor iaas.ull.es

* [Web](http://10.6.128.90:8080)

## Datos de desarrollo

Durante la ejecución de tareas gulp se puede presentar un fallo con gulp-notify, para solucionarlo instalar en la terminal unix 'libnotify-bin' con el comando: sudo apt-get install libnotify-bin

## Comandos  útiles

- npm init
- npm install
- npm run <script>
- mocha init <path>
