# INSTALLING LATEST VERSION OF NODE
FROM node:10.13-alpine

# INSTALLING DEPENDENCIES
# ensuring that package and package-lock JSON files are avialable
COPY package*.json ./
# running production only code
# RUN npm ci --only=production
RUN npm install

# BUNDLING APP SOURCE
COPY . .

# TypeScript
RUN npm run tsc

# PORT BINDING
EXPOSE 4000

# RUN NODE SERVER
CMD ["node", "index.ts"]