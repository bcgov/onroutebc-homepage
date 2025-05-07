# Build
# Deploy using Caddy to host static files
FROM caddy:2.8.4-alpine

# Install envsubst
RUN apk add --no-cache gettext

# Copy files
COPY Caddyfile /etc/caddy/Caddyfile
COPY static_home_page /var/www/onroute

# Change permissions
RUN chmod -R 0777 /var/www/

# Format Caddyfile
RUN caddy fmt /etc/caddy/Caddyfile

EXPOSE 3000
