FROM node:alpine

RUN mkdir -p /web

COPY . /web

WORKDIR /web
RUN npm -v
RUN npm install -g npm@8.19.2
RUN npm config set registry https://registry.npm.taobao.org

RUN npm install


RUN npm run build
ENV NODE_ENV=production
ENV HOST 0.0.0.0
ENV PORT 8000
ENV _AXIOS_BASE_URL_ http://server:3000/web/api/
EXPOSE 8000

CMD ["npm", "start"]
