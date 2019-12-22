FROM nginx:1.17.6-alpine

VOLUME /nginx

EXPOSE 80

ENTRYPOINT sleep 3 && [ ! "$(ls -A /nginx)" ] \
&& mv /etc/nginx/* /nginx \
|| sleep 3 && rm -rf /etc/nginx \
 && ln -sf /nginx /etc/nginx \
 && nginx -g 'daemon off;'