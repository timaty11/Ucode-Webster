setup: install db-migrate

install:
	npm install

db-migrate:
	npx knex migrate:latest
	node ./databasePopulation.js

start:
	npm run start