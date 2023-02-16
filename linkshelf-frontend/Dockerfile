#Stage 1
FROM node:alpine AS builder

WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --production
# Copy app files
COPY . .

ENV PORT 3000
# Build the app
RUN npm run build

# Stage 2
# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE $PORT
# Start nginx
CMD ["nginx", "-g", "daemon off;"]