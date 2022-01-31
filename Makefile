up:
	docker-compose up --build

serve:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build
