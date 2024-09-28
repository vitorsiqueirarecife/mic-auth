build:
	docker build -t base-project:0.1 .

run:
	docker run --name base-project -p 3000:3000 base-project:0.1

mongo-pull:
	docker pull mongo

mongo-run:
	docker run --name mongo -p 27017:27017 -d mongo

init:
	make build
	make mongo-pull
	make mongo-run
	make run