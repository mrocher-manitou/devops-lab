# On part d'un ordinateur contenant déjà Node.js
FROM node:20-alpine

# On copie notre fichier server.js à l'intérieur du conteneur
COPY server.js /app/server.js

# On se place dans le dossier /app
WORKDIR /app

# On indique à Docker de lancer notre script au démarrage
CMD ["node", "server.js"]