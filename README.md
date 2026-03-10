# SpotifyClone Backend
Server for SpotifyClone  
[Front End](https://github.com/lawsonhung/SpotifyCloneFrontEnd)  

## Hire Me!
Currently seeking Frontend Software Engineering roles - [LinkedIn](https://www.linkedin.com/in/hirelawson/)

## Getting Started

### Prerequisites

You need a Spotify Premium account for the project to work properly and request an access token. Grab the Spotify Client_ID and client secret from your dashboard. You need this to set the `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` in step 3 of Getting Started below.  
[Spotify Docs - Request an Access Token](https://developer.spotify.com/documentation/web-api/tutorials/getting-started#request-an-access-token)

### Installation

How to get a local copy up and running

1. Clone the repo
```sh
git clone https://github.com/lawsonhung/SpotifyCloneBackEnd.git
```
2. Install NPM packages
```sh
npm i
```
3. Create a `.env` in the root directory and set the `PORT` and `MONGO_URI`. Your `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` goes here as well
```sh
touch .env
```
```
PORT=PORT_GOES_HERE
MONGO_URI=YOUR_MONGODB_URI_HERE
SPOTIFY_CLIENT_ID=YOUR_CLIENT_ID_HERE
SPOTIFY_CLIENT_SECRET=YOUR_SECRET_HERE
```
4. Compile TypeScript
```sh
npx tsc
```
5. Run the project `dev` command
```sh
npm run dev
```

### Built With

[![MongoDB][MongoDB]][MongoDB-url]  
[![Mongoose][Mongoose]][Mongoose-url]  
[![Express][Express.js]][Express-url]  
[![Node][Node.js]][Node-url]  
[![Axios][Axios]][Axios-url]  
[![TypeScript][TypeScript]][TypeScript-url]  
[![TS-Node][TS-Node]][TS-Node-url]  
[![Nodemon][Nodemon]][Nodemon-url]  

<!-- MARKDOWN LINKS & IMAGES -->
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Mongoose]: https://img.shields.io/badge/mongoose-23880000?style=for-the-badge&logo=mongoose&logoColor=%white
[Mongoose-url]: https://mongoosejs.com/
[Express.js]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Node.js]: https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Axios]: https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white
[Axios-url]: https://axios-http.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TS-Node]: https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white
[TS-Node-url]: https://typestrong.org/ts-node/
[Nodemon]: https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white
[Nodemon-url]: https://nodemon.io/
