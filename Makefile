install: install-deps

run:
	npm run babel-node -- 'src/bin/hexlet.js' 10

install-deps:
	yarn

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npm run eslint .

publish:
	npm publish

.PHONY: test
