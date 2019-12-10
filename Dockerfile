# Stage 1 - build process
FROM node:12.13.1 as builder

# Create app directory
WORKDIR /app

# Copy files and install dependencies
COPY . ./
RUN npm install
RUN npm run build

# Stage 2 - production environment
FROM nginx:1.17.6-alpine
COPY --from=builder /app/build/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
