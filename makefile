.PHONY: build

install:
	@npm install

build: create-build-dir copy-files
	@./node_modules/.bin/webpack  --progress --colors --devtool source-map

copy-files: create-build-dir copy-jasny copy-templates copy-images

copy-jasny:
	@cp ./js/vendor/jasny-bootstrap.min.js build/
	@cp ./js/vendor/jasny-bootstrap.js build/

copy-templates:
	mkdir -p ./build/templates
	@cp -R ./templates/* ./build/templates/

create-build-dir:
	mkdir -p ./build

copy-images:
	mkdir -p ./build/images
	@cp -R ./images/* ./build/images/

run: copy-files
	@echo "**************************************************"
	@echo "* open http://localhost:8080/webpack-dev-server/ *"
	@echo "**************************************************"
	@./node_modules/.bin/webpack-dev-server --host=0.0.0.0 --progress --colors --devtool cheap-module-inline-source-map --hot --inline

data:
	@node dataGenerator/generate.js
