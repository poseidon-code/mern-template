## DEVELOPMENT

1. Create `.env` file in root (`/`) directory.
2. Add environment variables :
   FRONTEND=http://localhost:3000
   DB_PASSWORD=mongodb_password
3. Create `.env.local` file in client (`/client/`) directory.
4. Add environment variables :
   REACT_APP_BACKEND=http://localhost:5000

## PRODUCTION

1. Deploy to remote github repository.
2. Netlify Deploy using Git Repository (Automatic Deploy Enabled)
3. Netlify Deploy Settings :
   Root Directory : client
   Publishing Directory : client/build
   Building Script : npm run build
4. Heroku Deploy using Git Repository (Automatic Deploy Enabled)
5. Heroku Deploy Settings : default
6. Netlify environment variables :
   REACT_APP_BACKEND=https://backend-deploy.herokuapp.com
7. Heroku environment variable :
   FRONTEND=http://frontend-deploy.netlify.app
   DB_PASSWORD=mongodb_password
