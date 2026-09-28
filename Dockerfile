# Utiliser une image Node.js légère
FROM node:20-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances en premier (optimisation du cache Docker)
COPY package*.json ./

# Installer les dépendances 
RUN npm install

# Copier le reste des fichiers du projet (y compris le dossier src)
COPY . .

# Exposer le port par défaut de l'application
EXPOSE 8080

# Lancer l'application en pointant vers le bon fichier source
CMD ["node", "src/app.js"]