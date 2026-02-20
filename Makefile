GREEN_COLOR  := \033[0;32m
RESET_COLOR  := \033[0m

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
	
run-dev:  ## build web in development mode
	NODE_ENV="development" npm run build-dev
run:  ## build web in development mode
	NODE_ENV="production" npm run build

help:  ## this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'