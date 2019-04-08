rm -rf Docker/Client Docker/src

cd Client && npm install && npm audit fix && npm run-script build
cd .. && cp -r Client/dist/Client Docker && cp -r Server/* Docker/serve/src
