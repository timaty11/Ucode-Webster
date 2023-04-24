install: 
	make -C server setup
	make -C client install

start-frontend:
	make -C ./client start

start-backend:
	make -C ./server start

start-all:
	make -C ./server start & make -C ./client start

db-migrate:
	make -C ./server db-migrate

pid-servers:
	ps aux | grep Connect-FullStack-Uevent | grep -v grep
