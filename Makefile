# Makefile

install: #устанавить зависимые модули
	npm ci
	sudo npm link

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
