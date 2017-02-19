#Ejemplo de babel al lado del server

{
  "name": "babelServer",
  "main": "index.js",
  "dependencies": {
    "babel-register": "^6.23.0",
    "express": "^4.14.1"
  },
  "devDependencies": {
    "babel-cli": "^6.23.0",
    "babel-preset-es2015-node": "^6.1.1"
  },
  "scripts": {
    "start": "node index.js"
  }
}
