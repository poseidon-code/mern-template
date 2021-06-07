## INSTALLATION

_run the following commands in a terminal inside root directory_

CMD : `npm install & npm install ./client/` \
Other Terminals : `npm install; npm install ./client/`

## DEVELOPMENT

1. Create `.env` file in root (`/`) directory.
2. **Add environment variables :** \
   `FRONTEND=http://localhost:3000` \
   `DB_PASSWORD=mongodb_password`
3. Create `.env.local` file in client (`/client/`) directory.
4. **Add environment variables :** \
   `REACT_APP_BACKEND=http://localhost:5000`

## DEVELOPMENT SCRIPTS

### `npm start`

> (executes `node index.js`) : Starts the Backend Server.

### `npm run dev:backend`

> (executes `nodemon index.js`) : Starts the Backend Server in watch mode _i.e. restart the server again when changes are saved in `index.js` file_.

### `npm run dev:frontend`

> (executes `npm --prefix ./client/ start`) : Starts the Frontend in watch mode _i.e. restart the frontend again when changes are saved inside `client/src/` folder_.

### `npm run dev`

> (executes `concurrently "npm run dev:*"`) : Starts both the Backend and Frontend in watch mode _i.e. runs both `npm run dev:backend` and `npm run dev:frontend` at the same time_.

## PRODUCTION

1. Deploy to remote github repository.
2. Netlify Deploy using Git Repository (Automatic Deploy Enabled)
3. **Netlify Deploy Settings :** \
   Root Directory : `client` \
   Publishing Directory : `client/build` \
   Building Script : `npm run build `
4. Heroku Deploy using Git Repository (Automatic Deploy Enabled)
5. **Heroku Deploy Settings :** default
6. **Netlify environment variables :** \
   `REACT_APP_BACKEND=https://backend-deploy.herokuapp.com`
7. **Heroku environment variable :** \
   `FRONTEND=http://frontend-deploy.netlify.app` \
   `DB_PASSWORD=mongodb_password`
