build:
	docker build -t base-project:0.1 .

run:
	docker run --name base-project -p 3000:3000 base-project:0.1
