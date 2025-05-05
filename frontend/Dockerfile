# Build
# Deploy using Caddy to host static files
FROM caddy:2.8.4-alpine

# Copy static files, verify Caddyfile formatting
ARG DASHBOARD=onroutebc-prod-frontend.apps.silver.devops.gov.bc.ca
ARG PUBLIC_API_URL

# Install envsubst
RUN apk add --no-cache gettext

# Copy files
COPY Caddyfile /etc/caddy/Caddyfile
COPY static_home_page /var/www/onroute

# Use envsubst to replace PUBLIC_API_URL in notification.js.template
RUN export PUBLIC_API_URL=${PUBLIC_API_URL}

# Replace {{DASHBOARD}} in index.html
RUN sed -i "s/{{DASHBOARD}}/${DASHBOARD}/g" /var/www/onroute/index.html 

# Format Caddyfile
RUN caddy fmt /etc/caddy/Caddyfile

EXPOSE 3000
