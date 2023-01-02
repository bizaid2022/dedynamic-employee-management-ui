FROM node:18.12.0 AS builder

ARG REACT_APP_API_URL
ARG REACT_APP_BUILD_NUMBER

WORKDIR '/app'
COPY package.json .
RUN npm install

COPY . .

RUN curl -o dotenv https://raw.githubusercontent.com/bashup/dotenv/master/dotenv
RUN chmod +x dotenv
RUN cp -n .env.example .env
RUN ./dotenv -f .env set GENERATE_SOURCEMAP=false \
  REACT_APP_API_URL=${REACT_APP_API_URL} \
  REACT_APP_BUILD_NUMBER=${REACT_APP_BUILD_NUMBER}
RUN rm -rf dotenv

RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html