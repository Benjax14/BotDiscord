    FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache git ffmpeg
COPY src /app
RUN npm install
EXPOSE 3000
CMD ["node", "bot.js"]