FROM node:20-alpine
LABEL org.opencontainers.image.source="https://github.com/solinechnt/platform-demo-lab1"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "src/app.js"]

