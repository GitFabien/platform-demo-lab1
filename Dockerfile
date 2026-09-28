FROM node:20-alpine
WORKDIR /app
# Copie de tous les fichiers du projet dans le conteneur
COPY . .
# Exposition du port utilisé par l'application
EXPOSE 8080
# Commande de démarrage
CMD ["node", "app.js"]