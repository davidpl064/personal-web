echo "Compiling CSS files"
npx tailwindcss -i ./styles/styles.css -o ./dist/styles_tailwind.css

# Run build-dev from cli
NODE_ENV="development" npm run build-dev