# FROM node:18.12.0 AS builder

# ARG REACT_APP_API_URL
# ARG REACT_APP_BUILD_NUMBER

# WORKDIR '/app'
# COPY package.json .
# RUN npm install

# COPY . .

# RUN curl -o dotenv https://raw.githubusercontent.com/bashup/dotenv/master/dotenv
# RUN chmod +x dotenv
# RUN cp -n .env.example .env
# RUN ./dotenv -f .env set GENERATE_SOURCEMAP=false \
#   REACT_APP_API_URL=${REACT_APP_API_URL} \
#   REACT_APP_BUILD_NUMBER=${REACT_APP_BUILD_NUMBER}
# RUN rm -rf dotenv

# RUN npm run build

# FROM nginx:alpine
# COPY --from=builder /app/build /usr/share/nginx/html


# Setup and build the client

FROM node:12.18.0-alpine as client

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install -qy
COPY client/ ./
RUN npm run build


# Setup the server

FROM node:9.4.0-alpine

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]