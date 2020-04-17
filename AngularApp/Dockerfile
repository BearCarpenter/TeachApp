FROM jojons/teach-app-node-modules-master

EXPOSE 4200

VOLUME /app

WORKDIR /app

# RUN ln -sf /deps/node_modules . \
# && cp /deps/package-lock.json .

ENTRYPOINT [ "npm", "run"]

CMD [ "self-host" ]
