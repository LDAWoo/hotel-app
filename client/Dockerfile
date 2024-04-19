FROM node:18-alpine AS BUILD_IMAGE

WORKDIR /app/react-app

COPY package.json .

RUN npm install --force

COPY . .

RUN npm run build

# Build production
FROM node:18-alpine AS BUILD_IMAGE_PRODUCTION

WORKDIR /app/react-app

COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/

EXPOSE 8080

COPY package.json .
COPY vite.config.js .

RUN npm install typescript --force

EXPOSE 8080
CMD [ "npm", "run", "preview" ]
