# portfolio-webpack

1. Configurar el proyecto
Primero, asegúrate de tener Node.js y npm instalados en tu máquina. Puedes verificar esto ejecutando los siguientes comandos en tu terminal:

node -v
npm -v

2. Crear el proyecto y el archivo package.json
Crea una carpeta para tu proyecto y navega dentro de ella:

mkdir mi-proyecto
cd mi-proyecto

Luego, inicializa un nuevo proyecto npm:

Copiar código
npm init -y

npm install --save-dev webpack webpack-cli



Para instalar y configurar Webpack en un proyecto que utiliza JavaScript, HTML y CSS, sigue estos pasos:

1. Configurar el proyecto
Primero, asegúrate de tener Node.js y npm instalados en tu máquina. Puedes verificar esto ejecutando los siguientes comandos en tu terminal:

bash
Copiar código
node -v
npm -v
2. Crear el proyecto y el archivo package.json
Crea una carpeta para tu proyecto y navega dentro de ella:

bash
Copiar código
mkdir mi-proyecto
cd mi-proyecto
Luego, inicializa un nuevo proyecto npm:

bash
Copiar código
npm init -y
3. Instalar Webpack y Webpack CLI
Instala Webpack y su CLI como dependencias de desarrollo:

bash
Copiar código
npm install --save-dev webpack webpack-cli
4. Configurar Webpack
Crea un archivo de configuración webpack.config.js en la raíz de tu proyecto


6. Instalar cargadores para CSS y HTML
Instala los cargadores necesarios para manejar CSS y HTML:

npm install --save-dev style-loader css-loader html-loader


7. ñadir estos scripts in package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --open"
  },

2. Instalar y configurar webpack-dev-server
Si aún no tienes instalado webpack-dev-server

npm install --save-dev webpack-dev-server

8. Configurar html-webpack-plugin
Para manejar el archivo HTML de manera eficiente, puedes usar el plugin html-webpack-plugin. Instálalo y configúralo así:

npm install --save-dev html-webpack-plugin


----- Limpieza de dependencias y actualizaciones
Si aún encuentras problemas, asegúrate de tener las versiones más recientes de webpack, webpack-cli y webpack-dev-server:

npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugi

--------------------

npm run build
npm start


------ Descargar forma pdf

npm install jspdf

