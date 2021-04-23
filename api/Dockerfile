# Image de base
FROM node:current-alpine

# Repertoire de travail
WORKDIR /usr/app/

# Installation des modules
RUN npm install
RUN npm install -g nodemon

# Lancement de l'application
CMD ["npm", "start"]
