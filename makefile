.PHONY: build

install:
	@npm install

build: copy-files
	@./node_modules/.bin/webpack  --progress --colors --devtool source-map

copy-files: copy-templates copy-images copy-angular copy-underscore copy-restangular copy-angular-route copy-jasny

copy-angular:
	@cp ./node_modules/angular/angular.js build/
	@cp ./node_modules/angular/angular.min.js build/
	@cp ./node_modules/angular/angular.min.js.map build/

copy-jasny:
	@cp ./js/vendor/jasny-bootstrap.min.js build/
	@cp ./js/vendor/jasny-bootstrap.js build/

copy-angular-route:
	@cp ./node_modules/angular-route/angular-route.min.js build/
	@cp ./node_modules/angular-route/angular-route.min.js.map build/

copy-underscore:
	@cp ./node_modules/underscore/underscore-min.js build/
	@cp ./node_modules/underscore/underscore-min.map build/
	@cp ./node_modules/underscore/underscore.js build/

copy-restangular:
	@cp ./node_modules/restangular/dist/restangular.min.js build/
	@cp ./node_modules/restangular/dist/restangular.js build/

copy-templates:
	mkdir -p ./build/templates
	@cp -R ./templates/* ./build/templates/

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
