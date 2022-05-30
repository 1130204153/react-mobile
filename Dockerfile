FROM 10.45.80.1/public/portal-common-nginx:latest

COPY ./dist /usr/local/nginx/html/
COPY ./nginx.conf /usr/local/nginx/conf/ 

EXPOSE 80
ENTRYPOINT /usr/local/nginx/sbin/nginx -g "daemon off;"