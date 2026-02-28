GREEN_COLOR  := \033[0;32m
RESET_COLOR  := \033[0m

install: ## install dependencies from package.json
	npm install
update-node-db:
	npx update-browserslist-db@latest
update-packages-latest:
	npm install -g npm-check-updates
	ncu
	ncu -u
	npm install
compile-style: ## install package in "editable" mode
	npm run compile-css
	@echo "Ouput CSS style files in $(GREEN_COLOR)./dist/styles_tailwind.css$(RESET_COLOR)"

lint:  ## lint code
	npm run linting
	
build-dev:  ## build web in development mode
	npm run build-dev
build:  ## build web in development mode
	npm run build
preview:  ## preview built web
	npm run preview

help:  ## this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'