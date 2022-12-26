# Makefile

install: #устанавить зависимые модули
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
