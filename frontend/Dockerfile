# Build
# Deploy using Caddy to host static files
FROM caddy:2.8.4-alpine

# Copy static files, verify Caddyfile formatting
ARG DASHBOARD=onroutebc-prod-frontend.apps.silver.devops.gov.bc.ca

# Copy files
COPY Caddyfile /etc/caddy/Caddyfile
COPY static_home_page /var/www/onroute

# Change permissions
RUN chmod -R 0777 /var/www/

# Replace {{DASHBOARD}} in index.html
RUN sed -i "s/{{DASHBOARD}}/${DASHBOARD}/g" /var/www/onroute/index.html 

# Format Caddyfile
RUN caddy fmt /etc/caddy/Caddyfile

EXPOSE 3000
