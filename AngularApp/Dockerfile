FROM jojons/ngx-admin-modules:starter

EXPOSE 4200

VOLUME /app

WORKDIR /app

# RUN ln -sf /deps/node_modules . \
# && cp /deps/package-lock.json .

ENTRYPOINT [ "npm", "run"]

CMD [ "self-host" ]
