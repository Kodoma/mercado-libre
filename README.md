#Test para Mercado libre
ReactJS (Frontend) y NodeJs (Backend)

## Tecnologias Usadas
Frontend
- [Next.js](https://nextjs.org/) React.js server side client
- [Node.js](https://nodejs.org/es/) Server con Express


## Requerimientos
Para correr & trabajar en este proyecto necesitas tener instalado
- [Node.js](http://nodejs.org/) version > 14.0.0
- [npm](https://www.npmjs.org/)

### Docker y Docker Compose
- [Docker](https://docs.docker.com/engine/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instalación:
## Con Docker Compose
- Asegurarse de tener instalado [Docker](https://docs.docker.com/engine/installation/) y [Docker Compose](https://docs.docker.com/compose/install/)
- En la consola correr los siguientes comandos:
  - [sudo] `docker-compose build`
  - [sudo] `docker-compose up`
  - [sudo] `docker-compose down --rmi all` si tenes algun problema con las imagenes que creaste: repitirlos pasos anteriores
  
- Cuando esten arriba los dos servicios acceder a: 
  - http://localhost:3000/ para acceder frontend
  - http://localhost:8080/api-docs para acceder a documentacion swagger


## Con NPM
1. Asegurarse de tener intalado [npm](https://www.npmjs.org/)
2. En la consola correr los siguientes comandos:

### Production Mode
[Server]
- cd `mercado-libre/server`
- `npm install`
- `npm run build`
- `npm run start`

[Client]

- cd `mercado-libre/client`
- `npm run build`
- `npm run start`

### Development Mode
[Server]
- cd `mercado-libre/server`
- `npm install`
- `npm run dev` - para development mode

[Client]  
- cd `mercado-libre/client`
- `npm install`
- `npm run dev` - para development mode

3. Acceder a http://localhost:3000/ client
4. Acceder a http://localhost:8080/ server
5. Acceder a http://localhost:8080/api-docs server swagger
