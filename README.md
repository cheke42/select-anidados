# Creando SELECT anidados con React

En este proyecto utilice la librería de [React](https://github.com/facebook/create-react-app). A través de tres select en el cual se le solicita al usuario seleccionar Provincia, Departamento y Localidad. 

## API UTILIZADA
Los datos son obtenidos de la API de [https://datosgobar.github.io/georef-ar-api/](https://datosgobar.github.io/georef-ar-api/)

Para las provincias: [http://apis.datos.gob.ar/georef/api/provincias](http://apis.datos.gob.ar/georef/api/provincias)

Para los departamentos: [https://apis.datos.gob.ar/georef/api/departamentos?provincia=24}](https://apis.datos.gob.ar/georef/api/departamentos?provincia=24)

Para las localidades: [https://apis.datos.gob.ar/georef/api/localidades?departamento=26021}](https://apis.datos.gob.ar/georef/api/localidades?departamento=26021)

En la url de departamento se filtra por la provincia CHUBUT (24) y en la url localidades se filtra por el departamento ESCALANTE (26021)

## INSTALAR DEP:

En la ruta del proyecto

### `npm install`

## INICIAR EL PROYECTO

### `npm start`

La aplicación se abrirá en :

```sh
http://localhost:3000
```

![Alt text](/public/captura.png?raw=true "Captura")

:D
