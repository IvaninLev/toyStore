start: up run-dev-front
refresh: fresh-db seed-db
recreate: remove build up refresh
restart: down up

build:
	vendor/bin/sail   build

up:
	vendor/bin/sail   up -d

down:
	vendor/bin/sail   down --remove-orphans

remove:
	vendor/bin/sail   down -v --remove-orphans

artisans:
	vendor/bin/sail artisan $(filter-out $@,$(MAKECMDGOALS))

composer:
	vendor/bin/sail composer $(filter-out $@,$(MAKECMDGOALS))

migrate-db:
	vendor/bin/sail artisan migrate

seed-db:
	vendor/bin/sail artisan db:seed

fresh-db:
	vendor/bin/sail artisan migrate:fresh

install-node-packages:
	vendor/bin/sail npm i

install-node-package:
	vendor/bin/sail npm i -D $(filter-out $@,$(MAKECMDGOALS))

run-dev-front:
	vendor/bin/sail npm run dev

build-assets:
	vendor/bin/sail npm run build

profile:
	vendor/bin/sail npm run profile
