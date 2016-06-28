.PHONY: build

install:
	@npm install

build: copy-templates copy-images copy-ng-admin 
	@./node_modules/.bin/webpack  --progress --colors --devtool source-map

copy-ng-admin:
	@cp ./node_modules/ng-admin/build/ng-admin.min.js build/
	@cp ./node_modules/ng-admin/build/ng-admin.min.js.map build/
	@cp ./node_modules/ng-admin/build/ng-admin.min.css build/
	@cp ./node_modules/ng-admin/build/ng-admin.min.css.map build/

copy-templates:
	mkdir -p ./build/templates
	@cp ./templates/* ./build/templates/

copy-images:
	mkdir -p ./build/images
	@cp ./images/* ./build/images/

run: copy-templates copy-images copy-ng-admin
	@echo "**************************************************"
	@echo "* open http://localhost:8080/webpack-dev-server/ *"
	@echo "**************************************************"
	@./node_modules/.bin/webpack-dev-server --host=0.0.0.0 --progress --colors --devtool cheap-module-inline-source-map --hot --inline

data:
	@node dataGenerator/generate.js
